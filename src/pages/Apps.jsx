import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../products';

export default function Apps() {
  return (
    <div className='apps-page' style={{ padding: '2rem 0 4rem' }}>
      <div className='container'>
        <h1 className='gradient-text' style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>
          Our Apps
        </h1>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '4rem', fontSize: '1.25rem' }}>Games and apps for phones, tablets, computers and TVs. No ads in any of them.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem', justifyContent: 'center' }}>
          {PRODUCTS.map((p) => (
            <div key={p.name} className='glass' style={{ padding: '2.5rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <img src={`${import.meta.env.BASE_URL}${p.icon}`} alt={`${p.name} icon`} style={{ width: '64px', height: '64px', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }} />
              <div>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>{p.name}</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>{p.kind}</p>
                <p style={{ color: 'var(--text-secondary)' }}>{p.desc}</p>
              </div>
              <Link to={p.path} className='btn btn-secondary' style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
                Explore {p.name} <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
