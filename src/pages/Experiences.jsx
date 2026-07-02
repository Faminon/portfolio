import React from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import './Experiences.css';

export default function Experiences() {
  const experiencesList = [
    {
      period: "Expérience Professionnelle",
      title: "Équipe Accueil & Coordination Événementielle",
      organisation: "Cannes Lions (International Festival of Creativity)",
      location: "Cannes, France",
      type: "Expérience Professionnelle Internationale",
      description: "Participation active à l'organisation et au bon déroulement du Cannes Lions, le festival mondial de référence dans le domaine de la communication, de la publicité et de la créativité. Accueil, orientation et gestion des flux de délégations et de participants internationaux dans un environnement prestigieux à très haut niveau d'exigence.",
      highlights: [
        "Aisance relationnelle et communication professionnelle en anglais auprès d'un public international",
        "Rigueur opérationnelle et forte réactivité face aux imprévus lors d'un événement d'envergure mondiale",
        "Excellence du service client, travail en équipe pluridisciplinaire et gestion du stress"
      ]
    }
  ];

  return (
    <div className="experiences-page animate-fade-in">
      <div className="page-header">
        <span className="page-tag">RÉALISATIONS PROFESSIONNELLES</span>
        <h1 className="page-title">Mon Expérience <span className="gradient-text">Professionnelle</span></h1>
        <p className="page-subtitle">
          Découvrez mon expérience significative acquise lors du prestigieux festival international Cannes Lions.
        </p>
      </div>

      <div className="experiences-list">
        {experiencesList.map((exp, index) => (
          <div key={index} className="experience-card glass-card">
            <div className="exp-card-header">
              <div className="exp-meta-left">
                <span className="exp-type-badge">{exp.type}</span>
              </div>
              <div className="exp-meta-right">
                <span className="exp-period-badge">
                  <Calendar size={14} /> {exp.period}
                </span>
              </div>
            </div>

            <h2 className="exp-title">{exp.title}</h2>
            <div className="exp-subinfo">
              <span className="exp-org"><Briefcase size={16} className="text-cyan" /> {exp.organisation}</span>
              <span className="exp-loc"><MapPin size={16} /> {exp.location}</span>
            </div>

            <p className="exp-description">{exp.description}</p>

            <div className="exp-highlights-box">
              <h4>Compétences & Points clés :</h4>
              <ul>
                {exp.highlights.map((hl, i) => (
                  <li key={i}>{hl}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
