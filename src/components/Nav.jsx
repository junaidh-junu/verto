import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const { pathname } = useLocation();

  return (
    <>
      <nav className="nav">
        <Link className="brand" to="/">
          <span className="mark"></span>Verto
        </Link>
        <div className="nav-links">
          <Link to="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/work" className={pathname === '/work' ? 'active' : ''}>Work</Link>
          <Link to="/services" className={pathname === '/services' ? 'active' : ''}>Services</Link>
          <Link to="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
        </div>
        <div className="nav-cta">
          <Link to="/contact" className="btn" data-magnetic>
            Start a project <span className="dot"></span>
          </Link>
          <button className="nav-burger" aria-label="Menu" aria-expanded="false">
            <span></span>
          </button>
        </div>
      </nav>
      <div className="mobile-menu">
        <Link to="/">Home</Link>
        <Link to="/work">Work</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </>
  );
}
