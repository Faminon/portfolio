import React from 'react';
import { User, Globe, MapPin, Award, CheckCircle2 } from 'lucide-react';
import './About.css';

export default function About() {
  const timeline = [
    {
      year: "2026 – Présent",
      title: "Cycle Ingénieur (ING1)",
      place: "EPITA — Toulouse",
      desc: "Entrée dans le cycle ingénieur (3ème année d'études supérieures au sein de l'école). Enseignements avancés en ingénierie logicielle, algorithmique, architecture des systèmes et développement web."
    },
    {
      year: "2026",
      title: "Semestre d'Études à l'International",
      place: "UQAC (Université du Québec à Chicoutimi) — Canada",
      desc: "Semestre d'immersion académique nord-américaine au Canada. Collaboration sur des projets d'informatique en équipes pluriculturelles et pratique professionnelle de l'anglais."
    },
    {
      year: "2024 – 2026",
      title: "Classes Préparatoires Intégrées",
      place: "EPITA — Toulouse",
      desc: "Deux années de cycle préparatoire scientifique intensif à Toulouse : mathématiques, physique, algorithmique de base et premiers projets de développement logiciel."
    },
    {
      year: "2022 – 2024",
      title: "Lycée",
      place: "Cannes",
      desc: "Scolarité secondaire à Cannes couronnée par l'obtention du baccalauréat général scientifique avec succès, développant ma rigueur et mon autonomie."
    }
  ];

  return (
    <div className="about-page animate-fade-in">
      <div className="about-header">
        <span className="page-tag">CURSUS & FORMATION</span>
        <h1 className="page-title">Mon <span className="gradient-text">Parcours</span> Académique</h1>
        <p className="page-subtitle">
          Retrouvez les étapes clés de ma scolarité, depuis le lycée à Cannes jusqu'au cycle ingénieur à l'EPITA Toulouse, en passant par mon semestre au Canada.
        </p>
      </div>

      {/* BIO OVERVIEW */}
      <section className="bio-overview glass-card">
        <div className="bio-top">
          <h2>Profil Étudiant Ingénieur</h2>
          <div className="bio-tags">
            <span className="tag"><MapPin size={14} /> Cannes / Toulouse</span>
            <span className="tag"><Globe size={14} /> Échange UQAC Canada</span>
          </div>
        </div>

        <div className="bio-text">
          <p>
            Élève en <strong>1ère année du cycle ingénieur (ING1)</strong> à l'<strong>EPITA Toulouse</strong>, je poursuis une formation d'ingénieur en informatique axée sur la conception de logiciels robustes et le développement d'applications web modernes.
          </p>
          <p>
            Mon cursus a débuté au lycée à <strong>Cannes</strong>, avant de rejoindre le campus de l'EPITA à <strong>Toulouse</strong> pour mes classes préparatoires. J'ai ensuite eu l'opportunité d'effectuer un semestre d'études universitaires au Canada au sein de l'<strong>UQAC (Université du Québec à Chicoutimi)</strong>, renforçant mon adaptabilité et mes compétences en environnement international.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline-section">
        <h2 className="section-title">Chronologie <span className="gradient-text">Scolaire & Universitaire</span></h2>
        <div className="timeline-list">
          {timeline.map((item, idx) => (
            <div key={idx} className="timeline-card glass-card">
              <span className="timeline-year">{item.year}</span>
              <h3>{item.title}</h3>
              <p className="timeline-place"><MapPin size={14} /> {item.place}</p>
              <p className="timeline-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS OVERVIEW */}
      <section className="skills-section">
        <h2 className="section-title">Domaines de <span className="gradient-text">Compétence</span></h2>

        <div className="skills-grid">
          <div className="skill-category glass-card">
            <h3>🌐 Développement Web</h3>
            <p className="skill-cat-desc">Conception d'interfaces modernes, intuitives et performantes.</p>
            <ul className="skill-items">
              <li>HTML5, CSS3 & JavaScript / TypeScript</li>
              <li>React, Vite & écosystème front-end</li>
              <li>Node.js & intégration d'API</li>
              <li>Design adaptatif (Responsive Web Design)</li>
            </ul>
          </div>

          <div className="skill-category glass-card">
            <h3>⚙️ Ingénierie Logicielle</h3>
            <p className="skill-cat-desc">Fondamentaux scientifiques acquis au cours du cursus EPITA.</p>
            <ul className="skill-items">
              <li>Algorithmique & structures de données</li>
              <li>Programmation en C et C++</li>
              <li>Modélisation & bases de données SQL</li>
              <li>Architecture logicielle & rigueur de code</li>
            </ul>
          </div>

          <div className="skill-category glass-card">
            <h3>🌍 Savoir-être & Outils</h3>
            <p className="skill-cat-desc">Atouts relationnels et environnement technique.</p>
            <ul className="skill-items">
              <li>Anglais technique et communication internationale</li>
              <li>Adaptabilité & autonomie (Échange UQAC Canada)</li>
              <li>Travail en équipe & méthodologie agile</li>
              <li>Outils de versioning sous Git & GitHub</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
