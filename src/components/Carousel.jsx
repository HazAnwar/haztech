import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { prefersReducedMotion } from '../lib/motion';

/**
 * A swipeable, snap-to-slide carousel with previous/next buttons and dots. Every slide, the first and last included,
 * sits in the centre when it's the current one. Calls onChange with the centred slide's index.
 * Slide width comes from the --slide custom property (see .carousel in index.css); `className` can change it.
 */
export default function Carousel({ label, count, className = '', onChange, children }) {
  const track = useRef(null);
  const [index, setIndex] = useState(0);

  const scrollToSlide = (i) => {
    const el = track.current;
    const slide = el?.children[i];
    if (!slide) return;
    el.scrollTo({ left: slide.offsetLeft - (el.clientWidth - slide.clientWidth) / 2, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  };

  const onScroll = () => {
    const el = track.current;
    const mid = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    Array.from(el.children).forEach((c, i) => {
      if (Math.abs(c.offsetLeft + c.clientWidth / 2 - mid) < Math.abs(el.children[best].offsetLeft + el.children[best].clientWidth / 2 - mid)) best = i;
    });
    if (best !== index) {
      setIndex(best);
      onChange?.(best);
    }
  };

  return (
    <div className={`carousel ${className}`.trim()} role='region' aria-roledescription='carousel' aria-label={label}>
      <div className='carousel-track' ref={track} onScroll={onScroll} tabIndex={0}>
        {React.Children.map(children, (child, i) => (
          <div className='carousel-slide' role='group' aria-roledescription='slide' aria-label={`${i + 1} of ${count}`} aria-current={i === index ? 'true' : undefined}>
            {child}
          </div>
        ))}
      </div>
      <div className='carousel-nav'>
        <button className='carousel-arrow' aria-label='Previous' disabled={index === 0} onClick={() => scrollToSlide(index - 1)}>
          <ChevronLeft size={22} />
        </button>
        <div className='carousel-dots'>
          {Array.from({ length: count }, (_, i) => (
            <button key={i} className={i === index ? 'active' : ''} aria-label={`Go to slide ${i + 1}`} aria-current={i === index ? 'true' : undefined} onClick={() => scrollToSlide(i)} />
          ))}
        </div>
        <button className='carousel-arrow' aria-label='Next' disabled={index === count - 1} onClick={() => scrollToSlide(index + 1)}>
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  );
}
