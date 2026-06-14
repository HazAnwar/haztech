import React from 'react';

export default function Footer({ links }) {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2026 Hazik Anwar</p>
        <nav aria-label="Footer links">
          {links}
        </nav>
      </div>
    </footer>
  );
}
