import React, { useState } from 'react';
import ClipPlayer from '../ClipPlayer';

/**
 * The trailer, in the same player as the clips: it loops on mute by itself once it's on screen. The sound button
 * turns the sound on, as does pausing and pressing play again. It keeps its place if you scroll away and back.
 */
export default function TrailerBanner() {
  const base = import.meta.env.BASE_URL;
  const [muted, setMuted] = useState(true);

  return (
    <ClipPlayer
      src={`${base}bloop-brigade/trailer.mp4`}
      poster={`${base}bloop-brigade/trailer.jpg`}
      title='Bloop Brigade trailer'
      className='clip-wide'
      autoplay
      rewindOnStop={false}
      muted={muted}
      onMutedChange={setMuted}
    />
  );
}
