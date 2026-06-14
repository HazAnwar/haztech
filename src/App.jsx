import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Apps from './pages/Apps';
import LeapLauncher from './pages/LeapLauncher';
import Markaz from './pages/Markaz';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/apps' element={<Apps />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/leap-launcher' element={<LeapLauncher />} />
          <Route path='/markaz' element={<Markaz />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}
