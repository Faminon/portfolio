import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Linkedin, Github } from './Icons';
import './Navbar.css';

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
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <nav className="navbar-container">
        {/* Brand Name */}
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Tom Carion-Vignaud</span>
          <span className="logo-subtext">Étudiant Ingénieur EPITA</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="navbar-links">
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Présentation
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Mon Parcours
          </NavLink>
          <NavLink
            to="/experiences"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Expérience Pro
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Projet epita-fc.fr
          </NavLink>
        </div>

        {/* Social Buttons */}
        <div className="navbar-actions">
          <a
            href="https://www.linkedin.com/in/tom-carion-vignaud-737483351"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            title="LinkedIn"
          >
            <Linkedin size={18} />
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu animate-fade-in">
          <NavLink
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
          >
            Présentation
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
          >
            Mon Parcours
          </NavLink>
          <NavLink
            to="/experiences"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
          >
            Expérience Pro
          </NavLink>
          <NavLink
            to="/projects"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
          >
            Projet epita-fc.fr
          </NavLink>
        </div>
      )}
    </header>
  );
}
