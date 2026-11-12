import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const basename = window.location.hostname.includes('github.io') ? '/haztech' : '/';

// #root already holds the page prerendered at build time (for crawlers and a fast first paint). It's rendered
// afresh rather than hydrated, as some of it depends on the visitor (theme, device, ?platform=).
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
