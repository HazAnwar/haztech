import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ShieldCheck, GitBranch, Download, ChevronDown, ChevronUp } from 'lucide-react';
import BugReport from '../components/BugReport';
import { IconApple, IconAndroid, IconWindows, IconLinux } from '../components/PlatformIcons';

export default function Markaz() {
  const [searchParams] = useSearchParams();
  const platformParam = searchParams.get('platform');
  const redirectParam = searchParams.get('redirect');
  const [showAll, setShowAll] = useState(false);

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
        return { name: 'Android', icon: <IconAndroid size={20} />, link: 'https://github.com/HazAnwar/markaz-app/releases/latest/download/app-release.apk' };
      case 'ios':
        return { name: 'iOS', icon: <IconApple size={20} />, link: 'https://github.com/HazAnwar/markaz-app/releases/latest' };
      case 'mac':
      case 'macos':
        return { name: 'macOS', icon: <IconApple size={20} />, link: 'https://github.com/HazAnwar/markaz-app/releases/latest/download/Markaz-macOS.dmg' };
      case 'windows':
      case 'win':
        return { name: 'Windows', icon: <IconWindows size={20} />, link: 'https://github.com/HazAnwar/markaz-app/releases/latest/download/Markaz-Windows.exe' };
      case 'linux':
        return { name: 'Linux', icon: <IconLinux size={20} />, link: 'https://github.com/HazAnwar/markaz-app/releases/latest/download/Markaz-Linux.AppImage' };
      default:
        return { name: '', icon: <Download size={20} />, link: 'https://github.com/HazAnwar/markaz-app/releases/latest' };
    }
  };

  const platformInfo = getPlatformInfo();
  const downloadText = platformInfo.name ? `Download for ${platformInfo.name}` : 'Download App';

  useEffect(() => {
    if (redirectParam === 'true' && platformInfo.link) {
      window.location.href = platformInfo.link;
    }
  }, [redirectParam, platformInfo.link]);

  return (
    <div className='app-page'>
      <section className='hero'>
        <div className='animate-float' style={{ marginBottom: '2rem' }}>
          <ShieldCheck size={64} color='var(--primary-color)' />
        </div>
        <h1 className='gradient-text'>Markaz</h1>
        <p>Your companion for Islamic prayer times, Qibla direction, and more.</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
          <a href={platformInfo.link} className='btn btn-primary' style={{ width: '100%', maxWidth: '300px' }}>
            {platformInfo.icon} {downloadText}
          </a>
          
          <button 
            onClick={() => setShowAll(!showAll)} 
            className='btn btn-secondary' 
            style={{ width: '100%', maxWidth: '300px', padding: '0.5rem 1rem', fontSize: '0.9rem' }}
          >
            {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            {showAll ? 'Hide all platforms' : 'Show all platforms'}
          </button>
          
          {showAll && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%', maxWidth: '300px', animation: 'fadeIn 0.3s ease' }}>
              <a href='https://github.com/HazAnwar/markaz-app/releases/latest/download/app-release.apk' className='btn btn-secondary' style={{ justifyContent: 'flex-start' }}>
                <IconAndroid size={20} /> Android (.apk)
              </a>
              <a href='https://github.com/HazAnwar/markaz-app/releases/latest' className='btn btn-secondary' style={{ justifyContent: 'flex-start' }}>
                <IconApple size={20} /> iOS (App Store)
              </a>
              <a href='https://github.com/HazAnwar/markaz-app/releases/latest/download/Markaz-Windows.exe' className='btn btn-secondary' style={{ justifyContent: 'flex-start' }}>
                <IconWindows size={20} /> Windows (.exe)
              </a>
              <a href='https://github.com/HazAnwar/markaz-app/releases/latest/download/Markaz-macOS.dmg' className='btn btn-secondary' style={{ justifyContent: 'flex-start' }}>
                <IconApple size={20} /> macOS (.dmg)
              </a>
              <a href='https://github.com/HazAnwar/markaz-app/releases/latest/download/Markaz-Linux.AppImage' className='btn btn-secondary' style={{ justifyContent: 'flex-start' }}>
                <IconLinux size={20} /> Linux (.AppImage)
              </a>
            </div>
          )}

          <a href='https://github.com/HazAnwar/markaz-app' target='_blank' rel='noopener noreferrer' className='btn btn-secondary' style={{ width: '100%', maxWidth: '300px', marginTop: '1rem' }}>
            <GitBranch size={20} /> View on GitHub
          </a>
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

      <BugReport repoName='markaz-app' />
    </div>
  );
}
