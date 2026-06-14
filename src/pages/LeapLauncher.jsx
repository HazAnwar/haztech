import React from 'react';
import { Monitor, GitBranch, Download } from 'lucide-react';
import BugReport from '../components/BugReport';

export default function LeapLauncher() {
  return (
    <div className='app-page'>
      <section className='hero'>
        <div className='animate-float' style={{ marginBottom: '2rem' }}>
          <Monitor size={64} color='var(--primary-color)' />
        </div>
        <h1 className='gradient-text'>Leap Launcher</h1>
        <p>A simple and elegant launcher for your Android Mobile & TV.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href='https://play.google.com/store/apps/details?id=com.haztech.launcher' target='_blank' rel='noopener noreferrer' className='btn btn-primary'>
            <Download size={20} /> Download on Play Store
          </a>
          <a href='https://github.com/HazAnwar/leap-launcher/releases/latest' target='_blank' rel='noopener noreferrer' className='btn btn-secondary'>
            <GitBranch size={20} /> Download APK
          </a>
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
