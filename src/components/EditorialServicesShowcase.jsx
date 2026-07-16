import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import webRistorante from "../assets/imgCard/img_ristorante.png";
import webPizzeria from "../assets/imgCard/img_pizzeria.png";
import webBurger from "../assets/imgCard/img_burg.png";
import webCaffetteria from "../assets/imgCard/img_caffetteria.png";
import qrVisual from "../assets/due.png";
import qrPhone from "../assets/telefono.png";
import qrRestaurant from "../assets/imgCard/img_ristorante.png";
import qrPizzeria from "../assets/imgCard/img_pizzeria.png";
import logoVisual from "../assets/tre.png";
import logoPresentation from "../assets/3.png";
import logoStudio from "../assets/uno.png";
import logoBrand from "../assets/1.png";
import socialVisual from "../assets/quattro.png";
import socialPortrait from "../assets/donnaSocial.jpg";
import socialPresentation from "../assets/4.png";
import socialCampaign from "../assets/cinque.png";
import dashboardPizzeria from "../assets/imgCard/g_pizzaria.png";
import dashboardPilates from "../assets/imgCard/g_pilates.png";
import dashboardWarehouse from "../assets/imgCard/g_magazzino.png";
import dashboardChat from "../assets/mockupChat.jpg";
import "./EditorialServicesShowcase.css";

const categories = [
  {
    id: "siti-web",
    label: "Siti web",
    eyebrow: "Web design",
    description: "Siti moderni, responsive e progettati per presentare, vendere e ricevere richieste.",
    images: [
      { src: webRistorante, alt: "Concept di sito web per ristorante" },
      { src: webPizzeria, alt: "Concept di sito web per pizzeria" },
      { src: webBurger, alt: "Concept di sito web per smash burger" },
      { src: webCaffetteria, alt: "Concept di sito web per caffetteria" },
    ],
  },
  {
    id: "qr-menu",
    label: "QR Menu",
    eyebrow: "Esperienze digitali",
    description: "Menu digitali chiari, veloci da consultare e semplici da aggiornare.",
    images: [
      { src: qrVisual, alt: "Layout promozionale per un menu con QR code" },
      { src: qrRestaurant, alt: "Menu digitale per un ristorante" },
      { src: qrPhone, alt: "Presentazione mobile dei servizi digitali Brodaxy" },
      { src: qrPizzeria, alt: "Menu digitale per una pizzeria" },
    ],
  },
  {
    id: "loghi",
    label: "Loghi",
    eyebrow: "Identità visiva",
    description: "Loghi, colori e sistemi grafici capaci di rendere un brand riconoscibile.",
    images: [
      { src: logoVisual, alt: "Proposta grafica per il design di un logo" },
      { src: logoPresentation, alt: "Presentazione coordinata di identità visiva" },
      { src: logoStudio, alt: "Mockup editoriale applicato a un brand digitale" },
      { src: logoBrand, alt: "Applicazione grafica di un sistema di brand" },
    ],
  },
  {
    id: "social-kit",
    label: "Social Kit",
    eyebrow: "Contenuti coordinati",
    description: "Post, caroselli e grafiche pensati per comunicare con coerenza.",
    images: [
      { src: socialVisual, alt: "Template coordinato per contenuti social" },
      { src: socialPortrait, alt: "Illustrazione per una campagna social media" },
      { src: socialPresentation, alt: "Presentazione di un kit grafico social" },
      { src: socialCampaign, alt: "Creatività coordinata per una campagna digitale" },
    ],
  },
  {
    id: "dashboard",
    label: "Dashboard",
    eyebrow: "Dashboard e gestionali",
    description: "Strumenti su misura per organizzare ordini, prenotazioni, scorte e clienti.",
    images: [
      { src: dashboardPizzeria, alt: "Dashboard gestionale per una pizzeria" },
      { src: dashboardPilates, alt: "Dashboard per la gestione di uno studio pilates" },
      { src: dashboardWarehouse, alt: "Dashboard per la gestione del magazzino" },
      { src: dashboardChat, alt: "Interfaccia digitale per assistenza e gestione clienti" },
    ],
  },
];

const previewClasses = ["preview-one", "preview-two", "preview-three", "preview-four"];

export default function EditorialServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const activeCategory = categories[activeIndex];
  const handlePointerMove = (event) => {
    if (reduceMotion || !sectionRef.current) return;
    const bounds = sectionRef.current.getBoundingClientRect();
    setPointer({
      x: ((event.clientX - bounds.left) / bounds.width - 0.5) * 2,
      y: ((event.clientY - bounds.top) / bounds.height - 0.5) * 2,
    });
  };

  return (
    <section
      ref={sectionRef}
      className="editorial-services-showcase"
      aria-label="Soluzioni creative Brodaxy"
    >
      <div
        className="editorial-services"
        onPointerMove={handlePointerMove}
        onPointerLeave={() => setPointer({ x: 0, y: 0 })}
      >
          <div className="editorial-grid" aria-hidden="true" />
          <div className="editorial-watermark" aria-hidden="true">BRODAXY</div>
          <div className="editorial-kicker" aria-hidden="true"><span /> Creative digital studio</div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeCategory.id}
          className="preview-stage"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98, y: 14, filter: "blur(7px)" }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98, y: -10, filter: "blur(5px)" }}
          transition={{ duration: reduceMotion ? 0.01 : 0.46, ease: [0.22, 1, 0.36, 1] }}
        >
          {activeCategory.images.map((image, index) => (
            <motion.figure
              className={`project-preview ${previewClasses[index]}`}
              key={`${activeCategory.id}-${image.src}`}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 18 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: reduceMotion ? 0 : pointer.x * (index % 2 === 0 ? 8 : -10),
                y: reduceMotion ? 0 : pointer.y * (index < 2 ? 7 : -8),
              }}
              transition={{ duration: reduceMotion ? 0.01 : 0.5, delay: reduceMotion ? 0 : index * 0.055, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </motion.figure>
          ))}
        </motion.div>
      </AnimatePresence>

          <div className="editorial-center">
        <div className="category-list" role="group" aria-label="Categorie di servizi">
          {categories.map((category, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                type="button"
                className={isActive ? "category-button is-active" : "category-button"}
                key={category.id}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                aria-pressed={isActive}
                aria-controls="editorial-service-description"
              >
                <span className="category-marker" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            id="editorial-service-description"
            className="editorial-info"
            key={`info-${activeCategory.id}`}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -6 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.3 }}
            aria-live="polite"
          >
            <p className="editorial-eyebrow">{activeCategory.eyebrow}</p>
            <p className="editorial-description">{activeCategory.description}</p>
            <p className="editorial-count">{String(activeIndex + 1).padStart(2, "0")} <span /> 05</p>
          </motion.div>
        </AnimatePresence>
          </div>

          <div className="editorial-scroll-cue">
            <span className="scroll-cue-label is-visible">Seleziona un servizio</span>
            <div className="scroll-cue-steps" aria-label="Seleziona una categoria">
              {categories.map((category, index) => (
                <button
                  type="button"
                  className={index === activeIndex ? "is-active" : ""}
                  key={`step-${category.id}`}
                  aria-label={`Mostra ${category.label}`}
                  aria-pressed={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
      </div>
    </section>
  );
}
