
import './software.css';
import rehlaImg from '../assets/Rehla.jpeg';
import socialImg from '../assets/Rehla.jpeg';


// Helper component to render the custom SVGs for the cards
const StackIcon = ({ type, colorClass }) => {
  const baseProps = {
    className: colorClass,
    width: "32", 
    height: "32", 
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };

  switch (type) {
    case 'box':
      return (
        <svg {...baseProps}>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );
    case 'branch':
      return (
        <svg {...baseProps}>
          <circle cx="6" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="6" r="3" />
          <path d="M6 9v6" />
          <path d="M18 9v2a4 4 0 0 1-4 4H9" />
        </svg>
      );
    case 'circles':
      return (
        <svg {...baseProps}>
          <circle cx="8" cy="12" r="4" />
          <circle cx="16" cy="12" r="4" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      );
    case 'database':
      return (
        <svg {...baseProps}>
          <rect x="8" y="2" width="8" height="6" rx="1" />
          <rect x="2" y="14" width="8" height="6" rx="1" />
          <rect x="14" y="14" width="8" height="6" rx="1" />
          <path d="M12 8v3" />
          <path d="M6 14v-1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1" />
        </svg>
      );
    case 'terminal':
      return (
        <svg {...baseProps}>
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Software() {
  return (
    <>
      {/* Hero Section */}
      <div className="software-hero-container">
        <div className="software-hero-content">
          <h1 className="software-title">
            Crafting High–Performance <br />
            Interfaces with <span className="highlight-amber">Clean Code</span>.
          </h1>
          <p className="software-subtitle">
            A synthesis of architectural frontend systems and high-performance backend
            schemas. Specializing in modular React architectures and scalable TypeScript
            environments.
          </p>
        </div>
      </div>

      {/* Featured Projects Showcase Section */}
      <section className="projects-section">
        
        {/* Project 1: Rehla (Image Left, Text Right) */}
        <div className="project-row">
          <div className="project-image-wrapper">
            {/* Replace with your actual image path */}
            {rehlaImg && <img src={rehlaImg} alt="Rehla Travel Ecosystem" />}
            <div style={{ width: '100%', height: '350px', backgroundColor: '#1a1a1a' }}></div> {/* Placeholder */}
          </div>
          
          <div className="project-content">
            <span className="project-tag">&lt;Project Name="Rehla" /&gt;</span>
            <h3 className="project-title">All-in-One Travel<br />Ecosystem</h3>
            
            <div className="project-details">
              <span className="detail-item">
                <span className="detail-label">Stack:</span> MERN Stack (MongoDB, Express.js, React, Node.js), Tailwind CSS
              </span>
              <span className="detail-item">
                <span className="detail-label">Team Structure:</span> 10-Member Software Engineering Team
              </span>
              <span className="detail-item">
                <span className="detail-label">Frontend Development:</span> Built modular, high-performance UI structures styled with Tailwind CSS.
              </span>
              <span className="detail-item">
                <span className="detail-label">System Connectivity:</span> Connected frontend layouts to secure backend REST endpoints for efficient data handling.
              </span>
            </div>
            
            <a href="#rehla-repo" className="project-link">
              View Repository →
            </a>
          </div>
        </div>

        {/* Project 2: Social Media Platform (Text Left, Image Right) */}
        <div className="project-row reverse">
          <div className="project-image-wrapper">
             {/* Replace with your actual image path */}
            {socialImg && <img src={socialImg} alt="Social Media Platform" />}
            <div style={{ width: '100%', height: '350px', backgroundColor: '#1a1a1a' }}></div> {/* Placeholder */}
          </div>
          
          <div className="project-content">
            <span className="project-tag">&lt;Project Name="SocialMedia Platform" /&gt;</span>
            <h3 className="project-title">Full-Stack<br />Social Media Platform</h3>
            
            <div className="project-details">
              <span className="detail-item">
                <span className="detail-label">Backend Framework:</span> Express.js (Modular REST APIs)
              </span>
              <span className="detail-item">
                <span className="detail-label">Database:</span> MongoDB / Mongoose (Data modeling & indexing)
              </span>
              <span className="detail-item">
                <span className="detail-label">Security:</span> JWT & bcrypt (Authentication & session management)
              </span>
            </div>
            
            <a href="#social-repo" className="project-link">
              View Repository →
            </a>
          </div>
        </div>

      </section>

      {/* Core Stack Section */}
      <section className="core-stack-section">
        <h2 className="core-stack-title">Core Stack</h2>
        
        <div className="stack-grid">
          
          {/* Row 1: 5 Cards */}
          <div className="stack-row">
            <div className="stack-card">
              <StackIcon type="box" colorClass="icon-amber" />
              <span className="stack-name">React</span>
            </div>
            <div className="stack-card">
              <StackIcon type="branch" colorClass="icon-amber" />
              <span className="stack-name">Node.js</span>
            </div>
            <div className="stack-card">
              <StackIcon type="box" colorClass="icon-pink" />
              <span className="stack-name">Express.js</span>
            </div>
            <div className="stack-card">
              <StackIcon type="circles" colorClass="icon-gray" />
              <span className="stack-name">Tailwind CSS</span>
            </div>
            <div className="stack-card">
              <StackIcon type="circles" colorClass="icon-gray" />
              <span className="stack-name">CSS</span>
            </div>
          </div>

          {/* Row 2: 3 Cards */}
          <div className="stack-row">
            <div className="stack-card">
              <StackIcon type="database" colorClass="icon-gray" />
              <span className="stack-name">MongoDB</span>
            </div>
            <div className="stack-card">
              <StackIcon type="database" colorClass="icon-gray" />
              <span className="stack-name">SQL</span>
            </div>
            <div className="stack-card">
              <StackIcon type="terminal" colorClass="icon-pink" />
              <span className="stack-name">HTML5</span>
            </div>
          </div>

          {/* Row 3: 3 Cards */}
          <div className="stack-row">
            <div className="stack-card">
              <StackIcon type="terminal" colorClass="icon-pink" />
              <span className="stack-name">C++</span>
            </div>
            <div className="stack-card">
              <StackIcon type="terminal" colorClass="icon-pink" />
              <span className="stack-name">Python</span>
            </div>
            <div className="stack-card">
              <StackIcon type="terminal" colorClass="icon-pink" />
              <span className="stack-name">Java</span>
            </div>
          </div>

        </div>
      </section>


      
    </>
  );
}