import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import uno from "../assets/uno.png";
import due from "../assets/due.png";
import tre from "../assets/tre.png";
import quattro from "../assets/quattro.png";
import cinque from "../assets/cinque.png";
import donnaSocial from "../assets/donnaSocial.jpg";
import "./MobileSlantedPortfolioGallery.css";

const leftCards = [
  {
    label: "Web",
    image: uno,
  },
  {
    label: "Brand",
    image: tre,
  },
  {
    label: "Digital",
    image: cinque,
  },
  {
    label: "Web",
    image: uno,
  },
];

const rightCards = [
  {
    label: "Food",
    image: due,
  },
  {
    label: "Social",
    image: quattro,
  },
  {
    label: "Tools",
    image: donnaSocial,
  },
  {
    label: "Food",
    image: due,
  },
];

function GalleryCard({ card }) {
  return (
    <article className="mobile-slanted-gallery__card">
      <img
        src={card.image}
        alt=""
        className="mobile-slanted-gallery__card-image"
        draggable="false"
      />
      <div className="mobile-slanted-gallery__card-content">
        <span className="mobile-slanted-gallery__card-label">{card.label}</span>
      </div>
    </article>
  );
}

export default function MobileSlantedPortfolioGallery() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [95, -125],
  );

  const rightY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [-115, 115],
  );

  return (
    <section
      id="progetti"
      ref={sectionRef}
      className="mobile-slanted-gallery"
      aria-label="I nostri progetti"
    >
      <div className="mobile-slanted-gallery__viewport">
        <div className="mobile-slanted-gallery__lane mobile-slanted-gallery__lane--left">
          <motion.div
            className="mobile-slanted-gallery__track"
            style={{ y: leftY }}
          >
            {leftCards.map((card, index) => (
              <GalleryCard key={`${card.label}-${index}`} card={card} />
            ))}
          </motion.div>
        </div>

        <div className="mobile-slanted-gallery__lane mobile-slanted-gallery__lane--right">
          <motion.div
            className="mobile-slanted-gallery__track"
            style={{ y: rightY }}
          >
            {rightCards.map((card, index) => (
              <GalleryCard key={`${card.label}-${index}`} card={card} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
