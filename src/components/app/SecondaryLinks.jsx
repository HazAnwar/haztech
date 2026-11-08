import React from 'react';

/** A row of small text links (GitHub, direct downloads...) under the main download button. links: [{ href, Icon, label }] */
export default function SecondaryLinks({ links }) {
  return (
    <div className='secondary-links'>
      {links.map(({ href, Icon, label }, i) => (
        <React.Fragment key={href}>
          {i > 0 && <span aria-hidden='true'>|</span>}
          <a href={href} target='_blank' rel='noopener noreferrer'>
            {Icon && <Icon size={14} />} {label}
          </a>
        </React.Fragment>
      ))}
    </div>
  );
}
