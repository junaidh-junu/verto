import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer" data-accent="coral">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link className="brand" to="/" style={{ color: 'var(--canvas)', marginBottom: '24px' }}>
              <span className="mark"></span>Verto
            </Link>
            <p style={{ color: '#ffffffaa', maxWidth: '300px', marginTop: '8px' }}>
              Crafting pixels that move brands forward. A creative studio for the bold.
            </p>
          </div>
          <div className="footer-col">
            <h4>Sitemap</h4>
            <Link to="/">Home</Link>
            <Link to="/work">Work</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h4>Elsewhere</h4>
            <a href="#">Instagram</a>
            <a href="#">Behance</a>
            <a href="#">LinkedIn</a>
            <a href="#">Dribbble</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Verto Studio — Crafting Pixels</span>
          <span>Made with intent · Kochi · Worldwide</span>
        </div>
      </div>
      <div className="wrap">
        <div className="big" style={{ marginBottom: '-.16em' }}>VERTO</div>
      </div>
    </footer>
  );
}
