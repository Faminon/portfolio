import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { Linkedin } from '../components/Icons';
import { useHeroIntro } from '../hooks/useHeroIntro';
import { useScrollReveals } from '../hooks/useScrollReveals';
import { useMagnetic } from '../hooks/useMagnetic';
import './Home.css';

const pillars = [
  {
    n: '01',
    title: 'Cycle Ingénieur EPITA',
    desc: "Actuellement en 1ère année de cycle ingénieur (ING1) à Toulouse, après deux années de classes préparatoires scientifiques intégrées.",
  },
  {
    n: '02',
    title: 'Mobilité UQAC Canada',
    desc: "Semestre d'immersion universitaire à l'Université du Québec à Chicoutimi (UQAC), renforçant mon ouverture internationale et mon anglais.",
  },
  {
    n: '03',
    title: 'Développement Web',
    desc: "Conception et déploiement d'applications web modernes et réactives, à l'image de la plateforme en ligne epita-fc.fr.",
  },
];

export default function Home() {
  const heroRef = useHeroIntro();
  const revealRef = useScrollReveals();
  const magneticRef = useMagnetic(0.35);

  return (
    <div className="home-page" ref={revealRef}>
      {/* HERO SECTION */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-badge" data-hero-step>Étudiant Ingénieur EPITA &amp; Développeur</div>

        <h1 className="hero-title" data-hero-step>
          Tom Carion<span className="accent-text"></span>Vignaud
        </h1>

        <p className="hero-lead" data-hero-step>
          Élève ingénieur en <strong>1ère année du cycle ingénieur</strong> à l'<strong>EPITA Toulouse</strong>. Enrichi par un cursus académique complet (Lycée à Cannes, semestre à l'<strong>UQAC au Canada</strong>) et une expérience au <strong>Cannes Lions</strong>, je me passionne pour la conception d'applications web performantes.
        </p>

        <div className="hero-actions" data-hero-step>
          <Link to="/about" className="btn-primary">
            Mon parcours académique <ArrowRight size={16} />
          </Link>
          <Link to="/experiences" className="btn-secondary">
            Expérience pro
          </Link>
          <Link to="/projects" className="btn-secondary">
            Projet epita-fc.fr
          </Link>
        </div>

        <div className="social-strip" data-hero-step>
          <span>Retrouvez-moi sur</span>
          <a href="https://www.linkedin.com/in/tom-carion-vignaud-737483351" target="_blank" rel="noopener noreferrer" className="social-link">
            <Linkedin size={15} /> LinkedIn
          </a>
        </div>
      </section>

      {/* THREE PILLARS OVERVIEW */}
      <section className="pillars-section" data-reveal-group>
        {pillars.map((p) => (
          <div className="pillar-item" key={p.n}>
            <span className="pillar-number">{p.n}</span>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </section>

      {/* FEATURED HIGHLIGHT */}
      <section className="highlight-section">
        <div className="highlight-card flat-card" data-reveal>
          <span className="eyebrow">Réalisation web phare</span>
          <h2>Conception de la plateforme epita-fc.fr</h2>
          <p className="highlight-desc">
            Développement complet du site en ligne dédié au suivi sportif du club de football de l'école : centralisation des classements, diffusion des calendriers et interface adaptative en direct.
          </p>
          <ul className="highlight-list">
            <li><CheckCircle2 size={16} className="check-icon" /> Architecture web moderne, rapide et responsive sur smartphone</li>
            <li><CheckCircle2 size={16} className="check-icon" /> Affichage en temps réel des scores, poules et rencontres</li>
            <li><CheckCircle2 size={16} className="check-icon" /> Utilisation quotidienne par les étudiants et supporters du campus</li>
          </ul>
          <div className="highlight-actions">
            <Link to="/projects" className="btn-primary">
              Détails techniques <ArrowRight size={16} />
            </Link>
            <a href="https://epita-fc.fr" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Visiter epita-fc.fr <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="contact-cta-section">
        <div className="contact-cta" data-reveal>
          <div>
            <span className="eyebrow">Discutons</span>
            <h2>Une question, une opportunité ?</h2>
            <p>Toujours partant pour échanger sur un projet, un stage ou une collaboration.</p>
          </div>
          <a
            href="mailto:tom.carion.vignaud@gmail.com"
            className="btn-primary contact-cta-btn"
            ref={magneticRef}
          >
            Envoyer un email <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
