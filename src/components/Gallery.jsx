import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Carousel from './Carousel';
import Section from './app/Section';
import useIsMobile from '../hooks/useIsMobile';

/**
 * A tabbed screenshot gallery with a lightbox: a grid on desktop, a swipeable carousel on phones.
 *
 * root: the folder under public/ holding the images, e.g. 'bloop-brigade/'.
 * galleries: { [id]: { label, dir, shots: [[file, caption]], portrait? } }. The tabs only show when there's more
 * than one. `portrait` is for tall phone screenshots (9:16); `aspect` sets another shape (e.g. '16 / 10'); the
 * default is 16:9.
 */
export default function Gallery({ root, galleries, title = 'Screenshots' }) {
  const base = import.meta.env.BASE_URL;
  const isMobile = useIsMobile();
  const ids = Object.keys(galleries);
  const [tab, setTab] = useState(ids[0]);
  const [open, setOpen] = useState(-1);
  const g = galleries[tab];
  const n = g.shots.length;
  const src = (file) => `${base}${root}${g.dir}${file}`;
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

  const shape = g.portrait ? ' is-portrait' : '';
  const aspect = g.aspect ? { '--shot-aspect': g.aspect } : undefined;

  return (
    <Section title={title} className={ids.length > 1 ? 'section-tabbed' : ''}>
      {ids.length > 1 && (
        <div className='bb-tabs' role='tablist'>
          {ids.map((id) => (
            <button
              key={id}
              role='tab'
              aria-selected={tab === id}
              className={tab === id ? 'active' : ''}
              onClick={() => {
                setTab(id);
                setOpen(-1);
              }}
            >
              {galleries[id].label}
            </button>
          ))}
        </div>
      )}
      {isMobile ? (
        <Carousel key={tab} label={`${g.label || title} screenshots`} count={n} className={g.portrait ? 'carousel-clips' : ''}>
          {g.shots.map(([file, alt], i) => (
            <figure key={file}>
              <button className={`bb-shot${shape}`} style={aspect} onClick={() => setOpen(i)} aria-label={`View larger: ${alt}`}>
                <img src={src(file)} alt={alt} loading='lazy' />
              </button>
              <figcaption>{alt}</figcaption>
            </figure>
          ))}
        </Carousel>
      ) : (
        <div className={`bb-grid${shape}`}>
          {g.shots.map(([file, alt], i) => (
            <button key={tab + file} className={`bb-shot${shape}`} style={aspect} onClick={() => setOpen(i)} aria-label={`View larger: ${alt}`}>
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
