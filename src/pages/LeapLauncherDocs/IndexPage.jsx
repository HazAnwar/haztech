
import React, { useEffect } from 'react';
import './style.css';

export default function IndexPage() {
    useEffect(() => {
        document.body.className = 'LeapLauncherDocs-body';
    }, []);

    return (
        <div className="LeapLauncherDocs-wrapper">
            <>






    
    <nav className="nav">
        <div className="nav-links" id="navLinks">
            <a href="#/">Home</a>
            <a href="#screenshots">Screenshots</a>
            <a href="#report">Report a Bug</a>
            <a href="#/leap-launcher/privacy">Privacy</a>
        </div>
        <div className="nav-social">
            <a href="https://github.com/HazAnwar/leap-launcher" className="nav-social-link" target="_blank"
                rel="noopener noreferrer" aria-label="GitHub repository">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
            </a>
            <a href="https://ko-fi.com/HazAnwar" className="nav-social-link" target="_blank"
                rel="noopener noreferrer" aria-label="Ko-fi">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z"/>
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
                <img src="assets/LeapLauncherDocs/logo.webp" alt="Leap Launcher app icon" className="hero-icon" />
                <h1>Leap Launcher</h1>
                <p className="hero-subtitle">A simple and elegant launcher for your Android Mobile & TV.</p>
                <div className="hero-actions">
                    <a href="https://play.google.com/store/apps/details?id=com.haztech.launcher" className="cta-button"
                        target="_blank" rel="noopener noreferrer">
                        
                        <svg viewBox="0 0 512 512" aria-hidden="true">
                            <path
                                d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c17.1-9.8 17.1-34.9-.1-44.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                        </svg>
                        Download on Play Store
                    </a>
                    <a href="https://github.com/HazAnwar/leap-launcher/releases/latest" className="cta-button cta-secondary"
                        target="_blank" rel="noopener noreferrer">
                        
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                        Download APK
                    </a>
                </div>
            </div>
        </section>

        
        <section className="screenshots-section" id="screenshots">
            <div className="container">
                <h2 className="section-title">See it in action</h2>
                <p className="section-lead">A clean, fast launcher purpose-built for your Android Mobile & TV.</p>
                <div className="tv-wrapper">

                    
                    <div className="tv-frame" aria-label="App screenshot preview">
                        <div className="tv-bezel">
                            <div className="tv-screen" id="tvScreen"
                                style={{backgroundImage: "url('assets/LeapLauncherDocs/screenshot-home.png')"}} role="img"
                                aria-label="Leap Launcher — Home screen">
                            </div>
                            <button className="tv-nav-btn tv-prev" id="tvPrev" aria-label="Previous screenshot">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <polyline points="15 18 9 12 15 6" />
                                </svg>
                            </button>
                            <button className="tv-nav-btn tv-next" id="tvNext" aria-label="Next screenshot">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </button>
                        </div>
                        <div className="tv-stand-neck"></div>
                        <div className="tv-stand-base"></div>
                    </div>

                    
                    <p className="tv-caption" id="tvCaption" aria-live="polite">Home</p>

                    
                    <div className="tv-thumbnails" role="list" aria-label="Screenshot thumbnails">
                        <button className="tv-thumb active" data-src="assets/LeapLauncherDocs/screenshot-home.png" data-caption="Home"
                            aria-label="Home" aria-pressed="true">
                            <span className="thumb-img"><img src="assets/LeapLauncherDocs/screenshot-home.png" alt="" /></span>
                            <span className="thumb-label">Home</span>
                        </button>
                        <button className="tv-thumb" data-src="assets/LeapLauncherDocs/screenshot-apps-tv.png" data-caption="Apps"
                            aria-label="Apps" aria-pressed="false">
                            <span className="thumb-img"><img src="assets/LeapLauncherDocs/screenshot-apps-tv.png" alt="" /></span>
                            <span className="thumb-label">Apps</span>
                        </button>
                        <button className="tv-thumb" data-src="assets/LeapLauncherDocs/screenshot-channels.png" data-caption="Channels"
                            aria-label="Channels" aria-pressed="false">
                            <span className="thumb-img"><img src="assets/LeapLauncherDocs/screenshot-channels.png" alt="" /></span>
                            <span className="thumb-label">Channels</span>
                        </button>
                        <button className="tv-thumb" data-src="assets/LeapLauncherDocs/screenshot-play-next.png" data-caption="Play Next"
                            aria-label="Play Next" aria-pressed="false">
                            <span className="thumb-img"><img src="assets/LeapLauncherDocs/screenshot-play-next.png" alt="" /></span>
                            <span className="thumb-label">Play Next</span>
                        </button>
                        <button className="tv-thumb" data-src="assets/LeapLauncherDocs/screenshot-settings.png" data-caption="Settings"
                            aria-label="Settings" aria-pressed="false">
                            <span className="thumb-img"><img src="assets/LeapLauncherDocs/screenshot-settings.png" alt="" /></span>
                            <span className="thumb-label">Settings</span>
                        </button>
                        <button className="tv-thumb" data-src="assets/LeapLauncherDocs/screenshot-customisation.png" data-caption="Customise"
                            aria-label="Customise" aria-pressed="false">
                            <span className="thumb-img"><img src="assets/LeapLauncherDocs/screenshot-customisation.png" alt="" /></span>
                            <span className="thumb-label">Customise</span>
                        </button>
                        <button className="tv-thumb" data-src="assets/LeapLauncherDocs/screenshot-apps-mobile.png" data-caption="Mobile View"
                            aria-label="Mobile View" aria-pressed="false">
                            <span className="thumb-img"><img src="assets/LeapLauncherDocs/screenshot-apps-mobile.png" alt="" /></span>
                            <span className="thumb-label">Mobile</span>
                        </button>
                    </div>

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
                        <label htmlFor="bugDevice">Device / Android Version</label>
                        <input type="text" id="bugDevice" placeholder="e.g. Chromecast with Google TV, Android 10" />
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
                <a href="https://play.google.com/store/apps/details?id=com.haztech.launcher" target="_blank"
                    rel="noopener noreferrer">Play Store</a>
                <a href="https://ko-fi.com/HazAnwar" target="_blank" rel="noopener noreferrer">Support Us</a>
                <a href="#/leap-launcher/privacy">Privacy Policy</a>
            </nav>
        </div>
    </footer>

    


</>
        </div>
    );
}
        