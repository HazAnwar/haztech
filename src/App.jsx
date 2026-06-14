
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HazAnwarDocsIndexPage from './pages/HazAnwarDocs/IndexPage';
import LeapLauncherDocsIndexPage from './pages/LeapLauncherDocs/IndexPage';
import LeapLauncherDocsPrivacyPage from './pages/LeapLauncherDocs/PrivacyPage';
import MarkazDocsDeleteAccountPage from './pages/MarkazDocs/DeleteAccountPage';
import MarkazDocsDownloadPage from './pages/MarkazDocs/DownloadPage';
import MarkazDocsIndexPage from './pages/MarkazDocs/IndexPage';
import MarkazDocsPrivacyPage from './pages/MarkazDocs/PrivacyPage';
import MarkazDocsTermsPage from './pages/MarkazDocs/TermsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HazAnwarDocsIndexPage />} />
        <Route path="/leap-launcher" element={<LeapLauncherDocsIndexPage />} />
        <Route path="/leap-launcher/privacy" element={<LeapLauncherDocsPrivacyPage />} />
        <Route path="/markaz/delete-account" element={<MarkazDocsDeleteAccountPage />} />
        <Route path="/markaz/download" element={<MarkazDocsDownloadPage />} />
        <Route path="/markaz" element={<MarkazDocsIndexPage />} />
        <Route path="/markaz/privacy" element={<MarkazDocsPrivacyPage />} />
        <Route path="/markaz/terms" element={<MarkazDocsTermsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
