import React from 'react';
import { GitBranch, Download } from 'lucide-react';
import BugReport from '../components/BugReport';

import { IconAndroid } from '../components/PlatformIcons';

export default function LeapLauncher() {
  return (
    <div className='app-page'>
      <section className='hero'>
        <div className='animate-float' style={{ marginBottom: '2rem' }}>
          <img src={`${import.meta.env.BASE_URL}leap.png`} alt='Leap Launcher Icon' style={{ width: '96px', height: '96px', borderRadius: '24px', boxShadow: '0 12px 32px rgba(0,0,0,0.3)' }} />
        </div>
        <h1 className='gradient-text'>Leap Launcher</h1>
        <p>A simple and elegant launcher for your Android Mobile & TV.</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', marginTop: '1.5rem', width: '100%' }}>
          <a href='https://play.google.com/store/apps/details?id=com.haztech.launcher' target='_blank' rel='noopener noreferrer' className='btn btn-primary' style={{ width: '100%', maxWidth: '320px' }}>
            <IconAndroid size={20} /> Download on Play Store
          </a>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            <a href='https://github.com/HazAnwar/leap-launcher/releases/latest' target='_blank' rel='noopener noreferrer' style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem', transition: 'color 0.2s' }}>
              <Download size={14} /> Download artifact
            </a>
            <span style={{ color: 'var(--border-color)' }}>|</span>
            <a href='https://github.com/HazAnwar/leap-launcher' target='_blank' rel='noopener noreferrer' style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem', transition: 'color 0.2s' }}>
              <GitBranch size={14} /> View on GitHub
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'left' }}>
          <div className='glass' style={{ padding: '2rem', borderRadius: '1rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Blazing Fast</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Highly optimized for performance on all Android devices, including older TVs.</p>
          </div>
          <div className='glass' style={{ padding: '2rem', borderRadius: '1rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Clean UI</h3>
            <p style={{ color: 'var(--text-secondary)' }}>A distraction-free interface designed to help you get to your content quickly.</p>
          </div>
          <div className='glass' style={{ padding: '2rem', borderRadius: '1rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Customizable</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Tailor your home screen experience to exactly what you need.</p>
          </div>
        </div>
      </section>

      <BugReport repoName='leap-launcher' />
    </div>
  );
}
