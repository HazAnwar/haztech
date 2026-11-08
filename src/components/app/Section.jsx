import React from 'react';

/** A page section with the shared spacing and a centred heading. `prose` centres and spaces out paragraphs of text. */
export default function Section({ id, title, subtitle, prose, className = '', sectionRef, children }) {
  return (
    <section id={id} ref={sectionRef} className={`section${prose ? ' section-prose' : ''} ${className}`.trim()}>
      {title && <h2 className={`section-title${subtitle ? ' has-subtitle' : ''}`}>{title}</h2>}
      {subtitle && <p className='section-subtitle'>{subtitle}</p>}
      {children}
    </section>
  );
}
