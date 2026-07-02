import React from 'react';
import { ExternalLink, Globe, CheckCircle2 } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  return (
    <div className="projects-page animate-fade-in">
      <div className="projects-header">
        <span className="page-tag">RÉALISATION WEB & INGÉNIERIE</span>
        <h1 className="page-title">Site Web EPITA FC</h1>
        <p className="page-subtitle">
          Conception et développement du site web officiel du club de football de l'EPITA.
        </p>
      </div>

      <div className="project-showcase glass-card">
        <div className="showcase-meta">
          <span>Rôle : <strong>Concepteur & Lead Developer</strong></span>
          <span>Technologies : <strong>React, Web Moderne & Responsive Design</strong></span>
        </div>

        {/* PROMINENT DIRECT LINK BANNER */}
        <div className="live-site-banner">
          <div className="banner-text">
            <h3>🌐 Découvrez la plateforme en ligne</h3>
            <p>Accédez directement au site web pour consulter les classements, calendriers et résultats en temps réel.</p>
          </div>
          <a
            href="https://epita-fc.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary live-btn"
          >
            Visiter le site epita-fc.fr <ExternalLink size={16} />
          </a>
        </div>

        <div className="showcase-body mt-5">
          <h2>Une interface sur-mesure pour la vie sportive étudiante</h2>
          <p>
            J'ai entièrement conçu, développé et déployé la plateforme logicielle officielle <strong>epita-fc.fr</strong>. L'objectif était d'offrir aux étudiants, aux joueurs et aux supporters de l'école une interface en ligne moderne, intuitive et ultra-rapide afin de suivre l'actualité sportive du campus.
          </p>
          <p>
            Cette application web permet de centraliser en temps réel l'ensemble des compétitions de football universitaires : plannings des rencontres, scores en direct, classements des poules et statistiques des équipes.
          </p>

          <div className="project-grid-features">
            <div className="feature-box">
              <h4>📅 Gestion du Calendrier</h4>
              <p>Affichage centralisé des dates, horaires et terrains pour toutes les équipes engagées dans la compétition.</p>
            </div>
            <div className="feature-box">
              <h4>📊 Classements & Statistiques</h4>
              <p>Calcul et visualisation dynamique des classements par poule et des performances des formations.</p>
            </div>
          </div>
        </div>

        <div className="showcase-footer">
          <a
            href="https://epita-fc.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Ouvrir epita-fc.fr <Globe size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/tom-carion-vignaud-737483351"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Échanger sur LinkedIn <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
