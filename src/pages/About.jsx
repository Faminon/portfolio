import React from 'react';
import { Globe, MapPin } from 'lucide-react';
import { useScrollReveals } from '../hooks/useScrollReveals';
import { useTimelineDraw } from '../hooks/useTimelineDraw';
import './About.css';

export default function About() {
  const revealRef = useScrollReveals();
  const timelineRef = useTimelineDraw();

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

  const skills = [
    {
      title: 'Développement Web',
      desc: "Conception d'interfaces modernes, intuitives et performantes.",
      items: [
        'HTML5, CSS3 & JavaScript / TypeScript',
        'React, Vite & écosystème front-end',
        "Node.js & intégration d'API",
        'Design adaptatif (Responsive Web Design)',
      ],
    },
    {
      title: 'Ingénierie Logicielle',
      desc: 'Fondamentaux scientifiques acquis au cours du cursus EPITA.',
      items: [
        'Algorithmique & structures de données',
        'Programmation en C et C++',
        'Modélisation & bases de données SQL',
        'Architecture logicielle & rigueur de code',
      ],
    },
    {
      title: 'Savoir-être & Outils',
      desc: 'Atouts relationnels et environnement technique.',
      items: [
        'Anglais technique et communication internationale',
        'Adaptabilité & autonomie (Échange UQAC Canada)',
        'Travail en équipe & méthodologie agile',
        'Outils de versioning sous Git & GitHub',
      ],
    },
  ];

  return (
    <div className="about-page animate-fade-in" ref={revealRef}>
      <div className="about-header">
        <span className="eyebrow">Cursus &amp; Formation</span>
        <h1 className="page-title">Mon <span className="accent-text">Parcours</span> Académique</h1>
        <p className="page-subtitle">
          Retrouvez les étapes clés de ma scolarité, depuis le lycée à Cannes jusqu'au cycle ingénieur à l'EPITA Toulouse, en passant par mon semestre au Canada.
        </p>
      </div>

      {/* BIO OVERVIEW */}
      <section className="bio-overview flat-card" data-reveal>
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
        <h2 className="section-title">Chronologie <span className="accent-text">scolaire &amp; universitaire</span></h2>
        <div className="timeline-list" ref={timelineRef}>
          <div className="timeline-track" />
          <div className="timeline-line" data-timeline-line />
          {timeline.map((item, idx) => (
            <div key={idx} className="timeline-row" data-reveal>
              <div className="timeline-marker">
                <span className="timeline-dot" />
                <span className="timeline-year">{item.year}</span>
              </div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p className="timeline-place"><MapPin size={13} /> {item.place}</p>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS OVERVIEW */}
      <section className="skills-section">
        <h2 className="section-title">Domaines de <span className="accent-text">compétence</span></h2>

        <div className="skills-grid" data-reveal-group>
          {skills.map((cat) => (
            <div className="skill-category" key={cat.title}>
              <h3>{cat.title}</h3>
              <p className="skill-cat-desc">{cat.desc}</p>
              <ul className="skill-items">
                {cat.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
