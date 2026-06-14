import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Apps() {
  return (
    <div className='apps-page' style={{ padding: '2rem 0 4rem' }}>
      <div className='container'>
        <h1 className='gradient-text' style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>Our Apps</h1>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '4rem', fontSize: '1.25rem' }}>
          Discover our suite of premium mobile and web applications.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem', justifyContent: 'center' }}>
          <div className='glass' style={{ padding: '2.5rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <img src={`${import.meta.env.BASE_URL}leap.png`} alt='Leap Launcher Icon' style={{ width: '64px', height: '64px', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }} />
            </div>
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
            <div style={{ marginBottom: '1.5rem' }}>
              <img src={`${import.meta.env.BASE_URL}markaz.png`} alt='Markaz Icon' style={{ width: '64px', height: '64px', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }} />
            </div>
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
