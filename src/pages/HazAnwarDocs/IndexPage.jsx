
import React, { useEffect } from 'react';
import './style.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function IndexPage() {
    useEffect(() => {
        document.body.className = 'HazAnwarDocs-body';
    }, []);

    return (
        <div className="HazAnwarDocs-wrapper">
            <>






  
  <Navbar navLinks={<>
<a href="#about">About</a>
      <a href="#achievements">Achievements</a>
      <a href="#apps">Apps</a>
</>} socialLinks={<>
<a href="https://www.linkedin.com/in/HazAnwar" className="nav-social-link" target="_blank" rel="noopener noreferrer"
        aria-label="LinkedIn">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>
      <a href="https://github.com/HazAnwar" className="nav-social-link" target="_blank" rel="noopener noreferrer"
        aria-label="GitHub">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      </a>
      <a href="https://ko-fi.com/HazAnwar" className="nav-social-link" target="_blank" rel="noopener noreferrer"
        aria-label="Ko-fi">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z"/>
        </svg>
      </a>
</>} />

  <main>

    
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <img src="assets/HazAnwarDocs/avatar.jpg" alt="Hazik Anwar" className="hero-avatar" />
        <h1>Hazik Anwar</h1>
        <p className="hero-title">Senior Full Stack Software Engineer</p>
        <p className="hero-intro">
          Hi, I'm Hazik - a London-based engineer with a proven track record of delivering high-quality, scalable
          software to millions of users across media, banking, and financial services. I specialise in React, Node.js,
          Android, and cloud-native microservices.
        </p>
        
        <div className="social-links">
          <a href="https://github.com/HazAnwar" className="social-link" target="_blank" rel="noopener noreferrer"
            aria-label="GitHub">
            <svg viewBox="0 0 24 24">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/HazAnwar" className="social-link" target="_blank" rel="noopener noreferrer"
            aria-label="LinkedIn">
            <svg viewBox="0 0 24 24">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="https://stackoverflow.com/users/9378550/hazanwar" className="social-link" target="_blank"
            rel="noopener noreferrer" aria-label="Stack Overflow">
            <svg viewBox="0 0 24 24">
              <path
                d="M15.725 0l-1.72 1.813 5.273 4.24 1.72-1.813L15.725 0zm-8.498 7.763l4.573 3.661 1.292-1.636-4.572-3.66-1.293 1.635zm-2.62 5.03l7.148 1.67.417-1.81-7.148-1.671-.417 1.81zm-.803 5.01h7.31v-1.818h-7.31v1.818zm16.608-5.585l-6.288 1.459.413 1.808 6.288-1.459-.413-1.808zm-1.93 7.403H3.38V24h15.18v-5.379zM5.2 22.182V19.8h10.76v2.382H5.2z" />
            </svg>
          </a>
          <a href="mailto:HazAnwar@hotmail.com" className="social-link" aria-label="Email">
            <svg viewBox="0 0 24 24">
              <path
                d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>I'm a highly motivated full stack software engineer based in London, with a track record of shipping
              high-quality, scalable products to tens of millions of users. I work across the full stack - from React
              web apps and Node.js microservices to Kotlin Android apps and cloud infrastructure.</p>
            <p>I'm driven by solving complex engineering challenges and empowering teams through mentorship and a
              culture of continuous learning. I've led multiple dev teams, spearheaded R&D initiatives, and continuously
              deliver successful outcomes.</p>
            <p>Feel free to get in touch if you'd like to work together!</p>
          </div>
          <div>
            <p
              style={{color: "var(--text-muted)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem", fontWeight: "600"}}>
              Education</p>
            <div className="education-item">
              <span className="edu-school">King's College London &middot; 2018</span>
              <span className="edu-degree">BSc (Hons) in Computer Science (2:1)</span>
            </div>
            <p
              style={{color: "var(--text-muted)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem", marginTop: "1.75rem", fontWeight: "600"}}>
              Client — Web &amp; Mobile</p>
            <div className="skills-list">
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Android</span>
              <span className="skill-tag">Kotlin</span>
              <span className="skill-tag">Flutter</span>
              <span className="skill-tag">Java</span>
            </div>
            <p
              style={{color: "var(--text-muted)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem", marginTop: "1.25rem", fontWeight: "600"}}>
              Backend &amp; Infra</p>
            <div className="skills-list">
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Spring Boot</span>
              <span className="skill-tag">AWS</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Jenkins</span>
              <span className="skill-tag">CI/CD</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <section className="achievements" id="achievements">
      <div className="container">
        <h2 className="section-title">Key Achievements</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-number">70M+</span>
            <span className="stat-label">Supporting 70M+ active monthly users</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">50%</span>
            <span className="stat-label">Faster app load times with performance optimisations</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">40%</span>
            <span className="stat-label">Fewer security incidents with custom built security tooling</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">30%</span>
            <span className="stat-label">Productivity improvement leveraging GenAI workflows</span>
          </div>
        </div>
      </div>
    </section>

    
    <section className="apps" id="apps">
      <div className="container">
        <h2 className="section-title">My Apps</h2>
        <div className="apps-grid">
          <a href="#/leap-launcher" className="app-promo">
            <img src="https://hazanwar.github.io/leap-launcher/assets/HazAnwarDocs/logo.webp" alt="Leap Launcher icon"
              className="app-promo-icon" />
            <div className="app-promo-info">
              <h3>Leap Launcher</h3>
              <p>A simple and elegant launcher for Android Mobile & TV. Available free on the Google Play Store.</p>
              <span className="btn-outline">View Leap Launcher ↗</span>
            </div>
          </a>
          <a href="#/markaz" className="app-promo">
            <img src="https://hazanwar.github.io/markaz/assets/HazAnwarDocs/logo.webp" alt="Markaz icon"
              className="app-promo-icon" />
            <div className="app-promo-info">
              <h3>Markaz</h3>
              <p>An all-in-one app for Muslims — prayer times, qibla locator, Quran, and more.</p>
              <span className="btn-outline">View Markaz ↗</span>
            </div>
          </a>
        </div>
      </div>
    </section>

  </main>

  
  <Footer links={<>
<a href="https://github.com/HazAnwar" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/HazAnwar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://ko-fi.com/HazAnwar" target="_blank" rel="noopener noreferrer">Support</a>
        <a href="#/leap-launcher">Leap Launcher</a>
        <a href="#/markaz">Markaz</a>
        <a href="mailto:HazAnwar@hotmail.com">Contact</a>
</>} />

  


</>
        </div>
    );
}
        