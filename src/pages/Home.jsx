import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { COMPANY } from '../company';

const PRODUCTS = [
  {
    name: 'Bloop Brigade',
    icon: 'bloop-brigade.png',
    path: '/bloop-brigade',
    kind: 'Game · PC, consoles and mobile · Coming Q4 2026',
    desc: 'A colourful co-op tower defence game for 1 to 4 players. Pop the Grumbles, build towers and protect the Star Seed, solo, in split-screen or online.',
  },
  {
    name: 'Markaz',
    icon: 'markaz.png',
    path: '/markaz',
    kind: 'App · iOS, Android, macOS, Windows, Linux and web',
    desc: 'An all-in-one app for Muslims, with accurate prayer times, a Qibla locator, the Quran and more.',
  },
  {
    name: 'Leap Launcher',
    icon: 'leap.png',
    path: '/leap-launcher',
    kind: 'App · Android and Android TV',
    desc: 'A simple, elegant and fast home screen launcher for Android phones and TVs.',
  },
];

export default function Home() {
  return (
    <div className='home-page'>
      <section className='hero'>
        <div className='animate-float' style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '28px',
              background: 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 16px 48px rgba(37, 99, 235, 0.35), 0 0 0 1px rgba(255,255,255,0.1) inset',
            }}
          >
            <svg width='52' height='52' viewBox='0 0 52 52' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M18 12L6 26L18 40' stroke='white' strokeWidth='4' strokeLinecap='round' strokeLinejoin='round' opacity='0.9' />
              <path d='M34 12L46 26L34 40' stroke='white' strokeWidth='4' strokeLinecap='round' strokeLinejoin='round' opacity='0.9' />
              <path d='M30 10L22 42' stroke='white' strokeWidth='3.5' strokeLinecap='round' opacity='0.7' />
            </svg>
          </div>
        </div>
        <h1 className='gradient-text'>HazTech Services</h1>
        <p>{COMPANY.name} is an independent developer and publisher. We make Bloop Brigade, Markaz and Leap Launcher, and design every product to be fun, simple and respectful of your privacy.</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', width: '100%' }}>
          <Link to='/apps' className='btn btn-primary' style={{ width: '100%', maxWidth: '280px' }}>
            Explore our products <ArrowRight size={20} />
          </Link>
          <a href={`mailto:${COMPANY.email}`} className='btn btn-secondary' style={{ width: '100%', maxWidth: '280px' }}>
            Contact us
          </a>
        </div>
      </section>

      <section style={{ padding: '3rem 0 4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>Our products</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
          {PRODUCTS.map((p) => (
            <div key={p.name} className='glass' style={{ padding: '2rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <img src={`${import.meta.env.BASE_URL}${p.icon}`} alt={`${p.name} icon`} style={{ width: '56px', height: '56px', borderRadius: '14px' }} />
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.25rem' }}>{p.name}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>{p.kind}</p>
                <p style={{ color: 'var(--text-secondary)' }}>{p.desc}</p>
              </div>
              <Link to={p.path} className='btn btn-secondary' style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
                About {p.name} <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
