
import React, { useEffect } from 'react';
import './style.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function TermsPage() {
    useEffect(() => {
        document.body.className = 'MarkazDocs-body';
    }, []);

    return (
        <div className="MarkazDocs-wrapper">
            <>






  
  <Navbar navLinks={<>
<a href="#/">Home</a>
      <a href="#/markaz/download">Download</a>
      <a href="index.html#report">Report a Bug</a>
      <a href="#/markaz/privacy">Privacy</a>
      <a href="#/markaz/terms">Terms</a>
</>} socialLinks={<>
<a href="https://github.com/HazAnwar/markaz-app" className="nav-social-link" target="_blank"
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
        <a href="#/markaz" className="back-link">← Back to Markaz</a>
        <h1>Terms of Use</h1>

        <h2>1. Acceptance of Terms</h2>
        <p>By downloading, installing, or using the Markaz app ("the App"), you agree to be bound by these Terms of Use.
          If you do not agree, please do not use the App.</p>

        <h2>2. Description of Service</h2>
        <p>Markaz is an Islamic app providing prayer times, Qibla direction, Quran reading and recitation, and related
          features. The App is available on Android, iOS, iPadOS, macOS, Windows, and Linux.</p>

        <h2>3. Use of the App</h2>
        <p>You may use the App for personal, non-commercial purposes. You agree not to misuse the App or attempt to
          access it through any means other than the interfaces provided.</p>

        <h2>4. Accounts</h2>
        <p>The App does not require an account, but you may choose to create one to sync settings and data across
          devices. You are responsible for maintaining the security of your account credentials. You may request
          deletion of your account at any time — see our <a href="#/markaz/delete-account">Account Deletion</a> page.</p>

        <h2>5. Subscriptions &amp; Purchases</h2>
        <p>Certain features may require a paid subscription ("Markaz Pro"). Subscriptions are processed through the
          platform's app store (Apple App Store or Google Play). Pricing, billing, and renewal terms are governed by
          the respective store's policies. You can manage or cancel your subscription through your device's store
          settings.</p>

        <h2>6. Prayer Times &amp; Qibla Accuracy</h2>
        <p>Prayer times and Qibla direction are calculated using established algorithms and your device's location.
          While we strive for accuracy, these calculations are provided as guidance and should not be considered
          infallible. We are not responsible for any inaccuracies.</p>

        <h2>7. Intellectual Property</h2>
        <p>All content, design, and code within the App remain the property of the developer unless otherwise stated.
          Quranic text and translations are sourced from publicly available scholarly works.</p>

        <h2>8. Privacy</h2>
        <p>Your use of the App is also governed by our <a href="#/markaz/privacy">Privacy Policy</a>, which describes how
          we collect, use, and protect your data.</p>

        <h2>9. Disclaimer of Warranties</h2>
        <p>The App is provided "as is" without warranties of any kind, whether express or implied. We do not guarantee
          that the App will be uninterrupted, error-free, or free of harmful components.</p>

        <h2>10. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, the developer shall not be liable for any indirect, incidental, or
          consequential damages arising from your use of the App.</p>

        <h2>11. Changes to These Terms</h2>
        <p>We may update these Terms of Use from time to time. Continued use of the App after changes are posted
          constitutes acceptance of the revised terms.</p>

        <h2>12. Contact</h2>
        <p>If you have any questions about these terms, feel free to reach out via
          <a href="#/">hazanwar.github.io</a>.</p>
      </div>
    </section>
  </main>

  
  <Footer links={<>
<a href="https://github.com/HazAnwar" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="#/markaz/privacy">Privacy Policy</a>
        <a href="#/markaz/terms">Terms of Use</a>
</>} />

  



</>
        </div>
    );
}
        