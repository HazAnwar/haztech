import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className='container' style={{ minHeight: 'calc(100vh - 200px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <div className='glass' style={{ padding: '4rem 2rem', borderRadius: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '600px', width: '100%' }}>
        <h1 style={{ fontSize: '6rem', color: 'var(--primary-color)', marginBottom: '1rem', lineHeight: '1', textShadow: '0 0 20px rgba(37, 99, 235, 0.3)' }}>404</h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Page Not Found</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>We couldn't find the page you're looking for. It might have been moved or doesn't exist.</p>
        <Link to='/' className='btn btn-primary'>
          <Home size={20} /> Back to Home
        </Link>
      </div>
    </div>
  );
}
