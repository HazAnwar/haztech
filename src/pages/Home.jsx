import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className='home-page'>
      <section className='hero'>
        <div className='animate-float' style={{ marginBottom: '2rem', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          <img src={`${import.meta.env.BASE_URL}markaz.png`} alt='Markaz' style={{ width: '80px', height: '80px', borderRadius: '20px', boxShadow: '0 12px 32px rgba(0,0,0,0.3)' }} />
          <img src={`${import.meta.env.BASE_URL}leap.png`} alt='Leap Launcher' style={{ width: '80px', height: '80px', borderRadius: '20px', boxShadow: '0 12px 32px rgba(0,0,0,0.3)' }} />
        </div>
        <h1 className='gradient-text'>HazTech Services Limited</h1>
        <p>
          We craft premium, high-performance client applications — mobile, web, and beyond - paired with scalable backend solutions. End-to-end, full-stack delivery with beautifully designed user
          experiences at the core.
        </p>
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
