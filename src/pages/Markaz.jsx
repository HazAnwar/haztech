import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ShieldCheck, GitBranch, Download, Smartphone, Monitor } from 'lucide-react';
import BugReport from '../components/BugReport';

export default function Markaz() {
  const [searchParams] = useSearchParams();
  const platformParam = searchParams.get('platform');

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
        return { name: 'Android', icon: <Smartphone size={20} /> };
      case 'ios':
        return { name: 'iOS', icon: <Smartphone size={20} /> };
      case 'mac':
      case 'macos':
        return { name: 'macOS', icon: <Monitor size={20} /> };
      case 'windows':
      case 'win':
        return { name: 'Windows', icon: <Monitor size={20} /> };
      case 'linux':
        return { name: 'Linux', icon: <Monitor size={20} /> };
      default:
        return { name: '', icon: <Download size={20} /> };
    }
  };

  const platformInfo = getPlatformInfo();
  const downloadText = platformInfo.name ? `Download for ${platformInfo.name}` : 'Download App';

  return (
    <div className='app-page'>
      <section className='hero'>
        <div className='animate-float' style={{ marginBottom: '2rem' }}>
          <ShieldCheck size={64} color='var(--primary-color)' />
        </div>
        <h1 className='gradient-text'>Markaz</h1>
        <p>Your companion for Islamic prayer times, Qibla direction, and more.</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
          <a href='https://github.com/HazAnwar/markaz-app/releases/latest' target='_blank' rel='noopener noreferrer' className='btn btn-primary' style={{ width: '100%', maxWidth: '300px' }}>
            {platformInfo.icon} {downloadText}
          </a>
          <a href='https://github.com/HazAnwar/markaz-app' target='_blank' rel='noopener noreferrer' className='btn btn-secondary' style={{ width: '100%', maxWidth: '300px' }}>
            <GitBranch size={20} /> View on GitHub
          </a>
        </div>
        <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Also available for Android, iOS, Windows, macOS, and Linux.
        </p>
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
