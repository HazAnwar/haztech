
import React, { useEffect } from 'react';
import './style.css';

export default function IndexPage() {
    useEffect(() => {
        document.body.className = 'MarkazDocs-body';
    }, []);

    return (
        <div className="MarkazDocs-wrapper">
            <>






    
    <nav className="nav">
        <div className="nav-links" id="navLinks">
            <a href="#/">Home</a>
            <a href="#/markaz/download">Download</a>
            <a href="#report">Report a Bug</a>
            <a href="#/markaz/privacy">Privacy</a>
            <a href="#/markaz/terms">Terms</a>
        </div>
        <div className="nav-social">
            <a href="https://github.com/HazAnwar/markaz-app" className="nav-social-link" target="_blank"
                rel="noopener noreferrer" aria-label="GitHub repository">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
            </a>
            <button className="theme-toggle" id="themeToggle" aria-label="Toggle colour theme">
                <svg className="icon-moon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
                <svg className="icon-sun" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
            </button>
        </div>
        <button className="nav-hamburger" id="menuBtn" aria-label="Toggle navigation" aria-expanded="false"
            aria-controls="navLinks">
            <span></span><span></span><span></span>
        </button>
    </nav>

    <main>

        
        <section className="hero">
            <div className="hero-content">
                <img src="assets/MarkazDocs/logo.webp" alt="Markaz app icon" className="hero-icon" />
                <h1>Markaz</h1>
                <p className="hero-subtitle">Your companion for Islamic prayer times, Qibla direction, and more.</p>
                <div className="hero-actions">

                    <a href="https://github.com/HazAnwar/markaz-app/releases/latest" className="cta-button cta-secondary"
                        target="_blank" rel="noopener noreferrer">
                        
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                        View on GitHub
                    </a>
                </div>
            </div>
        </section>


        
        <section className="bug-report" id="report">
            <div className="container">
                <h2 className="section-title">Report a Bug</h2>
                <p className="section-lead">Found an issue? Fill in the details below and we'll open a GitHub issue for you.
                </p>
                <form className="bug-form" id="bugForm" novalidate>
                    <div className="form-group">
                        <label htmlFor="bugTitle">Summary <span aria-hidden="true">*</span></label>
                        <input type="text" id="bugTitle" placeholder="Brief description of the issue" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bugDevice">Device / iOS Version</label>
                        <input type="text" id="bugDevice" placeholder="e.g. iPhone 15 Pro, iOS 17.2" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bugSteps">Steps to Reproduce</label>
                        <textarea id="bugSteps" rows="4"
                            placeholder="1. Open the app&#10;2. Navigate to...&#10;3. See error"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="bugExpected">Expected Behaviour</label>
                        <textarea id="bugExpected" rows="2" placeholder="What did you expect to happen?"></textarea>
                    </div>
                    <div className="form-error" id="bugError" role="alert" hidden>Please enter a summary before submitting.
                    </div>
                    <button type="submit" className="cta-button">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                        Open Issue on GitHub
                    </button>
                </form>
            </div>
        </section>

    </main>

    
    <footer>
        <div className="container">
            <p>&copy; 2026 Hazik Anwar</p>
            <nav aria-label="Footer links">
                <a href="https://github.com/HazAnwar" target="_blank" rel="noopener noreferrer">GitHub</a>

                <a href="#/markaz/privacy">Privacy Policy</a>
                <a href="#/markaz/terms">Terms of Use</a>
            </nav>
        </div>
    </footer>

    



</>
        </div>
    );
}
        