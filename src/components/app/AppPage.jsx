import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BugReport from '../BugReport';
import DownloadOptions from './DownloadOptions';
import { DownloadsContext } from './downloads';
import { detectPlatform, pickPrimary, withPlatformMeta } from '../../lib/platforms';

/**
 * The shell every product page shares: a centred hero (icon, name, tagline and download options), the page's own
 * sections, then the bug report form. `?platform=` picks the platform and `?redirect` sends the visitor straight
 * to its store (for QR codes and video links).
 *
 * platforms: [{ id, url?, desc?, store?, name?, Icon?, cta?, cardCta? }]. One without a url shows as "Coming soon".
 * fallback: the platform for the main button when the visitor's own isn't available (omit to show the full list).
 */
export default function AppPage({ name, icon, tagline, links, platforms, fallback, repo, children }) {
  const [searchParams] = useSearchParams();
  const param = searchParams.get('platform');
  const downloads = useMemo(() => {
    const list = withPlatformMeta(platforms);
    return { platforms: list, primary: pickPrimary(list, detectPlatform(param), fallback) };
  }, [platforms, fallback, param]);
  const { primary } = downloads;

  const [redirecting, setRedirecting] = useState(searchParams.has('redirect') && !!primary);
  useEffect(() => {
    if (!redirecting) return;
    window.location.href = primary.url;
    const t = setTimeout(() => setRedirecting(false), 2500);
    return () => clearTimeout(t);
  }, [redirecting, primary]);

  const iconSrc = `${import.meta.env.BASE_URL}${icon}`;

  if (redirecting) {
    return (
      <div className='redirect-screen'>
        <div className='animate-float'>
          <img src={iconSrc} alt={`${name} icon`} className='app-icon app-icon-sm' />
        </div>
        <p>Redirecting to {primary.store || 'the store'}...</p>
      </div>
    );
  }

  return (
    <DownloadsContext.Provider value={downloads}>
      <div className='app-page'>
        <section className='hero'>
          <div className='animate-float hero-icon'>
            <img src={iconSrc} alt={`${name} icon`} className='app-icon' />
          </div>
          <h1 className='gradient-text'>{name}</h1>
          <p>{tagline}</p>
          <DownloadOptions links={links} />
        </section>

        {children}

        {repo && <BugReport repoName={repo} />}
      </div>
    </DownloadsContext.Provider>
  );
}
