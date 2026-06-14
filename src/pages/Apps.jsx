import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, ShieldCheck } from 'lucide-react';

export default function Apps() {
  return (
    <div className='apps-page' style={{ padding: '2rem 0 4rem' }}>
      <div className='container'>
        <h1 className='gradient-text' style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>Our Apps</h1>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '4rem', fontSize: '1.25rem' }}>
          Discover our suite of premium mobile and web applications.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className='glass' style={{ padding: '2.5rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Monitor size={48} color='var(--primary-color)' />
            <div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Leap Launcher</h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                A simple, elegant, and blazing-fast launcher for your Android Mobile & TV. Available free on the Google Play Store.
              </p>
            </div>
            <Link to='/leap-launcher' className='btn btn-secondary' style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
              Explore Leap Launcher <ArrowRight size={16} />
            </Link>
          </div>

          <div className='glass' style={{ padding: '2.5rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <ShieldCheck size={48} color='var(--primary-color)' />
            <div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Markaz</h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                An all-in-one beautifully designed application for Muslims — featuring accurate prayer times, qibla locator, Quran, and more.
              </p>
            </div>
            <Link to='/markaz' className='btn btn-secondary' style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
              Explore Markaz <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
