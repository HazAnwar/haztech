import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY } from '../company';
import { PRODUCTS } from '../products';
import { DEVELOPER } from '../seo';

const external = { target: '_blank', rel: 'noopener noreferrer' };

// Laid out like the footer on hazanwar.github.io, which links back here as "HazTech Services".
export default function Footer() {
  return (
    <footer className='footer container'>
      <p className='copyright'>
        &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        <br />
        Registered in {COMPANY.registeredIn}. Company number {COMPANY.companyNumber}.
      </p>
      <nav className='footer-nav' aria-label='Footer links'>
        <a href={DEVELOPER.url} {...external} rel='author noopener'>
          Founder
        </a>
        <a href={DEVELOPER.github} {...external}>
          GitHub
        </a>
        {PRODUCTS.map((p) => (
          <Link key={p.name} to={p.path}>
            {p.name}
          </Link>
        ))}
        <Link to='/privacy'>Privacy Policy</Link>
        <Link to='/terms'>Terms of Service</Link>
        <a href={`mailto:${COMPANY.email}`}>Contact</a>
      </nav>
    </footer>
  );
}
