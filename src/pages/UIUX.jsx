
import './uiux.css';
import rightHeroImg from '../assets/background.png';                 
import eslKidsImage from '../assets/Esl.png';
import hayatImage from '../assets/Hayat.png';

export default function UIUX() {
  return (
    <div className="uiux-container">
      
      {/* ================= HERO SECTION ================= */}
      <section className="uiux-hero-container">
        <div className="uiux-hero-content">
          <h1 className="uiux-title">
            UI/UX Expertise & <br />
            <span className="gradient-text">Human–Centered</span> <br />
            Process
          </h1>
          <p className="uiux-subtitle">
            Bridging the gap between systematic engineering and empathetic design. I design interfaces that aren't just beautiful—they're technically sound and psychologically resonant.
          </p>
        </div>
        
        {/* Right Edge Image */}
        <div className="uiux-hero-image">
          {<img src={rightHeroImg} alt="Abstract graphic right" /> }
        </div>
      </section>

      {/* ================= PROJECTS SHOWCASE ================= */}
      <div className="uiux-projects-wrapper">
        
        <div className="projects-header">
          <span className="icon-amber">📂</span>
          <span>Strategic Case Studies</span>
        </div>

        <div className="projects-grid">
          
          {/* Case Study 1 */}
          <div className="case-study-card">
            <div className="case-study-image-wrapper" style={{backgroundColor: '#EBE2D4'}}>
              {<img src={eslKidsImage} alt="ESL Kids App" /> }
            </div>
            <div className="case-study-body">
              <span className="case-tag-amber">EDUCATIONAL DESIGN</span>
              <h3 className="case-study-title">ESL Kids: Arabic Sign Language</h3>
              <p className="case-study-desc">
                A gamified learning experience designed for children with hearing impairments. Focused on cognitive load reduction and visual storytelling.
              </p>
              <a href="https://www.figma.com/design/DWaNngM1Ek9jJSN9BVMEV6/Milestone-3?node-id=207-425&t=EJV9j5Nc92iUGAa4-1" target="_blank" rel="noopener noreferrer"
              className="case-study-link">
                View Full Case →
              </a>
            </div>
          </div>
          
          {/* Case Study 2 */}
          <div className="case-study-card">
            <div className="case-study-image-wrapper" style={{backgroundColor: '#1E3A5F'}}>
              {<img src={hayatImage} alt="Hayat Platform" /> }
            </div>
            <div className="case-study-body">
              <span className="case-tag-amber">MEDICAL TOURISM</span>
              <h3 className="case-study-title">Medical Tourism Platform</h3>
              <p className="case-study-desc">
                Streamlining global healthcare logistics through comprehensive journey mapping.
              </p>
              <a href="https://www.behance.net/gallery/248138985/HAYAT" target="_blank" rel="noopener noreferrer"
               className="case-study-link">
                View Full Case →
              </a>
            </div>
          </div>

        </div>
      </div> 

      {/* ================= EXPERIENCE SECTION ================= */}
      <section className="experience-section">
        
        {/* Left Edge Graphic */}
        <div className="uiux-bg-left">
          {<img src={rightHeroImg} alt="Abstract graphic right" /> }
        </div>

        <div className="experience-container">
          <div className="experience-content">
            
            <div className="uiux-col-header">
              <span className="icon-pink">⟲</span>
              <span>Professional Tenure</span>
            </div>

            <div className="tenure-cards-wrapper">
              <div className="tenure-card">
                <div className="tenure-card-header">
                  <h4 className="tenure-company">Social Nuts</h4>
                  <span className="badge-current">Current</span>
                </div>
                <span className="tenure-role">UI/UX Intern</span>
                <p className="tenure-desc">
                  Conducted targeted user research to identify user pain points and uncover optimization opportunities across
                  client platforms. <br></br>
                  Restructured information architecture (IA) and created comprehensive sitemaps for new web and mobile
                  projects to ensure intuitive navigation flows. <br></br>
                  Redesigned existing client interfaces in Figma, enhancing usability, visual hierarchy, and brand consistency.
                  Developed low-to-high fidelity wireframes and interactive prototypes in Figma to effectively communicate
                  design concepts and gather stakeholder feedback. <br></br>
                </p>
              </div>

              <div className="tenure-card">
                <div className="tenure-card-header">
                  <h4 className="tenure-company">Fynx Tech</h4>
                  <span className="tenure-date">Feb 2026 - April 2026</span>
                </div>
                <span className="tenure-role">UI/UX Intern</span>
                <p className="tenure-desc">
                 Conducted user research and heuristic evaluations to map intuitive user journeys and structure low-to-mid
                  fidelity wireframes.<br></br>
                  Engineered responsive, high-fidelity interactive prototypes in Figma by deploying a component-driven design
                  system featuring unified typography scales, organized layout grids, auto-layout variants, and strict WCAG
                  accessibility guidelines.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section className="process-section">
        <h2 className="process-title">
          Bridging Design & <br />
          <span className="highlight">Engineering</span>
        </h2>

        <div className="process-grid">
          <div className="process-card step-1">
            <div className="process-num">01</div>
            <h3 className="process-step-title">Discovery</h3>
            <ul className="process-list">
              <li className="process-list-item">
                <span className="check-icon">✓</span> Stakeholder Interviews
              </li>
              <li className="process-list-item">
                <span className="check-icon">✓</span> Heuristic Evaluation
              </li>
            </ul>
          </div>

          <div className="process-card step-2">
            <div className="process-num">02</div>
            <h3 className="process-step-title">Definition</h3>
            <ul className="process-list">
              <li className="process-list-item">
                <span className="check-icon">✓</span> User Journey Mapping
              </li>
              <li className="process-list-item">
                <span className="check-icon">✓</span> Rapid Wireframing
              </li>
            </ul>
          </div>

          <div className="process-card step-3">
            <div className="process-num">03</div>
            <h3 className="process-step-title">Execution</h3>
            <ul className="process-list">
              <li className="process-list-item">
                <span className="check-icon">✓</span> High-Fidelity Prototypes
              </li>
              <li className="process-list-item">
                <span className="check-icon">✓</span> Frontend Hand-off
              </li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}