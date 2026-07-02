import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { Linkedin, Github } from '../components/Icons';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero-section animate-fade-in">
        <div className="hero-badge">
          <span>Étudiant Ingénieur EPITA & Développeur</span>
        </div>

        <h1 className="hero-title">
          Tom CARION VIGNAUD
        </h1>

        <p className="hero-lead">
          Élève ingénieur en <strong>1ère année du cycle ingénieur</strong> à l'<strong>EPITA Toulouse</strong>. Enrichi par un cursus académique complet (Lycée à Cannes, semestre à l'<strong>UQAC au Canada</strong>) et une expérience au <strong>Cannes Lions</strong>, je me passionne pour la conception d'applications web performantes.
        </p>

        <div className="hero-actions">
          <Link to="/about" className="btn-primary">
            Mon Parcours Académique <ArrowRight size={16} />
          </Link>
          <Link to="/experiences" className="btn-secondary">
            Expérience Pro
          </Link>
          <Link to="/projects" className="btn-secondary">
            Projet epita-fc.fr
          </Link>
        </div>

        <div className="social-strip">
          <span>Retrouvez-moi sur :</span>
          <a href="https://www.linkedin.com/in/tom-carion-vignaud-737483351" target="_blank" rel="noopener noreferrer" className="social-link">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </section>

      {/* THREE PILLARS OVERVIEW */}
      <section className="pillars-section">
        <div className="pillar-card glass-card">
          <div className="pillar-icon">🎓</div>
          <h3>Cycle Ingénieur EPITA</h3>
          <p>
            Actuellement en 1ère année de cycle ingénieur (ING1) à Toulouse, après deux années de classes préparatoires scientifiques intégrées.
          </p>
        </div>

        <div className="pillar-card glass-card">
          <div className="pillar-icon">🍁</div>
          <h3>Mobilité UQAC Canada</h3>
          <p>
            Semestre d'immersion universitaire à l'Université du Québec à Chicoutimi (UQAC), renforçant mon ouverture internationale et mon anglais.
          </p>
        </div>

        <div className="pillar-card glass-card">
          <div className="pillar-icon">🌐</div>
          <h3>Développement Web</h3>
          <p>
            Conception et déploiement d'applications web modernes et réactives, à l'image de la plateforme en ligne epita-fc.fr.
          </p>
        </div>
      </section>

      {/* FEATURED HIGHLIGHT */}
      <section className="highlight-section">
        <div className="highlight-card glass-card">
          <div className="highlight-tag">RÉALISATION WEB PHARE</div>
          <h2>Conception de la plateforme epita-fc.fr</h2>
          <p className="highlight-desc">
            Développement complet du site en ligne dédié au suivi sportif du club de football de l'école : centralisation des classements, diffusion des calendriers et interface adaptative en direct.
          </p>
          <ul className="highlight-list">
            <li><CheckCircle2 size={16} className="check-icon" /> Architecture web moderne, rapide et responsive sur smartphone</li>
            <li><CheckCircle2 size={16} className="check-icon" /> Affichage en temps réel des scores, poules et rencontres</li>
            <li><CheckCircle2 size={16} className="check-icon" /> Utilisation quotidienne par les étudiants et supporters du campus</li>
          </ul>
          <div className="d-flex gap-3 mt-4" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/projects" className="btn-primary">
              Détails techniques <ArrowRight size={16} />
            </Link>
            <a href="https://epita-fc.fr" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Visiter epita-fc.fr <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
