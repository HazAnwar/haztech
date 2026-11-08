import React, { useEffect, useRef, useState } from 'react';
import { Maximize2, Minimize2, Play, Volume2, VolumeX } from 'lucide-react';
import { prefersReducedMotion } from '../lib/motion';

const PLAY_AT = 0.9; // autoplay once this much of the video is on screen...
const STOP_BELOW = 0.5; // ...and stop once less than this is (the gap stops it flickering at the edge)
const SEEK_STEP = 5; // seconds, for the arrow keys

// The element in fullscreen, if any (Safari before 16.4 only has the webkit-prefixed API).
const fullscreenElement = () => document.fullscreenElement || document.webkitFullscreenElement || null;

const savesData = () => typeof navigator !== 'undefined' && !!navigator.connection?.saveData;

const formatTime = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

/**
 * A video player without the browser's controls, used for the clips and the trailer: tap to play or pause, with mute
 * and fullscreen buttons and a seek bar along the bottom (drag it, or use the arrow keys).
 *
 * autoplay:      play muted on its own while focused and (almost) fully on screen. Skipped for reduced motion or data saver.
 * focused:       false stops it (e.g. it isn't the carousel's current slide). So does scrolling it off screen.
 * rewindOnStop:  go back to the start when stopped (short clips) or keep the place (the longer trailer).
 * muted / onMutedChange: the sound setting, which the clips share so it carries over as you swipe.
 * className:     size variant, e.g. 'clip-wide' for 16:9.
 */
export default function ClipPlayer({ src, poster, title, autoplay = false, focused = true, rewindOnStop = true, muted, onMutedChange, className = '' }) {
  const box = useRef(null);
  const video = useRef(null);
  // How much of it is on screen; null until the browser first says, so nothing is stopped before then.
  const [ratio, setRatio] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState({ current: 0, duration: 0 });
  const [fullscreen, setFullscreen] = useState(false);
  // Set when the person pauses it, so autoplay doesn't start it again until it has left and come back.
  const userPaused = useRef(false);

  useEffect(() => {
    const el = box.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([entry]) => setRatio(entry.intersectionRatio), { threshold: [0, STOP_BELOW, PLAY_AT, 1] });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onChange = () => setFullscreen(fullscreenElement() === box.current);
    document.addEventListener('fullscreenchange', onChange);
    document.addEventListener('webkitfullscreenchange', onChange);
    return () => {
      document.removeEventListener('fullscreenchange', onChange);
      document.removeEventListener('webkitfullscreenchange', onChange);
    };
  }, []);

  // Plays with or without sound; if the browser won't allow sound without a tap, falls back to muted.
  const start = (withSound) => {
    const v = video.current;
    v.muted = !withSound;
    v.play().catch((e) => {
      // Only fall back when the browser blocks sound, not when the play was simply interrupted.
      if (v.muted || e.name !== 'NotAllowedError') return;
      v.muted = true;
      onMutedChange(true);
      v.play().catch(() => {});
    });
  };

  const playWithSound = () => {
    userPaused.current = false;
    onMutedChange(false);
    start(true);
  };

  // While fullscreen it's what's on screen, whatever the page behind it is doing.
  const stopped = !fullscreen && (!focused || (ratio !== null && ratio < STOP_BELOW));
  const shouldAutoplay = autoplay && focused && ratio >= PLAY_AT && !prefersReducedMotion() && !savesData();

  useEffect(() => {
    if (!stopped) return;
    const v = video.current;
    if (!v.paused) v.pause();
    if (rewindOnStop && v.readyState > 0) v.currentTime = 0; // fires timeupdate, which resets the seek bar
    userPaused.current = false;
  }, [stopped, rewindOnStop]);

  useEffect(() => {
    if (shouldAutoplay && !userPaused.current && video.current.paused) start(!muted);
    // Only when it becomes eligible; changing the sound setting is handled below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldAutoplay]);

  useEffect(() => {
    video.current.muted = muted;
  }, [muted]);

  const toggle = () => {
    if (playing) {
      userPaused.current = true;
      video.current.pause();
    } else {
      // Pressing play is a clear sign they want to watch it, so turn the sound on.
      playWithSound();
    }
  };

  // Fullscreen keeps the player's own buttons. iPhones can only put the video itself in fullscreen, which uses their
  // built-in player. Going fullscreen is a sign they want to watch it, so it plays with sound.
  const toggleFullscreen = () => {
    const el = box.current;
    const v = video.current;
    if (fullscreenElement()) {
      (document.exitFullscreen || document.webkitExitFullscreen)?.call(document);
      return;
    }
    const enter = el.requestFullscreen || el.webkitRequestFullscreen;
    if (enter) enter.call(el)?.catch?.(() => {});
    else if (v.webkitEnterFullscreen) v.webkitEnterFullscreen();
    else return;
    playWithSound();
  };

  const seekTo = (seconds) => {
    const v = video.current;
    if (!v.duration) return;
    v.currentTime = Math.min(Math.max(seconds, 0), v.duration);
  };

  // Click or drag anywhere along the bar.
  const onSeekPointer = (e) => {
    if (e.type === 'pointermove' && !e.currentTarget.hasPointerCapture(e.pointerId)) return;
    if (e.type === 'pointerdown') e.currentTarget.setPointerCapture(e.pointerId);
    const r = e.currentTarget.getBoundingClientRect();
    seekTo(((e.clientX - r.left) / r.width) * video.current.duration);
  };

  const onSeekKey = (e) => {
    const v = video.current;
    const to = { ArrowLeft: v.currentTime - SEEK_STEP, ArrowRight: v.currentTime + SEEK_STEP, Home: 0, End: v.duration }[e.key];
    if (to === undefined) return;
    e.preventDefault();
    seekTo(to);
  };

  const onSurfaceKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    } else {
      onSeekKey(e);
    }
  };

  const onTimeUpdate = () => {
    const v = video.current;
    setTime({ current: v.currentTime, duration: v.duration || 0 });
  };

  const progress = time.duration ? time.current / time.duration : 0;

  return (
    <div ref={box} className={`clip ${className}${playing ? ' is-playing' : ''}${fullscreen ? ' is-fullscreen' : ''}`}>
      <video
        ref={video}
        src={src}
        poster={poster}
        preload='none'
        loop
        playsInline
        muted={muted}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onTimeUpdate}
        aria-hidden='true'
      />
      <div className='clip-surface' role='button' tabIndex={0} aria-label={`${playing ? 'Pause' : 'Play'}: ${title}`} onClick={toggle} onKeyDown={onSurfaceKey}>
        <span className='clip-play' aria-hidden='true'>
          <Play size={28} fill='currentColor' />
        </span>
      </div>
      <button className='clip-mute' aria-label={muted ? 'Unmute' : 'Mute'} aria-pressed={!muted} onClick={() => onMutedChange(!muted)}>
        {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
      <button className='clip-fullscreen' aria-label={fullscreen ? 'Exit full screen' : 'Full screen'} onClick={toggleFullscreen}>
        {fullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
      </button>
      <div
        className='clip-seek'
        role='slider'
        tabIndex={0}
        aria-label={`Seek: ${title}`}
        aria-valuemin={0}
        aria-valuemax={Math.round(time.duration)}
        aria-valuenow={Math.round(time.current)}
        aria-valuetext={`${formatTime(time.current)} of ${formatTime(time.duration)}`}
        onPointerDown={onSeekPointer}
        onPointerMove={onSeekPointer}
        onKeyDown={onSeekKey}
      >
        <span className='clip-seek-track'>
          <span style={{ transform: `scaleX(${progress})` }} />
        </span>
      </div>
    </div>
  );
}
