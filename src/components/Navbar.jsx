import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../styles/navbar.css';

const navLinks = [
  { to: 'hero', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container navbar-inner">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="navbar-logo"
          onClick={closeMenu}
        >
          naveen<span>.</span>
        </Link>

        <div
          className={`navbar-toggle${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="active"
                className="navbar-link"
                onClick={closeMenu}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div
          className={`navbar-overlay${menuOpen ? ' open' : ''}`}
          onClick={closeMenu}
        />
      </div>
    </nav>
  );
}

export default Navbar;
