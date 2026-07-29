// src/components/Footer.jsx
;
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Side: Brand Name & Copyright */}
        <div className="footer-left">
          <h3 className="footer-name">Haidy Elkenawy</h3>
          <p className="footer-copyright">
            © 2026 Haidy Ehab Elkenawy.
          </p>
        </div>

        {/* Right Side: Social Links & Scroll Button */}
        <div className="footer-right">
          <ul className="footer-links">
            <li>
              <a href="https://github.com/HaidyElkenawy" target="_blank" rel="noopener noreferrer">
                GITHUB
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/haidy-elkenawy/" target="_blank" rel="noopener noreferrer">
                LINKEDIN
              </a>
            </li>
            <li>
              <a href="https://www.behance.net/haidyelkenawy" target="_blank" rel="noopener noreferrer">
                BEHANCE
              </a>
            </li>
            <li>
              <a href="mailto:haidy.elkenawy1@gmail.com">
                EMAIL
              </a>
            </li>
          </ul>

          {/* Scroll to Top Button */}
          <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}