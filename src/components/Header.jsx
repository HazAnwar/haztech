import React, { useEffect, useState } from 'react';
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

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  return (
    <header className='header container'>
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
          <button
            onClick={toggleTheme}
            className='theme-toggle'
            aria-label='Toggle theme'
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
