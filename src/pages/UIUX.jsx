
import './uiux.css';
import eslImg from '../assets/ESL.png';
import hayatImg from '../assets/Hayat.png';

export default function UIUX() {
  return (
    <div className="uiux-container">
      {/* Hero Section */}
      <section className="uiux-section">
        <h1 className="uiux-title">
          UI/UX Expertise & <br />
          <span className="gradient-text">Human–Centered</span> <br />
          Process
        </h1>
        <p className="uiux-subtitle">
          Bridging the gap between systematic engineering and empathetic design. I design interfaces that aren't just beautiful—they're technically sound and psychologically resonant.
        </p>
      </section>

      {/* Main Content Layout (Flexbox) */}
      <div className="uiux-content-wrapper">
        
        {/* ================= LEFT COLUMN ================= */}
        <div className="left-column">
          <div className="uiux-col-header">
            <span className="icon-pink">⟲</span>
            <span className="uiux-col-title">Professional Tenure</span>
          </div>

          <div className="tenure-cards-wrapper">
            {/* Card 1 */}
            <div className="tenure-card">
              <div className="tenure-card-header">
                <h4 className="tenure-company">Social Nuts</h4>
                <span className="badge-current">Current</span>
              </div>
              <span className="tenure-role">UI/UX Intern</span>
              <p className="tenure-desc">
                Conducted targeted user research to identify user pain points and uncover optimization opportunities across
                client platforms.
                Restructured information architecture (IA) and created comprehensive sitemaps for new web and mobile
                projects to ensure intuitive navigation flows.
                Redesigned existing client interfaces in Figma, enhancing usability, visual hierarchy, and brand consistency.
                Developed low-to-high fidelity wireframes and interactive prototypes in Figma to effectively communicate
                design concepts and gather stakeholder feedback.
              </p>
            </div>

            {/* Card 2 */}
            <div className="tenure-card">
              <div className="tenure-card-header">
                <h4 className="tenure-company">Fynx Tech</h4>
                <span className="tenure-date">Feb 2026 - April 2026</span>
              </div>
              <span className="tenure-role">UI/UX Intern</span>
              <p className="tenure-desc">
                Conducted user research and heuristic evaluations to map intuitive user journeys and structure low-to-mid
                fidelity wireframes.
                Engineered responsive, high-fidelity interactive prototypes in Figma by deploying a component-driven design
                system featuring unified typography scales, organized layout grids, auto-layout variants, and strict WCAG
                accessibility guidelines.
              </p>
            </div>
          </div>

         
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="right-column">
          <div className="uiux-col-header">
            <span className="icon-amber">📁</span>
            <span className="uiux-col-title">Strategic Case Studies</span>
          </div>

          {/* Grid ensuring 2 cards side-by-side */}
          <div className="case-studies-grid">
            
            {/* Project 1 */}
            <div className="case-study-card">
              <div className="case-study-image-wrapper">
                {<img src={eslImg} alt="ESL Kids Case Study" /> }
              </div>
              <div className="case-study-body">
                <span className="case-tag-amber">EDUCATIONAL DESIGN</span>
                <h3 className="case-study-title">ESL Kids: Arabic Sign Language</h3>
                <p className="case-study-desc">
                  A gamified learning experience designed for children with hearing impairments. Focused on cognitive load reduction and visual storytelling.
                </p>
                <a href="https://www.figma.com/design/DWaNngM1Ek9jJSN9BVMEV6/Milestone-3?node-id=207-425&t=JscQQXlMV1lVhmoy-1" target="_blank" rel="noopener noreferrer" className="case-study-link">
                  View More →
                </a>
              </div>
            </div>
            
            {/* Project 2 */}

            <div className="case-study-card">
              <div className="case-study-image-wrapper" style={{backgroundColor: '#0c1a2e'}}>
                { <img src={hayatImg} alt="Hayat Platform Case Study" /> }
              </div>
              <div className="case-study-body">
                <span className="case-tag-pink">FINTECH X HEALTH</span>
                <h3 className="case-study-title">Medical Tourism Platform</h3>
                <p className="case-study-desc">
                  Streamlining global healthcare logistics through comprehensive journey mapping.
                </p>
                <a href="https://www.behance.net/gallery/248138985/HAYAT" target="_blank" rel="noopener noreferrer" className="case-study-link">
                  View More→
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>


    {/* ================= NEW PROCESS SECTION ================= */}
      <section className="process-section">
        <h2 className="process-title">
          Bridging Design & <br />
          <span className="highlight">Engineering</span>
        </h2>

        <div className="process-grid">
          {/* Step 1 */}
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

          {/* Step 2 */}
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

          {/* Step 3 */}
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