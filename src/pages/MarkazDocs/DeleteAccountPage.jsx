
import React, { useEffect } from 'react';
import './style.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function DeleteAccountPage() {
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
        <h1>Delete Your Account</h1>
        <p>If you would like to delete your Markaz account and have all associated data permanently removed, please
          send an email to the address below. Include the email address associated with your account so we can locate
          and process your request.</p>

        <p><strong style={{color: "var(--text)"}}>Email:</strong>
          <a href="mailto:HazTechServices@gmail.com">HazTechServices@gmail.com</a></p>

        <p>Please include the following in your email:</p>
        <ul style={{color: "var(--text-muted)", marginBottom: "1.5rem", paddingLeft: "1.25rem", lineHeight: "1.8"}}>
          <li>Subject line: <strong style={{color: "var(--text)"}}>Markaz Account Deletion Request</strong></li>
          <li>The email address associated with your account</li>
        </ul>

        <p>Once we receive your request, we will delete your account and all associated data. You will receive a
          confirmation email once the process is complete.</p>

        <p>If you have any questions, feel free to reach out via
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
        