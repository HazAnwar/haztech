import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
        <p>Premium, high-performance apps from pixel-perfect frontends to scalable backends, delivered end to end.</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', width: '100%' }}>
          <Link to='/apps' className='btn btn-primary' style={{ width: '100%', maxWidth: '280px' }}>
            Explore Apps <ArrowRight size={20} />
          </Link>
          <a href='mailto:info@haztech.services' className='btn btn-secondary' style={{ width: '100%', maxWidth: '280px' }}>
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
