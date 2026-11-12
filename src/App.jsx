import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import DataDeletion from './pages/DataDeletion';
import Apps from './pages/Apps';
import LeapLauncher from './pages/LeapLauncher';
import Markaz from './pages/Markaz';
import BloopBrigade from './pages/BloopBrigade';
import NotFound from './pages/NotFound';
import { routeFor } from './seo';

// The router is supplied from outside: BrowserRouter in the browser (main.jsx), StaticRouter when prerendering
// (entry-server.jsx).
export default function App() {
  const { pathname } = useLocation();

  // Each page's HTML is built with its own title; keep it right as you move between pages without a reload.
  useEffect(() => {
    document.title = routeFor(pathname).title;
  }, [pathname]);

  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/apps' element={<Apps />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/data-deletion' element={<DataDeletion />} />
          <Route path='/leap-launcher' element={<LeapLauncher />} />
          <Route path='/markaz' element={<Markaz />} />
          <Route path='/bloop-brigade' element={<BloopBrigade />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}
