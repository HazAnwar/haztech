import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='footer container'>
      <p className='copyright'>
        &copy; {new Date().getFullYear()} HazTech Services Limited.
        <br />
        All rights reserved.
      </p>
      <div className='footer-nav'>
        <a href='https://github.com/HazAnwar' target='_blank' rel='noopener noreferrer' className='nav-link'>
          GitHub
        </a>
        <Link to='/privacy' className='nav-link'>
          Privacy Policy
        </Link>
        <Link to='/terms' className='nav-link'>
          Terms of Service
        </Link>
      </div>
    </footer>
  );
}
