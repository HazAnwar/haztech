import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SecondaryLinks from './SecondaryLinks';
import { useDownloads } from './downloads';

const external = { target: '_blank', rel: 'noopener noreferrer' };

/** The main download button for the visitor's platform, plus a "Show all platforms" slider when there's more than one. */
export default function DownloadOptions({ links }) {
  const { platforms, primary } = useDownloads();
  // With no download for this device (e.g. a game on Windows), open the platform list straight away.
  const [showAll, setShowAll] = useState(!primary);
  const several = platforms.length > 1;

  return (
    <div className='download-options'>
      {primary && (
        <a href={primary.url} className='btn btn-primary download-primary' {...external}>
          <primary.Icon size={20} /> {primary.cta || `Download for ${primary.name}`}
        </a>
      )}

      {links && <SecondaryLinks links={links} />}

      {several && (
        <button onClick={() => setShowAll(!showAll)} className='btn btn-secondary download-toggle' aria-expanded={showAll}>
          {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          {showAll ? 'Hide all platforms' : 'Show all platforms'}
        </button>
      )}

      {several && showAll && (
        <div className='platform-slider'>
          {platforms.map((p) => (
            <div key={p.id} className={`glass platform-card${p.url ? '' : ' is-unavailable'}`}>
              <p.Icon size={32} />
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              {p.url ? (
                <a href={p.url} className='btn btn-secondary' {...external}>
                  {p.cardCta || 'Download'}
                </a>
              ) : (
                <span className='btn btn-secondary' aria-disabled='true'>
                  Coming soon
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
