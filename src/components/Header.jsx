import React, { useEffect, useState } from 'react';
import { Moon, Sun, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="header container">
      <div className="header-container glass">
        <Link to="/" className="header-logo">
          <Code2 size={24} color="var(--primary-color)" />
          <span>HazTech</span>
        </Link>
        
        <nav className="header-nav">
          <Link to="/" className="nav-link">Home</Link>
          <a href="#apps" className="nav-link">Our Apps</a>
          <a href="mailto:HazTechServices@gmail.com" className="nav-link">Contact</a>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
