import React, { useState } from 'react';
import Carousel from '../Carousel';
import ClipPlayer from '../ClipPlayer';
import Section from '../app/Section';
import useIsMobile from '../../hooks/useIsMobile';

const SHORTS = [
  ['squad', 'Online co-op with a six-letter code'],
  ['towers', 'Build, upgrade and defend'],
  ['closet', 'Over 100 outfits to unlock'],
  ['nope', 'Things this game doesn’t have'],
];

export default function Shorts() {
  const base = import.meta.env.BASE_URL;
  const isMobile = useIsMobile();
  const [current, setCurrent] = useState(0);
  // One sound setting for all the clips, so after unmuting, swiping on keeps the sound.
  const [muted, setMuted] = useState(true);

  const clips = SHORTS.map(([id, title], i) => (
    <figure key={id}>
      <ClipPlayer
        src={`${base}bloop-brigade/shorts/${id}.mp4`}
        poster={`${base}bloop-brigade/shorts/${id}.jpg`}
        title={title}
        // On phones the centred clip plays by itself (muted); on desktop all four are on screen, so they wait for a click.
        autoplay={isMobile}
        focused={!isMobile || i === current}
        muted={muted}
        onMutedChange={setMuted}
      />
      <figcaption>{title}</figcaption>
    </figure>
  ));

  return (
    <Section title='Watch it in action' subtitle='Short clips, recorded straight from the game.'>
      {isMobile ? (
        <Carousel label='Gameplay clips' count={SHORTS.length} className='carousel-clips' onChange={setCurrent}>
          {clips}
        </Carousel>
      ) : (
        <div className='bb-shorts'>{clips}</div>
      )}
    </Section>
  );
}
