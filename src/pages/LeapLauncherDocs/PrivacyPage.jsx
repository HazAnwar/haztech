
import React, { useEffect } from 'react';
import './style.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function PrivacyPage() {
    useEffect(() => {
        document.body.className = 'LeapLauncherDocs-body';
    }, []);

    return (
        <div className="LeapLauncherDocs-wrapper">
            <>






  
  <Navbar navLinks={<>
<a href="#/">Home</a>
      <a href="index.html#screenshots">Screenshots</a>
      <a href="index.html#report">Report a Bug</a>
      <a href="#/leap-launcher/privacy">Privacy</a>
</>} socialLinks={<>
<a href="https://github.com/HazAnwar/leap-launcher" className="nav-social-link" target="_blank"
        rel="noopener noreferrer" aria-label="GitHub repository">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      </a>
</>} />

  <main>
    <section style={{padding: "5rem 2rem"}}>
      <div className="prose">
        <a href="#/leap-launcher" className="back-link">← Back to Leap Launcher</a>
        <h1>Privacy Policy</h1>
        <p>Leap Launcher uses Firebase Analytics to collect anonymous usage data to help improve the app. This includes
          information such as your device type, operating system version, and how you interact with the app's features.
        </p>

        <p>We do not collect any personally identifiable information (PII). All data is aggregated and anonymised. The
          information collected is used solely to improve the app experience and is never shared with third parties.</p>

        <p>If you have any questions about this privacy policy, feel free to reach out via <a
            href="#/">hazanwar.github.io</a>.</p>
      </div>
    </section>
  </main>

  
  <Footer links={<>
<a href="https://github.com/HazAnwar" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://play.google.com/store/apps/details?id=com.haztech.launcher" target="_blank"
          rel="noopener noreferrer">Play Store</a>
        <a href="https://ko-fi.com/HazAnwar" target="_blank" rel="noopener noreferrer">Support Us</a>
        <a href="#/leap-launcher/privacy">Privacy Policy</a>
</>} />

  


</>
        </div>
    );
}
        