import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import LeapLauncher from './pages/LeapLauncher';
import Markaz from './pages/Markaz';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/leap-launcher' element={<LeapLauncher />} />
          <Route path='/markaz' element={<Markaz />} />
        </Routes>
      </Layout>
    </Router>
  );
}
