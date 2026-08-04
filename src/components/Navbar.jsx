import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

const links = [
  { to: '/', label: 'Présentation' },
  { to: '/about', label: 'Parcours' },
  { to: '/experiences', label: 'Expérience Pro' },
  { to: '/projects', label: 'Projet' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header animate-fade-in ${scrolled ? 'navbar-scrolled' : ''}`}>
      <nav className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setMobileMenuOpen(false)}>
          <span className="logo-text">Tom Carion Vignaud</span>
          <span className="logo-subtext">Étudiant Ingénieur — EPITA</span>
        </Link>

        <div className="navbar-links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="navbar-actions">
          <a href="mailto:tom.carion.vignaud@gmail.com" className="nav-contact-btn">
            Me contacter <ArrowUpRight size={15} />
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="mobile-menu animate-fade-in">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href="mailto:tom.carion.vignaud@gmail.com"
            className="mobile-link mobile-link-accent"
            onClick={() => setMobileMenuOpen(false)}
          >
            Me contacter
          </a>
        </div>
      )}
    </header>
  );
}
