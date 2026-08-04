import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { Linkedin } from './Icons';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo" onClick={scrollToTop}>
              Tom Carion-Vignaud
            </Link>
            <p className="footer-bio">
              Élève ingénieur en 1ère année du cycle ingénieur à l'EPITA Toulouse. Passionné par l'ingénierie logicielle et le développement web.
            </p>
            <div className="footer-location">
              <MapPin size={15} className="location-icon" />
              <span>Mougins / Toulouse</span>
            </div>
          </div>

          <div className="footer-links">
            <h4>Navigation</h4>
            <Link to="/" onClick={scrollToTop}>Présentation</Link>
            <Link to="/about" onClick={scrollToTop}>Mon Parcours</Link>
            <Link to="/experiences" onClick={scrollToTop}>Expérience Pro</Link>
            <Link to="/projects" onClick={scrollToTop}>Projet epita-fc.fr</Link>
          </div>

          <div className="footer-links">
            <h4>Contact</h4>
            <a href="mailto:tom.carion.vignaud@gmail.com">tom.carion.vignaud@gmail.com</a>
            <a href="https://www.linkedin.com/in/tom-carion-vignaud-737483351" target="_blank" rel="noopener noreferrer">
              <Linkedin size={15} /> LinkedIn
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Tom CARION VIGNAUD</p>
          <div className="footer-status">
            <span>EPITA ING1 — Cycle Ingénieur</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
