import React, { useEffect, useRef, useState } from 'react';
import { Moon, Sun, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

function getInitialTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) return saved;
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'dark';
}

export default function Header() {
  const [theme, setTheme] = useState(getInitialTheme);
  const headerRef = useRef(null);
  const lastScrollY = useRef(window.scrollY);
  const offset = useRef(0);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      const headerHeight = headerRef.current?.offsetHeight || 80;

      offset.current = Math.max(-headerHeight, Math.min(0, offset.current - delta));

      if (currentY <= 0) {
        offset.current = 0;
      }

      if (headerRef.current) {
        headerRef.current.style.transform = `translateY(${offset.current}px)`;
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  return (
    <header ref={headerRef} className='header container'>
      <div className='header-container glass'>
        <Link to='/' className='header-logo'>
          <Code2 size={24} color='var(--primary-color)' />
          <span>HazTech</span>
        </Link>

        <nav className='header-nav'>
          <Link to='/' className='nav-link'>
            Home
          </Link>
          <Link to='/apps' className='nav-link'>
            Our Apps
          </Link>
          <a href='mailto:info@haztech.services' className='nav-link'>
            Contact
          </a>
          <button onClick={toggleTheme} className='theme-toggle' aria-label='Toggle theme'>
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
