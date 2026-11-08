import { useEffect } from 'react';

const pauseAll = (videos, except) => videos.forEach((v) => v !== except && !v.muted && !v.paused && v.pause());

/**
 * Only one video with sound plays at a time: starting one, or unmuting one that's playing, pauses the others that
 * have sound. Muted videos (background loops, clips autoplaying silently) are left alone.
 */
export function useOneVideoAtATime() {
  useEffect(() => {
    const onChange = (e) => {
      const v = e.target;
      if (v instanceof HTMLVideoElement && !v.muted && !v.paused) pauseAll(document.querySelectorAll('video'), v);
    };
    // Media events don't bubble, so listen while capturing.
    document.addEventListener('play', onChange, true);
    document.addEventListener('volumechange', onChange, true);
    return () => {
      document.removeEventListener('play', onChange, true);
      document.removeEventListener('volumechange', onChange, true);
    };
  }, []);
}
