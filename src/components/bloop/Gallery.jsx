import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Carousel from '../Carousel';
import Section from '../app/Section';
import useIsMobile from '../../hooks/useIsMobile';

const GALLERIES = {
  mobile: {
    label: 'On your phone',
    dir: 'mobile/',
    shots: [
      ['01_swarm.jpg', 'Holding back a swarm of Grumbles with the touch controls'],
      ['02_poppers.jpg', 'A line of Popper towers guarding the path'],
      ['03_night.jpg', 'Defending the island at night'],
      ['04_locker.jpg', 'Dressing up a Bloop in the Locker'],
      ['05_place.jpg', 'Placing a new tower beside the path'],
      ['06_king.jpg', 'Facing the King Grumble boss'],
      ['07_challenges.jpg', 'The Challenges screen'],
      ['08_storm.jpg', 'Fighting on through a storm'],
    ],
  },
  scenes: {
    label: 'Around the island',
    dir: '',
    shots: [
      ['01_island.jpg', 'The island and its volcano at dawn'],
      ['04_friends.jpg', 'Four friends in costumes defending together'],
      ['05_splitscreen.jpg', 'Four-player split-screen'],
      ['03_chase.jpg', 'A Bloop running from a pack of Grumbles'],
      ['02_portal.jpg', 'Grumbles pouring out of a portal'],
      ['06_defend.jpg', 'Towers and Bloops defending the path'],
      ['07_boss.jpg', 'The King Grumble boss'],
      ['08_eruption.jpg', 'The volcano erupting and the island growing'],
      ['09_night.jpg', 'The island at night'],
      ['10_towers.jpg', 'A wall of upgraded towers'],
    ],
  },
};

export default function Gallery() {
  const base = import.meta.env.BASE_URL;
  const isMobile = useIsMobile();
  const [tab, setTab] = useState('mobile');
  const [open, setOpen] = useState(-1);
  const g = GALLERIES[tab];
  const n = g.shots.length;
  const src = (file) => `${base}bloop-brigade/${g.dir}${file}`;
  const step = (d) => setOpen((i) => (i + d + n) % n);

  useEffect(() => {
    if (open < 0) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(-1);
      if (e.key === 'ArrowRight') setOpen((i) => (i + 1) % n);
      if (e.key === 'ArrowLeft') setOpen((i) => (i - 1 + n) % n);
    };
    window.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [open, n]);

  return (
    <Section title='Screenshots' className='section-tabbed'>
      <div className='bb-tabs' role='tablist'>
        {Object.entries(GALLERIES).map(([id, v]) => (
          <button key={id} role='tab' aria-selected={tab === id} className={tab === id ? 'active' : ''} onClick={() => setTab(id)}>
            {v.label}
          </button>
        ))}
      </div>
      {isMobile ? (
        <Carousel key={tab} label={`${g.label} screenshots`} count={n}>
          {g.shots.map(([file, alt], i) => (
            <figure key={file}>
              <button className='bb-shot' onClick={() => setOpen(i)} aria-label={`View larger: ${alt}`}>
                <img src={src(file)} alt={alt} loading='lazy' />
              </button>
              <figcaption>{alt}</figcaption>
            </figure>
          ))}
        </Carousel>
      ) : (
        <div className='bb-grid'>
          {g.shots.map(([file, alt], i) => (
            <button key={tab + file} className='bb-shot' onClick={() => setOpen(i)} aria-label={`View larger: ${alt}`}>
              <img src={src(file)} alt={alt} loading='lazy' />
            </button>
          ))}
        </div>
      )}

      {open >= 0 && (
        <div className='bb-lightbox' role='dialog' aria-modal='true' aria-label={g.shots[open][1]} onClick={() => setOpen(-1)}>
          <button className='bb-lb-btn bb-lb-close' aria-label='Close' onClick={() => setOpen(-1)}>
            <X size={24} />
          </button>
          <button
            className='bb-lb-btn bb-lb-prev'
            aria-label='Previous screenshot'
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
          >
            <ChevronLeft size={28} />
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={src(g.shots[open][0])} alt={g.shots[open][1]} />
            <figcaption>
              {g.shots[open][1]} · {open + 1} / {n}
            </figcaption>
          </figure>
          <button
            className='bb-lb-btn bb-lb-next'
            aria-label='Next screenshot'
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </Section>
  );
}
