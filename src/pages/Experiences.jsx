import React, { useState } from 'react';
import { Briefcase, MapPin, Calendar, Maximize2, X } from 'lucide-react';
import { useScrollReveals } from '../hooks/useScrollReveals';
import './Experiences.css';

export default function Experiences() {
  const [selectedImage, setSelectedImage] = useState(null);
  const revealRef = useScrollReveals();

  const cannesPhotos = [
    { src: "/IMG_8264.JPEG", caption: "En situation au Cannes Lions" },
    { src: "/IMG_8270.JPEG", caption: "Accueil et coordination événementielle" },
    { src: "/IMG_8300.JPEG", caption: "Au cœur du festival mondial de la créativité" },
    { src: "/IMG_8279.JPEG", caption: "Ambiance et gestion des flux internationaux" }
  ];

  const experiencesList = [
    {
      period: "Expérience Professionnelle",
      title: "Équipe Accueil & Coordination Événementielle",
      organisation: "Cannes Lions (International Festival of Creativity)",
      location: "Cannes, France",
      type: "Expérience Professionnelle Internationale",
      photos: cannesPhotos,
      description: "Participation active à l'organisation et au bon déroulement du Cannes Lions, le festival mondial de référence dans le domaine de la communication, de la publicité et de la créativité. Accueil, orientation et gestion des flux de délégations et de participants internationaux dans un environnement prestigieux à très haut niveau d'exigence.",
      highlights: [
        "Aisance relationnelle et communication professionnelle en anglais auprès d'un public international",
        "Rigueur opérationnelle et forte réactivité face aux imprévus lors d'un événement d'envergure mondiale",
        "Excellence du service client, travail en équipe pluridisciplinaire et gestion du stress"
      ]
    }
  ];

  return (
    <div className="experiences-page animate-fade-in" ref={revealRef}>
      <div className="page-header">
        <span className="eyebrow">Réalisations professionnelles</span>
        <h1 className="page-title">Mon Expérience <span className="accent-text">Professionnelle</span></h1>
        <p className="page-subtitle">
          Découvrez mon expérience significative acquise lors du prestigieux festival international Cannes Lions.
        </p>
      </div>

      <div className="experiences-list">
        {experiencesList.map((exp, index) => (
          <div key={index} className="experience-card flat-card" data-reveal>
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
              <span className="exp-org"><Briefcase size={16} className="text-accent" /> {exp.organisation}</span>
              <span className="exp-loc"><MapPin size={16} /> {exp.location}</span>
            </div>

            {/* CANNES LIONS PHOTO GALLERY */}
            {exp.photos && (
              <div className="exp-photo-showcase mt-4 mb-4">
                <h4>📸 Souvenirs & immersion en images</h4>
                <p className="exp-photo-desc">Cliquez sur une photo pour l'afficher en plein écran.</p>
                <div className="exp-photos-grid" data-reveal-group>
                  {exp.photos.map((photo, pIdx) => (
                    <div 
                      key={pIdx} 
                      className="exp-photo-card" 
                      onClick={() => setSelectedImage(photo.src)}
                    >
                      <img src={photo.src} alt={photo.caption} loading="lazy" />
                      <div className="exp-photo-zoom">
                        <Maximize2 size={20} />
                        <span>Agrandir</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <p className="exp-description mt-4">{exp.description}</p>

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

      {/* MODAL ZOOM */}
      {selectedImage && (
        <div className="lightbox-overlay animate-fade-in" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              <X size={24} />
            </button>
            <img src={selectedImage} alt="Souvenir Cannes Lions" />
          </div>
        </div>
      )}
    </div>
  );
}
