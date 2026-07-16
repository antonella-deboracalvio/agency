import { useEffect, useRef, useState } from "react";
import "./MobileSlantedPortfolioGallery.css";
import ristoranteAlBorgo from "../assets/imgCard/img_ristorante.png";
import pizzeria from "../assets/imgCard/img_pizzeria.png";
import smashBurger from "../assets/imgCard/img_burg.png";
import barCaffetteria from "../assets/imgCard/img_caffetteria.png";
import studioPilates from "../assets/imgCard/img_pilates.png";
import studioDentistico from "../assets/imgCard/img_dentista.png";
import gestionaleRistorante from "../assets/imgCard/g_pizzaria.png";
import dashboardPalestra from "../assets/imgCard/g_pilates.png";
import gestioneMagazzino from "../assets/imgCard/g_magazzino.png";

const CARD_GAP = 14; // must match CSS gap value

const portfolioSections = [
  {
    id: "siti-web",
    label: "Siti Web",
    projects: [
      {
        name: "Ristorante Al Borgo",
        tag: "Ristorante",
        image: ristoranteAlBorgo,
        bg: "#1a0a2e",
      },
      { name: "Pizzeria", tag: "Food", image: pizzeria, bg: "#200b38" },
      { name: "Smash Burger", tag: "Food", image: smashBurger, bg: "#150828" },
      {
        name: "Bar Caffetteria",
        tag: "Caffetteria",
        image: barCaffetteria,
        bg: "#1e0a35",
      },
      { name: "Studio Pilates", tag: "Wellness", image: studioPilates, bg: "#17122a" },
      {
        name: "Studio Dentistico",
        tag: "Professionale",
        image: studioDentistico,
        bg: "#111d2e",
      },
    ],
  },
  {
    id: "loghi",
    label: "Loghi",
    projects: [
      { name: "Artigiano del Gusto", tag: "Food", bg: "#0a1e12" },
      { name: "Barber Studio", tag: "Lifestyle", bg: "#08180f" },
      { name: "Freschezza Bio", tag: "Retail", bg: "#0d2216" },
      { name: "Moda Alpina", tag: "Fashion", bg: "#0a1c10" },
    ],
  },
  {
    id: "dashboard-gestionali",
    label: "Dashboard e Gestionali",
    projects: [
      {
        name: "Gestionale Ristorante",
        tag: "Ordinazioni",
        image: gestionaleRistorante,
        bg: "#0a1428",
      },
      {
        name: "Dashboard Palestra",
        tag: "Prenotazioni",
        image: dashboardPalestra,
        bg: "#081224",
      },
      {
        name: "Gestione Magazzino",
        tag: "Scorte",
        image: gestioneMagazzino,
        bg: "#0b1830",
      },
    ],
  },
];

function Carousel({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(index);
        },
        { root: track, threshold: 0.55 },
      );
      obs.observe(card);
      return obs;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, [projects.length]);

  const scrollTo = (index) => {
    const track = trackRef.current;
    const firstCard = cardRefs.current[0];
    if (!track || !firstCard) return;
    track.scrollTo({
      left: index * (firstCard.offsetWidth + CARD_GAP),
      behavior: "smooth",
    });
  };

  return (
    <div className="carousel-wrap">
      <div ref={trackRef} className="carousel">
        {projects.map((project, i) => (
          <article
            key={project.name}
            ref={(el) => (cardRefs.current[i] = el)}
            className="carousel-card"
            style={{ background: project.bg }}
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="carousel-card__image"
                loading="lazy"
              />
            )}
            {/* subtle radial glow for depth */}
            <div className="carousel-card__glow" />
            <div className="carousel-card__gradient" />
            <div className="carousel-card__body">
              <span className="carousel-card__tag">{project.tag}</span>
              <h4 className="carousel-card__name">{project.name}</h4>
            </div>
          </article>
        ))}
      </div>

      <div className="carousel-dots" role="tablist">
        {projects.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === activeIndex}
            aria-label={`Progetto ${i + 1}`}
            className={`carousel-dot${i === activeIndex ? " carousel-dot--active" : ""}`}
            onClick={() => scrollTo(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileSlantedPortfolioGallery() {
  return (
    <section id="progetti" className="portfolio-mobile" aria-label="I nostri progetti">
      <div className="portfolio-mobile__header">
        <p className="portfolio-mobile__eyebrow">Progetti</p>
        <h2 className="portfolio-mobile__title">Cosa abbiamo costruito.</h2>
      </div>

      {portfolioSections.map((section) => (
        <div key={section.id} className="portfolio-mobile__group">
          <p className="portfolio-mobile__group-label">{section.label}</p>
          <Carousel projects={section.projects} />
        </div>
      ))}
    </section>
  );
}
