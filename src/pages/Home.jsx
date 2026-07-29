
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        {/* Name Title */}
        <h2 className="hero-name">Haidy Elkenawy</h2>
        
        {/* Golden Main Headline */}
        <h1 className="hero-headline">
          Bridging Human-Centered Design &amp; Spatial Technology
        </h1>
        
        {/* Subtitle / Bio */}
        <p className="hero-subtitle">
          UI/UX Designer &amp; Frontend developer specializing in accessible design systems, scalable web solutions and immersive VR spatial interactions
        </p>
        
        {/* Pill Outlined Call-To-Action Buttons */}
        <div className="hero-buttons">
          <Link to="/uiux" className="btn-pill">
            Explore Projects
          </Link>
          <a href="mailto:haidy.elkenawy1@gmail.com" className="btn-pill">
            Contact me
          </a>
        </div>
      </section>


      {/* --- ACADEMIC & LANGUAGES SECTION --- */}
      <section className="info-grid-section">
        <div className="info-grid">
          {/* Column 1: Academic Background */}
          <div className="info-column">
            <h3 className="section-title">
              Academic <span className="highlight-pink">Background</span>
            </h3>
            
            <div className="card academic-card">
              <div className="icon-box">
                {/* Graduation Cap SVG Icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
                </svg>
              </div>
              <div className="academic-details">
                <h4>B.Sc. in Media Engineering and Technology</h4>
                <p className="university-name">German University in Cairo</p>
                <div className="date-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>2021 – 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Linguistic Fluency */}
          <div className="info-column">
            <h3 className="section-title">
              Linguistic <span className="highlight-amber">Fluency</span>
            </h3>

            <div className="languages-container">
              {/* Arabic */}
              <div className="card language-card">
                <div className="lang-left">
                  <span className="lang-code pink-code">AR</span>
                  <span className="lang-name">Arabic</span>
                </div>
                <span className="level-badge">Native</span>
              </div>

              {/* English */}
              <div className="card language-card">
                <div className="lang-left">
                  <span className="lang-code pink-code">EN</span>
                  <span className="lang-name">English</span>
                </div>
                <span className="level-badge">Fluent</span>
              </div>

              {/* German */}
              <div className="card language-card">
                <div className="lang-left">
                  <span className="lang-code pink-code">DE</span>
                  <span className="lang-name">German</span>
                </div>
                <span className="level-badge">Basic A1</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECHNICAL ECOSYSTEM SECTION --- */}
      <section className="tech-section">
        <h3 className="section-title text-center">
          Technical <span className="highlight-amber">Ecosystem</span>
        </h3>
        
        <div className="tech-grid">
          {/* Figma */}
          <div className="tech-card">
            <div className="tech-icon amber-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/>
                <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/>
                <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/>
                <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/>
                <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/>
              </svg>
            </div>
            <span>FIGMA</span>
          </div>

          {/* Blender */}
          <div className="tech-card">
            <div className="tech-icon pink-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
            </div>
            <span>BLENDER</span>
          </div>

          {/* Unreal Engine 5 */}
          <div className="tech-card">
            <div className="tech-icon amber-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 8l4 8H8l4-8z"/>
              </svg>
            </div>
            <span>UNREAL ENGINE 5</span>
          </div>

          {/* Maya */}
          <div className="tech-card">
            <div className="tech-icon gray-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span>MAYA</span>
          </div>

          {/* Visual Studio */}
          <div className="tech-card">
            <div className="tech-icon pink-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
            </div>
            <span>VISUAL STUDIO</span>
          </div>

          {/* Git/GitHub */}
          <div className="tech-card">
            <div className="tech-icon gray-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="6" y1="3" x2="6" y2="15"/>
                <circle cx="18" cy="6" r="3"/>
                <circle cx="6" cy="18" r="3"/>
                <path d="M18 9a9 9 0 0 1-9 9"/>
              </svg>
            </div>
            <span>GIT/GITHUB</span>
          </div>
        </div>
      </section>

      {/* --- WEB DEVELOPMENT SECTION --- */}
      <section className="tech-section">
        <h3 className="section-title text-center">
          Web <span className="highlight-amber">Development</span>
        </h3>

        {/* Row 1: Main Web Tech Stack */}
        <div className="tech-grid">
          {/* React */}
          <div className="tech-card">
            <div className="tech-icon amber-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="2"/>
                <path d="M12 21a9 9 0 0 0 0-18 9 9 0 0 0 0 18z"/>
              </svg>
            </div>
            <span>REACT</span>
          </div>

          {/* Node.js */}
          <div className="tech-card">
            <div className="tech-icon amber-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span>NODE.JS</span>
          </div>

          {/* Express.js */}
          <div className="tech-card">
            <div className="tech-icon pink-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              </svg>
            </div>
            <span>EXPRESS.JS</span>
          </div>

          {/* Tailwind CSS */}
          <div className="tech-card">
            <div className="tech-icon gray-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              </svg>
            </div>
            <span>TAILWIND CSS</span>
          </div>

          {/* CSS */}
          <div className="tech-card">
            <div className="tech-icon gray-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              </svg>
            </div>
            <span>CSS</span>
          </div>

          {/* HTML5 */}
          <div className="tech-card">
            <div className="tech-icon pink-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
            </div>
            <span>HTML5</span>
          </div>
        </div>

        {/* Row 2: Database Tech Stack (Centered) */}
        <div className="tech-grid tech-grid-sub">
          {/* MongoDB */}
          <div className="tech-card">
            <div className="tech-icon gray-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="6" y1="3" x2="6" y2="15"/>
                <circle cx="18" cy="6" r="3"/>
                <circle cx="6" cy="18" r="3"/>
                <path d="M18 9a9 9 0 0 1-9 9"/>
              </svg>
            </div>
            <span>MONGODB</span>
          </div>

          {/* SQL */}
          <div className="tech-card">
            <div className="tech-icon gray-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3"/>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
              </svg>
            </div>
            <span>SQL</span>
          </div>
        </div>
      </section>


    </div>
  );
}