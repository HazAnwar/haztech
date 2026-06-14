import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone } from 'lucide-react';

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
          <Link to='/apps' className='btn btn-primary'>
            Explore Apps <ArrowRight size={20} />
          </Link>
          <a href='mailto:info@haztech.services' className='btn btn-secondary'>
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
