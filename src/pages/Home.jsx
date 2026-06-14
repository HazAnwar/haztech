import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Monitor, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className='home-page'>
      <section className='hero'>
        <div className='animate-float' style={{ marginBottom: '2rem' }}>
          <Smartphone size={64} color='var(--primary-color)' />
        </div>
        <h1 className='gradient-text'>HazTech Services Limited</h1>
        <p>
          We build premium, high-performance mobile and web solutions. Discover
          our suite of applications designed to deliver exceptional user
          experiences.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href='#apps' className='btn btn-primary'>
            Explore Apps <ArrowRight size={20} />
          </a>
          <a href='mailto:info@haztech.services' className='btn btn-secondary'>
            Contact Us
          </a>
        </div>
      </section>

      <section id='apps' style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
          Featured Products
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            textAlign: 'left',
          }}
        >
          <div
            className='glass'
            style={{
              padding: '2rem',
              borderRadius: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <Monitor size={40} color='var(--primary-color)' />
            <h3 style={{ fontSize: '1.5rem' }}>Leap Launcher</h3>
            <p style={{ color: 'var(--text-secondary)', flex: 1 }}>
              A simple, elegant, and blazing-fast launcher for your Android
              Mobile & TV. Available free on the Google Play Store.
            </p>
            <Link
              to='/leap-launcher'
              style={{
                color: 'var(--primary-color)',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              View Leap Launcher <ArrowRight size={16} />
            </Link>
          </div>

          <div
            className='glass'
            style={{
              padding: '2rem',
              borderRadius: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <ShieldCheck size={40} color='var(--primary-color)' />
            <h3 style={{ fontSize: '1.5rem' }}>Markaz</h3>
            <p style={{ color: 'var(--text-secondary)', flex: 1 }}>
              An all-in-one beautifully designed application for Muslims —
              featuring accurate prayer times, qibla locator, Quran, and more.
            </p>
            <Link
              to='/markaz'
              style={{
                color: 'var(--primary-color)',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              View Markaz <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
