import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GitBranch, Download, ChevronDown, ChevronUp } from 'lucide-react';
import BugReport from '../components/BugReport';
import { IconApple, IconAndroid, IconWindows, IconLinux } from '../components/PlatformIcons';

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
      case 'android':
        return { name: 'Android', icon: <IconAndroid size={20} />, storeUrl: 'https://play.google.com/store/apps/details?id=com.haztech.prayer', artifactUrl: 'https://github.com/HazAnwar/markaz-app/releases/latest' };
      case 'ios':
        return { name: 'iOS', icon: <IconApple size={20} />, storeUrl: 'https://apps.apple.com/us/app/markaz/id0000000000', artifactUrl: 'https://github.com/HazAnwar/markaz-app/releases/latest' };
      case 'mac':
      case 'macos':
        return { name: 'macOS', icon: <IconApple size={20} />, storeUrl: 'https://apps.apple.com/us/app/markaz/id0000000000', artifactUrl: 'https://github.com/HazAnwar/markaz-app/releases/latest' };
      case 'windows':
      case 'win':
        return { name: 'Windows', icon: <IconWindows size={20} />, storeUrl: 'https://apps.microsoft.com/store/detail/markaz/XYZ000000000', artifactUrl: 'https://github.com/HazAnwar/markaz-app/releases/latest' };
      case 'linux':
        return { name: 'Linux', icon: <IconLinux size={20} />, storeUrl: 'https://flathub.org/apps/details/org.haztech.markaz', artifactUrl: 'https://github.com/HazAnwar/markaz-app/releases/latest' };
      default:
        return { name: '', icon: <Download size={20} />, storeUrl: 'https://play.google.com/store/apps/details?id=com.haztech.prayer', artifactUrl: 'https://github.com/HazAnwar/markaz-app/releases/latest' };
    }
  };

  const platformInfo = getPlatformInfo();
  const downloadText = platformInfo.name ? `Download for ${platformInfo.name}` : 'Download App';

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
        <p>Your companion for Islamic prayer times, Qibla direction, and more.</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', marginTop: '1.5rem', width: '100%' }}>
          <a href={platformInfo.storeUrl} className='btn btn-primary' style={{ width: '100%', maxWidth: '320px' }}>
            {platformInfo.icon} {downloadText}
          </a>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            <a href={platformInfo.artifactUrl} target='_blank' rel='noopener noreferrer' style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem', transition: 'color 0.2s' }}>
              <Download size={14} /> Download artifact
            </a>
            <span style={{ color: 'var(--border-color)' }}>|</span>
            <a href='https://github.com/HazAnwar/markaz' target='_blank' rel='noopener noreferrer' style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem', transition: 'color 0.2s' }}>
              <GitBranch size={14} /> View on GitHub
            </a>
          </div>

          <button 
            onClick={() => setShowAll(!showAll)} 
            className='btn btn-secondary' 
            style={{ width: '100%', maxWidth: '320px', padding: '0.5rem 1rem', fontSize: '0.9rem', marginTop: '1rem' }}
          >
            {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            {showAll ? 'Hide all platforms' : 'Show all platforms'}
          </button>
          
          {showAll && (
            <div className='platform-slider' style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', gap: '1.5rem', padding: '1rem 0.5rem', width: '100%', WebkitOverflowScrolling: 'touch', marginTop: '0.5rem' }}>
              {[
                { id: 'android', name: 'Android', desc: 'Mobile & WearOS', icon: <IconAndroid size={32} />, storeUrl: 'https://play.google.com/store/apps/details?id=com.haztech.prayer' },
                { id: 'ios', name: 'iOS', desc: 'iOS, iPadOS & watchOS', icon: <IconApple size={32} />, storeUrl: 'https://apps.apple.com/us/app/markaz/id0000000000' },
                { id: 'mac', name: 'macOS', desc: 'Apple Silicon & Intel', icon: <IconApple size={32} />, storeUrl: 'https://apps.apple.com/us/app/markaz/id0000000000' },
                { id: 'windows', name: 'Windows', desc: 'Windows 10 & 11', icon: <IconWindows size={32} />, storeUrl: 'https://apps.microsoft.com/store/detail/markaz/XYZ000000000' },
                { id: 'linux', name: 'Linux', desc: 'Debian, Fedora, Ubuntu', icon: <IconLinux size={32} />, storeUrl: 'https://flathub.org/apps/details/org.haztech.markaz' }
              ].map(p => (
                <div key={p.id} className='glass' style={{ flex: '0 0 240px', scrollSnapAlign: 'center', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', borderRadius: '1rem', textAlign: 'center' }}>
                  {p.icon}
                  <h3 style={{ margin: '0.5rem 0 0', fontSize: '1.25rem' }}>{p.name}</h3>
                  <p style={{ margin: '0 0 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{p.desc}</p>
                  <a href={p.storeUrl} className='btn btn-secondary' style={{ width: '100%', fontSize: '0.9rem', padding: '0.5rem' }}>
                    Download
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
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
        </div>
      </section>

      <BugReport repoName='markaz' />
    </div>
  );
}
