import React, { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../lib/motion';

/**
 * An ambient, full-bleed backdrop for a hero: drifting colour fields, a blueprint grid that fades out towards the
 * edges, and a glow that follows the cursor and lights up the grid beneath it. Place it as the first child of a
 * `.hero`. It's decorative only: hidden from assistive tech and never catches clicks.
 */
export default function HeroBackdrop() {
  const ref = useRef(null);

  // Follow the cursor across the whole hero (the backdrop itself ignores pointer events). Skipped on touch screens
  // and when reduced motion is on, where the static backdrop still shows.
  useEffect(() => {
    const el = ref.current;
    const hero = el?.parentElement;
    if (!el || !hero || prefersReducedMotion() || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let frame = 0;
    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mx', `${e.clientX - r.left}px`);
        el.style.setProperty('--my', `${e.clientY - r.top}px`);
        el.classList.add('is-lit');
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(frame);
      el.classList.remove('is-lit');
    };

    hero.addEventListener('pointermove', onMove);
    hero.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      hero.removeEventListener('pointermove', onMove);
      hero.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <div className='hero-backdrop' ref={ref} aria-hidden='true'>
      <span className='hb-field hb-field-1'></span>
      <span className='hb-field hb-field-2'></span>
      <span className='hb-field hb-field-3'></span>
      <span className='hb-beam'></span>
      <span className='hb-grid'></span>
      <span className='hb-glow'></span>
    </div>
  );
}
