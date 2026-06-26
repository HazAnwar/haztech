import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GitBranch, ChevronDown, ChevronUp, Globe } from 'lucide-react';
import BugReport from '../components/BugReport';
import { IconApple, IconAndroid, IconWindows, IconLinux } from '../components/PlatformIcons';

const STORE_URLS = {
  web: 'https://markaz.haztech.services/',
  android: 'https://play.google.com/store/apps/details?id=com.haztech.prayer',
  ios: 'https://apps.apple.com/us/app/markaz/id6783402543',
  mac: 'https://apps.apple.com/us/app/markaz/id6783402543',
  windows: 'https://apps.microsoft.com/detail/9N53LTXNFFTZ',
  linux: 'https://snapcraft.io/markaz',
};

export default function Markaz() {
  const [searchParams] = useSearchParams();
  const platformParam = searchParams.get('platform');
  const shouldRedirect = searchParams.has('redirect');
  const [showAll, setShowAll] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(shouldRedirect);

  const getPlatformInfo = () => {
    let p = platformParam ? platformParam.toLowerCase() : '';
    if (!p) {
      if (typeof navigator !== 'undefined') {
        const ua = navigator.userAgent.toLowerCase();
        if (ua.includes('android')) p = 'android';
        else if (ua.includes('iphone') || ua.includes('ipad') || ua.includes('ipod')) p = 'ios';
        else if (ua.includes('mac')) p = 'mac';
        else if (ua.includes('win')) p = 'windows';
        else if (ua.includes('linux')) p = 'linux';
      }
    }

    switch (p) {
      case 'web':
        return { name: 'Web App', icon: <Globe size={20} />, storeUrl: STORE_URLS.web };
      case 'ios':
        return { name: 'iOS', icon: <IconApple size={20} />, storeUrl: STORE_URLS.ios };
      case 'mac':
      case 'macos':
        return { name: 'macOS', icon: <IconApple size={20} />, storeUrl: STORE_URLS.mac };
      case 'windows':
      case 'win':
        return { name: 'Windows', icon: <IconWindows size={20} />, storeUrl: STORE_URLS.windows };
      case 'linux':
        return { name: 'Linux', icon: <IconLinux size={20} />, storeUrl: STORE_URLS.linux };
      case 'android':
      default:
        return { name: 'Android', icon: <IconAndroid size={20} />, storeUrl: STORE_URLS.android };
    }
  };

  const platformInfo = getPlatformInfo();
  const downloadText = platformInfo.name === 'Web App' ? 'Launch Web App' : platformInfo.name ? `Download for ${platformInfo.name}` : 'Download App';

  useEffect(() => {
    if (shouldRedirect && platformInfo.storeUrl) {
      window.location.href = platformInfo.storeUrl;
      const timer = setTimeout(() => {
        setIsRedirecting(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [shouldRedirect, platformInfo.storeUrl]);

  if (isRedirecting) {
    return (
      <div style={{ height: '100%', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
        <div className='animate-float'>
          <img src={`${import.meta.env.BASE_URL}markaz.png`} alt='Markaz Icon' style={{ width: '64px', height: '64px', borderRadius: '16px' }} />
        </div>
        <p style={{ color: 'var(--text-secondary)' }}>Redirecting to the store...</p>
      </div>
    );
  }

  return (
    <div className='app-page'>
      <section className='hero'>
        <div className='animate-float' style={{ marginBottom: '2rem' }}>
          <img src={`${import.meta.env.BASE_URL}markaz.png`} alt='Markaz Icon' style={{ width: '96px', height: '96px', borderRadius: '24px', boxShadow: '0 12px 32px rgba(0,0,0,0.3)' }} />
        </div>
        <h1 className='gradient-text'>Markaz</h1>
        <p>Your all in one deen companion for Islamic prayer times, Qibla direction, and much more!</p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', marginTop: '1.5rem', width: '100%' }}>
          <a href={platformInfo.storeUrl} className='btn btn-primary' style={{ width: '100%', maxWidth: '320px' }}>
            {platformInfo.icon} {downloadText}
          </a>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            <a
              href='https://github.com/HazAnwar/markaz'
              target='_blank'
              rel='noopener noreferrer'
              style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem', transition: 'color 0.2s' }}
            >
              <GitBranch size={14} /> View / Download on GitHub
            </a>
          </div>

          <button onClick={() => setShowAll(!showAll)} className='btn btn-secondary' style={{ width: '100%', maxWidth: '320px', padding: '0.5rem 1rem', fontSize: '0.9rem', marginTop: '1rem' }}>
            {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            {showAll ? 'Hide all platforms' : 'Show all platforms'}
          </button>

          {showAll && (
            <div
              className='platform-slider'
              style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', gap: '1.5rem', padding: '1rem 0.5rem', width: '100%', WebkitOverflowScrolling: 'touch', marginTop: '0.5rem' }}
            >
              {[
                { id: 'android', name: 'Android', desc: 'Mobile, Tablet & Watch', icon: <IconAndroid size={32} />, storeUrl: STORE_URLS.android },
                { id: 'ios', name: 'iOS', desc: 'iOS, iPadOS & watchOS', icon: <IconApple size={32} />, storeUrl: STORE_URLS.ios },
                { id: 'mac', name: 'macOS', desc: 'Apple Silicon & Intel', icon: <IconApple size={32} />, storeUrl: STORE_URLS.mac },
                { id: 'windows', name: 'Windows', desc: 'Windows 10 & 11', icon: <IconWindows size={32} />, storeUrl: STORE_URLS.windows },
                { id: 'linux', name: 'Linux', desc: 'Debian, Fedora, Ubuntu', icon: <IconLinux size={32} />, storeUrl: STORE_URLS.linux },
                { id: 'web', name: 'Web App', desc: 'Any Browser', icon: <Globe size={32} />, storeUrl: STORE_URLS.web },
              ].map((p) => (
                <div
                  key={p.id}
                  className='glass'
                  style={{
                    flex: '0 0 240px',
                    scrollSnapAlign: 'center',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    borderRadius: '1rem',
                    textAlign: 'center',
                  }}
                >
                  {p.icon}
                  <h3 style={{ margin: '0.5rem 0 0', fontSize: '1.25rem' }}>{p.name}</h3>
                  <p style={{ margin: '0 0 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{p.desc}</p>
                  <a href={p.storeUrl} className='btn btn-secondary' style={{ width: '100%', fontSize: '0.9rem', padding: '0.5rem' }}>
                    {p.id === 'web' ? 'Launch' : 'Download'}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id='about' style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>About Markaz</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Assalamualaikum!</p>
        <br />
        <p style={{ color: 'var(--text-secondary)' }}>
          Markaz is built for Muslims, by Muslims. Our goal is simple: to provide a single, comprehensive app for all your Islamic needs without compromising on privacy or performance.
        </p>
        <br />
        <p style={{ color: 'var(--text-secondary)' }}>
          While there are many prayer apps available, most are bloated, filled with ads, or secretly sell your data. We built Markaz to be different; no ads, no data collection, no location tracking,
          and no intrusive permissions!
        </p>
        <br />
        <p style={{ color: 'var(--text-secondary)' }}>
          All of this comes without compromise. Markaz delivers a lightning-fast, lightweight experience with a beautiful, modern design, while making the most of the latest technologies available on
          your device.
        </p>
        <br />
        <p style={{ color: 'var(--text-secondary)' }}>
          If you find Markaz beneficial, please consider subscribing to Markaz Pro. Your support directly funds ongoing development and helps us to continue improving the app and add new features. We
          truly value every single user and hope Markaz helps you centre your deen.
        </p>
        <br />
        <p style={{ color: 'var(--text-secondary)' }}>Jazak'Allah Khairan for your support!</p>
      </section>

      <section style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'left' }}>
          <div className='glass' style={{ padding: '2rem', borderRadius: '1rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Prayer Times</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Accurate, location-based prayer times ensuring you never miss a prayer.</p>
          </div>
          <div className='glass' style={{ padding: '2rem', borderRadius: '1rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Qibla Locator</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Find the exact direction of the Qibla no matter where you are in the world.</p>
          </div>
          <div className='glass' style={{ padding: '2rem', borderRadius: '1rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Ad-Free</h3>
            <p style={{ color: 'var(--text-secondary)' }}>A completely distraction-free, privacy-respecting experience with zero ads.</p>
          </div>
          <div className='glass' style={{ padding: '2rem', borderRadius: '1rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Privacy</h3>
            <p style={{ color: 'var(--text-secondary)' }}>No tracking, no data collection and no dodgy deals.</p>
          </div>
        </div>
      </section>

      <BugReport repoName='markaz' />
    </div>
  );
}
