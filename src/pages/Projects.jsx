import React, { useState } from 'react';
import { ExternalLink, Globe, Maximize2, X } from 'lucide-react';
import { useScrollReveals } from '../hooks/useScrollReveals';
import './Projects.css';

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);
  const revealRef = useScrollReveals();

  const screenshots = [
    {
      src: "/www.epita-fc.fr_.png",
      caption: "Aperçu général de l'interface officielle epita-fc.fr"
    },
    {
      src: "/www.epita-fc.fr_ (1).png",
      caption: "Vue détaillée des classements et du suivi sportif"
    }
  ];

  return (
    <div className="projects-page animate-fade-in" ref={revealRef}>
      <div className="projects-header">
        <span className="eyebrow">Réalisation web &amp; ingénierie</span>
        <h1 className="page-title">Site Web EPITA FC</h1>
        <p className="page-subtitle">
          Conception et développement du site web officiel du club de football de l'EPITA.
        </p>
      </div>

      <div className="project-showcase flat-card" data-reveal>
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

        {/* SCREENSHOTS GALLERY */}
        <div className="project-gallery-section mt-5">
          <h3>Aperçu visuel de la plateforme</h3>
          <p className="gallery-desc">Cliquez sur une capture pour l'agrandir.</p>
          <div className="screenshots-grid" data-reveal-group>
            {screenshots.map((item, idx) => (
              <div
                key={idx}
                className="screenshot-card"
                onClick={() => setSelectedImage(item.src)}
              >
                <div className="screenshot-browser-header">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                  <span className="browser-url">https://epita-fc.fr</span>
                </div>
                <div className="screenshot-img-wrapper">
                  <img src={item.src} alt={item.caption} loading="lazy" />
                  <div className="hover-zoom-overlay">
                    <Maximize2 size={24} />
                    <span>Agrandir</span>
                  </div>
                </div>
                <div className="screenshot-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="showcase-body mt-5">
          <h2>Une interface sur-mesure pour la vie sportive étudiante</h2>
          <p>
            J'ai entièrement conçu, développé et déployé la plateforme logicielle officielle <strong>epita-fc.fr</strong>. L'objectif était d'offrir aux étudiants, aux joueurs et aux supporters de l'école une interface en ligne moderne, intuitive et ultra-rapide afin de suivre l'actualité sportive du campus.
          </p>
          <p>
            Cette application web permet de centraliser en temps réel l'ensemble des compétitions de football universitaires : plannings des rencontres, scores en direct, classements des poules et statistiques des équipes.
          </p>

          <div className="project-grid-features" data-reveal-group>
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

      {/* MODAL ZOOM */}
      {selectedImage && (
        <div className="lightbox-overlay animate-fade-in" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              <X size={24} />
            </button>
            <img src={selectedImage} alt="Capture agrandie epita-fc.fr" />
          </div>
        </div>
      )}
    </div>
  );
}
