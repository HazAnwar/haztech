import React from 'react';
import { ShieldCheck, GitBranch, Download } from 'lucide-react';
import BugReport from '../components/BugReport';

export default function Markaz() {
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
            <Download size={20} /> Download APK
          </a>
          <a href='https://github.com/HazAnwar/markaz-app' target='_blank' rel='noopener noreferrer' className='btn btn-secondary' style={{ width: '100%', maxWidth: '300px' }}>
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
