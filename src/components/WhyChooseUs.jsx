import { useEffect, useRef } from "react";
import { MessageCircle, Palette, TrendingUp, Zap } from "lucide-react";
import "./WhyChooseUs.css";

const cards = [
  {
    icon: Palette,
    title: "Design su misura",
    text: "Ogni progetto parte da zero, costruito attorno alla tua identità.",
  },
  {
    icon: Zap,
    title: "Soluzioni pratiche",
    text: "Siti, loghi, QR menu: strumenti che funzionano davvero.",
  },
  {
    icon: MessageCircle,
    title: "Supporto diretto",
    text: "Parli sempre con noi, nessun intermediario.",
  },
  {
    icon: TrendingUp,
    title: "Risultati concreti",
    text: "Misuriamo il successo in clienti conquistati, non like.",
  },
];

function WhyCard({ icon: Icon, title, text, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${index * 80}ms`;
          el.classList.add("why-card--visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <article ref={ref} className="why-card">
      <span className="why-card__icon-wrap">
        <Icon className="why-card__icon" strokeWidth={1.6} />
      </span>
      <h3 className="why-card__title">{title}</h3>
      <p className="why-card__text">{text}</p>
    </article>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-blob why-blob--1" aria-hidden="true" />
      <div className="why-blob why-blob--2" aria-hidden="true" />
      <div className="why-blob why-blob--3" aria-hidden="true" />
      <div className="why-inner">
        <div className="why-header">
          <p className="why-eyebrow">Perché noi</p>
          <h2 className="why-title">
            Design su misura.
            <br />
            <span className="why-title__accent">Risultati concreti.</span>
          </h2>
        </div>

        <div className="why-grid">
          {cards.map((card, i) => (
            <WhyCard key={card.title} {...card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
