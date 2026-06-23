import { useEffect } from "react";
import Lenis from "lenis";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import clsx from "clsx";
import Hero from "./components/Hero";
import MagicBento from "./components/MagicBento/MagicBento";
import MobileSlantedPortfolioGallery from "./components/MobileSlantedPortfolioGallery";
import MobileServiceScrollCards from "./components/MobileServiceScrollCards";
import Orb from "./components/Orb/Orb";
import PhoneShowcase from "./components/PhoneShowcase";
import approach1 from "./assets/1.png";
import approach2 from "./assets/2.png";
import approach3 from "./assets/3.png";
import approach4 from "./assets/4.png";
import uno from "./assets/uno.png";
import due from "./assets/due.png";
import tre from "./assets/tre.png";
import quattro from "./assets/quattro.png";
import cinque from "./assets/cinque.png";
import uomo from "./assets/uomo.jpg";
import donna from "./assets/donna.jpg";
import donnaSocial from "./assets/donnaSocial.jpg";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Brush,
  Camera,
  Code2,
  Component,
  Database,
  FileText,
  Globe,
  Globe2,
  HeartHandshake,
  Image,
  Layers,
  Mail,
  Megaphone,
  Menu,
  Monitor,
  MousePointer2,
  Palette,
  PenTool,
  QrCode,
  ShoppingBag,
  Shield,
  Shapes,
  Smartphone,
  Sparkles,
  Target,
  Type,
  WandSparkles,
  Wifi,
} from "lucide-react";

const navLinks = ["Home", "Servizi", "Progetti", "Prezzi", "Contatti"];

const services = [
  {
    number: "01",
    icon: Globe2,
    title: "Siti web + e-commerce",
    text: "Siti moderni, veloci e responsive per presentare la tua attività, vendere online o ricevere richieste dai clienti.",
    layout: "wide",
    image: uno,
  },
  {
    number: "02",
    icon: QrCode,
    title: "QR Menu",
    text: "Menu digitali eleganti e facili da aggiornare, perfetti per ristoranti, bar, malghe e attività food.",
    layout: "tall",
    image: due,
  },
  {
    number: "03",
    icon: Palette,
    title: "Loghi e identità visiva",
    text: "Logo, colori, font e direzione grafica per rendere il tuo brand più riconoscibile e professionale.",
    image: tre,
  },
  {
    number: "04",
    icon: Smartphone,
    title: "Social media kit",
    text: "Creiamo e consegniamo post, grafiche e contenuti coordinati per Instagram e Facebook. Ti aiutiamo anche a promuoverli con campagne pubblicitarie semplici e mirate, senza gestione video in presenza.",
    layout: "wide",
    image: quattro,
  },
  {
    number: "05",
    icon: BriefcaseBusiness,
    title: "Gestionali su misura",
    text: "Costruiamo strumenti digitali semplici per organizzare clienti, richieste, prenotazioni, prodotti o processi interni.",
    image: cinque,
  },
];

const manifesto = [
  {
    number: "01",
    title: "Strategia",
    text: "Capiamo obiettivi, pubblico e priorità per dare una direzione chiara al progetto.",
    icon: Target,
    image: approach1,
  },
  {
    number: "02",
    title: "Direzione creativa",
    text: "Definiamo stile, layout, colori e contenuti essenziali per rendere tutto riconoscibile.",
    icon: Palette,
    image: approach2,
  },
  {
    number: "03",
    title: "Sviluppo",
    text: "Costruiamo una presenza digitale veloce, responsive e pronta per essere usata.",
    icon: Globe2,
    image: approach3,
  },
  {
    number: "04",
    title: "Lancio",
    text: "Prepariamo consegna, pubblicazione e supporto iniziale per andare online senza confusione.",
    icon: ArrowRight,
    image: approach4,
  },
];

const pricing = [
  {
    title: "Sito web semplice",
    price: "da €395",
    text: "Per chi vuole una presenza online chiara, moderna e pronta da condividere.",
    features: ["One page responsive", "Sezioni essenziali", "Contatti e WhatsApp", "Design pulito", "Pubblicazione online"],
    cta: "Richiedi proposta",
    icon: Globe2,
  },
  {
    title: "Sito + logo",
    price: "da €495",
    text: "Per partire con sito e identità visiva coordinata, senza complicazioni.",
    features: ["Sito web responsive", "Logo base", "Palette colori", "Font coordinati", "Mini guida visuale"],
    cta: "Partiamo insieme",
    icon: Palette,
    featured: true,
    badge: "Più scelto",
  },
  {
    title: "QR Menu",
    price: "da €250",
    text: "Per ristoranti, bar e attività food che vogliono un menu digitale elegante e facile da aggiornare.",
    features: ["Menu mobile first", "QR pronto stampa", "Categorie ordinate", "Aggiornamenti semplici", "Link WhatsApp/contatti"],
    cta: "Crea il menu",
    icon: QrCode,
  },
  {
    title: "Gestionale su misura",
    price: "Parliamone",
    text: "Per organizzare meglio clienti, richieste, prenotazioni, prodotti o processi interni.",
    features: ["Analisi esigenze", "Dashboard semplice", "Database clienti/prodotti", "Automazioni leggere", "Soluzione personalizzata"],
    cta: "Raccontaci l'idea",
    icon: Database,
  },
];

const teamCards = [
  {
    role: "Web strategist & developer",
    text: "Crea siti web, gestionali e soluzioni digitali. Si occupa anche della parte strategica: capire il cliente, proporre la direzione giusta e trasformare l'interesse in progetto.",
    shortText: "Siti web, gestionali e strategia clienti.",
    badges: ["Siti web", "Gestionali", "Strategia clienti"],
    image: uomo,
  },
  {
    role: "E-commerce & visual designer",
    text: "Sviluppa siti, e-commerce e identità visive. Cura layout, esperienza utente e contenuti grafici per rendere ogni progetto chiaro, moderno e professionale.",
    shortText: "Siti, e-commerce, identità visiva e post pubblicitari.",
    badges: ["E-commerce", "Web design", "Post pubblicitari"],
    image: donna,
  },
  {
    role: "Social media & content creator",
    text: "Segue le aziende sui social, crea post, campagne pubblicitarie e contenuti fotografici per comunicare meglio prodotti, servizi e momenti reali dell'attività.",
    shortText: "Social, post, advertising e contenuti fotografici.",
    badges: ["Social media", "Post", "Foto"],
    image: donnaSocial,
  },
];

const toolIcons = [
  { icon: Sparkles, color: "#C8FF3D" },
  { icon: Palette, color: "#FDA4D8" },
  { icon: PenTool, color: "#8EC5FF" },
  { icon: Shapes, color: "#F8C46B" },
  { icon: BadgeCheck, color: "#7DE8D5" },
  { icon: Image, color: "#FDA4D8" },
  { icon: Type, color: "#C8FF3D" },
  { icon: Layers, color: "#8EC5FF" },
  { icon: Component, color: "#F8C46B" },
  { icon: Brush, color: "#7DE8D5" },
  { icon: WandSparkles, color: "#FDA4D8" },
  { icon: MousePointer2, color: "#C8FF3D" },
];

const toolRows = [
  { reverse: true, top: "8%", shift: "-120px" },
  { reverse: false, top: "31%", shift: "-260px" },
  { reverse: true, top: "55%", shift: "-40px" },
  { reverse: false, top: "78%", shift: "-190px" },
];

const logoIcons = [WandSparkles, PenTool, Palette, Shapes, Sparkles];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);
}

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handleChange = () => {
      setMatches(mediaQuery.matches);
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}

function Section({ id, tone = "dark", children, className, contentClassName }) {
  const isLight = tone === "light";

  return (
    <section id={id} className={clsx(isLight ? "bg-stone text-night" : "bg-night text-white", className)}>
      <motion.div
        className={clsx("mx-auto w-full max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20", contentClassName)}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
}

function Eyebrow({ children, light = false }) {
  return (
    <p className={clsx("text-xs font-semibold uppercase tracking-[0.22em]", light ? "text-zinc-500" : "text-lime")}>
      {children}
    </p>
  );
}

function Button({ children, href = "#contatti", variant = "dark", className }) {
  const styles = {
    dark: "border-night bg-night text-white hover:bg-lime hover:text-night",
    light: "border-white bg-white text-night hover:border-lime hover:bg-lime",
    outlineDark: "border-white/20 text-white hover:border-lime hover:text-lime",
    outlineLight: "border-night/15 text-night hover:border-night hover:bg-night hover:text-white",
  };

  return (
    <a
      href={href}
      className={clsx(
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-5 text-sm font-semibold transition duration-300",
        styles[variant],
        className,
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
    </a>
  );
}

function Navbar() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-black/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-baseline gap-2 text-white">
          <span className="text-sm font-semibold tracking-tight sm:text-base">Brodaxy</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={link === "Home" ? "#home" : `#${link.toLowerCase()}`}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contatti"
            className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-lime hover:text-lime sm:inline-flex"
          >
            Parliamo
          </a>
          <button
            aria-label="Apri menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </header>
  );
}

function Services() {
  return (
    <Section id="servizi" tone="dark" className="md:border-y md:border-white/10" contentClassName="pt-8 pb-4 lg:py-20">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div>
          <Eyebrow>Servizi</Eyebrow>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-5xl">
            Soluzioni creative per far crescere
            <br />
            <span className="font-bold text-[#C7FF3A] [text-shadow:0_0_20px_rgba(199,255,58,.15)]">il tuo brand.</span>
          </h2>
        </div>
        <p className="max-w-xl text-lg leading-8 text-zinc-400 lg:ml-auto">
          Che tu stia partendo da zero o voglia migliorare la tua immagine online, costruiamo strumenti digitali chiari,
          belli e pronti a vendere.
        </p>
      </div>

      <MobileServiceScrollCards services={services} />

      <div className="mt-10 hidden md:block">
        <MagicBento items={services} />
      </div>
    </Section>
  );
}

function ManifestoDesktop() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-300vw"]);

  return (
    <section id="progetti" ref={containerRef} className="relative h-[300vh] overflow-visible border-y border-white/10 bg-[#050505] text-white">
      <div className="sticky top-0 h-screen w-screen overflow-hidden">
        <motion.div className="flex h-screen gap-0 will-change-transform" style={{ x }}>
          {manifesto.map(({ number, title, text, icon: Icon, image }, index) => (
            <motion.article
              key={title}
              className="relative h-screen w-screen shrink-0 overflow-hidden rounded-none border-r border-white/10 bg-[#0F0F0F]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
              <div className="absolute inset-0 bg-black/65 md:bg-black/55" />
              <div className="relative z-10 flex h-full flex-col justify-between px-20 py-24">
                <div className="flex items-start justify-between gap-8">
                  <span className="text-[120px] font-black leading-none tracking-tight text-[#C8FF3D]">{number}</span>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C8FF3D] text-night">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>

                <div>
                  <h3 className="text-6xl font-semibold leading-tight tracking-tight text-white">{title}</h3>
                  <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/65">{text}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Manifesto() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return isMobile ? <MobileSlantedPortfolioGallery /> : <ManifestoDesktop />;
}

function Pricing() {
  return (
    <Section id="prezzi" tone="light">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow light>Prezzi</Eyebrow>
        <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-5xl">
          Pacchetti semplici,
          <br />
          per partire bene.
        </h2>
        <p className="mt-4 text-black/60">Prezzi indicativi: ogni progetto può essere adattato in base alle esigenze.</p>
      </div>

      <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
        {pricing.map((plan) => {
          const Icon = plan.icon;
          const buttonVariant = plan.featured ? "light" : "outlineLight";

          return (
          <article
            key={plan.title}
            className={clsx(
              "flex h-full min-h-[520px] flex-col rounded-3xl border p-6 shadow-[0_22px_70px_rgba(20,18,12,0.08)]",
              plan.featured
                ? "border-night bg-night text-white shadow-[0_28px_90px_rgba(0,0,0,0.22)]"
                : "border-black/10 bg-white/55 text-night backdrop-blur-sm",
            )}
          >
            <div className="flex items-center justify-between gap-4">
              <span
                className={clsx(
                  "flex h-12 w-12 items-center justify-center rounded-2xl border",
                  plan.featured ? "border-lime/30 bg-lime/10 text-lime" : "border-black/10 bg-white/70 text-night",
                )}
              >
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </span>
              {plan.badge && <span className="rounded-full bg-lime px-3 py-1 text-xs font-semibold text-night">{plan.badge}</span>}
            </div>

            <div className="mt-7">
              <h3 className="text-2xl font-semibold tracking-tight">{plan.title}</h3>
              <p className="mt-4 text-4xl font-semibold tracking-tight">{plan.price}</p>
              <p className={clsx("mt-4 text-sm leading-6", plan.featured ? "text-zinc-300" : "text-black/60")}>{plan.text}</p>
            </div>

            <ul className="mt-7 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <BadgeCheck className={clsx("h-4 w-4", plan.featured ? "text-lime" : "text-night")} />
                  <span className={clsx("text-sm", plan.featured ? "text-zinc-200" : "text-black/70")}>{feature}</span>
                </li>
              ))}
            </ul>

            <Button href="#contatti" variant={buttonVariant} className="mt-auto w-full">
              {plan.cta}
            </Button>
          </article>
          );
        })}
      </div>
    </Section>
  );
}

function Team() {
  return (
    <section className="relative overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-8 select-none text-center text-[clamp(5.5rem,18vw,18rem)] font-black leading-none tracking-[0.16em] text-white/[0.028]">
        TEAM
      </div>
      <div className="pointer-events-none absolute left-1/2 top-[58%] h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8FF3D]/[0.08] blur-3xl md:h-[28rem] md:w-[28rem]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />

      <motion.div
        className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-lime">IL TEAM</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Tre profili, una direzione chiara.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            Design, sviluppo e contenuti lavorano insieme per trasformare idee in progetti online curati.
          </p>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-3 lg:gap-6">
          {teamCards.map(({ role, shortText, badges, image }, index) => (
            <motion.div
              key={role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.48, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <article className="group relative h-[460px] overflow-hidden rounded-[32px] border border-white/10 bg-black shadow-[0_28px_90px_rgba(0,0,0,0.38)] transition-[border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:h-[560px] md:hover:border-[#BFFF00]/35 md:hover:shadow-[0_0_30px_rgba(191,255,0,0.08)]">
                <img
                  src={image}
                  alt={role}
                  className="card-image absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:scale-[1.06]"
                  draggable="false"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8FF3D]">Profilo {index + 1}</p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                    {role}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-white/70">{shortText}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {badges.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur-md"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function BrandLogos() {
  const [activeLogoIcon, setActiveLogoIcon] = useState(0);
  const ActiveIcon = logoIcons[activeLogoIcon];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveLogoIcon((currentIcon) => (currentIcon + 1) % logoIcons.length);
    }, 2000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-[480px] items-center justify-center overflow-hidden bg-[#050505] text-white md:min-h-[560px]">
      <div className="pointer-events-none absolute inset-0 z-0">
        {toolRows.map((row, rowIndex) => {
          const rowIcons = [...toolIcons.slice(rowIndex * 4), ...toolIcons.slice(0, rowIndex * 4)];
          const loopIcons = [...rowIcons, ...rowIcons];

          return (
            <div
              key={`${row.top}-${row.shift}`}
              className={clsx("absolute left-1/2 flex -translate-x-1/2 overflow-visible", rowIndex === 3 && "hidden md:flex")}
              style={{ top: row.top }}
            >
              <div
                className={clsx(
                  "flex w-max gap-[14px] md:gap-[22px]",
                  row.reverse ? "logo-marquee-reverse" : "logo-marquee",
                )}
                style={{ marginLeft: row.shift }}
              >
                {loopIcons.map(({ icon: Icon, color }, index) => (
                  <div
                    key={`${rowIndex}-${index}`}
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.06] shadow-[0_18px_46px_rgba(0,0,0,0.24)] backdrop-blur-[2px] md:h-[92px] md:w-[92px]"
                  >
                    <Icon className="h-5 w-5 opacity-[0.58] md:h-8 md:w-8" style={{ color }} strokeWidth={1.6} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(5,5,5,0.92)_0%,rgba(5,5,5,0.76)_34%,rgba(5,5,5,0.22)_66%,rgba(5,5,5,0.64)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-[#050505] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-[#050505] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#050505] to-transparent md:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#050505] to-transparent md:w-40" />

      <motion.div
        className="relative z-20 mx-auto flex w-full max-w-2xl flex-col items-center px-5 py-14 text-center sm:px-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-[26px] border border-white/15 bg-white/[0.08] text-[#C8FF3D] shadow-[0_20px_80px_rgba(0,0,0,0.5),0_0_44px_rgba(200,255,61,0.16)] backdrop-blur-md md:h-24 md:w-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLogoIcon}
              className="flex h-full w-full items-center justify-center drop-shadow-[0_0_18px_rgba(200,255,61,0.42)]"
              initial={{ opacity: 0, scale: 0.72, rotate: -8, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.18, rotate: 8, filter: "blur(10px)" }}
              transition={{ duration: 0.32, ease: "easeOut" }}
            >
              <ActiveIcon className="h-9 w-9 md:h-11 md:w-11" strokeWidth={1.55} />
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="mt-7 text-xs font-semibold uppercase tracking-[0.24em] text-[#C8FF3D]">LOGHI CHE LASCIANO IL SEGNO</p>
        <h2 className="mx-auto mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
          Identità visive che
          <br />
          restano in testa.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
          Loghi, colori e direzione visiva pensati per farti riconoscere subito.
        </p>
      </motion.div>
    </section>
  );
}

function FinalCta() {
  return (
    <section
      id="contatti"
      className="relative flex min-h-[720px] items-center justify-center overflow-hidden border-b border-white/10 bg-[#050505] text-white"
    >
      <div className="absolute inset-0 z-0 opacity-80">
        <Orb
          hue={90}
          hoverIntensity={0.35}
          rotateOnHover={true}
          forceHoverState={true}
          backgroundColor="#050505"
        />
      </div>
      <div className="absolute inset-0 z-[1] bg-black/45" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center px-5 py-24 text-center sm:px-6 lg:px-8">
        <Eyebrow>Contatti</Eyebrow>
        <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Hai gia un'attivita.
          <br />
          Ora serve un'immagine che la faccia scegliere.
        </h2>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="https://wa.me/390000000000" variant="light" className="w-full whitespace-nowrap sm:w-auto">
            Scrivici su WhatsApp
          </Button>
          <Button href="mailto:hello@brodaxy.it" variant="outlineDark" className="w-full whitespace-nowrap sm:w-auto">
            <Mail className="h-4 w-4" />
            Richiedi proposta
          </Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const footerColumns = [
    {
      title: "Pagine",
      links: [
        { label: "Home", href: "#home" },
        { label: "Servizi", href: "#servizi" },
        { label: "Progetti", href: "#progetti" },
        { label: "Prezzi", href: "#prezzi" },
        { label: "Contatti", href: "#contatti" },
      ],
    },
    {
      title: "Servizi",
      links: [
        { label: "Siti web", href: "#servizi" },
        { label: "E-commerce", href: "#servizi" },
        { label: "QR Menu", href: "#servizi" },
        { label: "Loghi", href: "#servizi" },
        { label: "Social media", href: "#servizi" },
      ],
    },
    {
      title: "Social",
      links: [
        { label: "Instagram", href: "#" },
        { label: "Facebook", href: "#" },
        { label: "LinkedIn", href: "#" },
        { label: "WhatsApp", href: "https://wa.me/390000000000" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", mobileLabel: "Privacy", href: "#" },
        { label: "Cookie Policy", mobileLabel: "Cookie", href: "#" },
        { label: "Termini e condizioni", mobileLabel: "Termini", href: "#" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] text-white">
      <div className="pointer-events-none absolute bottom-[-10px] left-4 whitespace-nowrap text-[22vw] font-black leading-none text-white opacity-[0.03] md:bottom-[-30px] md:left-0 md:text-[18vw] md:opacity-[0.035]">
        Brodaxy
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-10 md:grid md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] md:gap-10 md:py-24">
        <div className="mb-8 md:mb-0">
          <a href="#home" className="inline-flex items-center gap-3 text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C8FF3D]/25 bg-[#C8FF3D]/10 text-sm font-black text-[#C8FF3D] shadow-[0_0_24px_rgba(200,255,61,0.08)]">
              MS
            </span>
            <span className="text-lg font-semibold tracking-tight">Brodaxy</span>
          </a>
          <p className="mt-3 max-w-xs text-sm leading-6 text-white/50 md:mt-6">
            © 2026 Brodaxy. Tutti i diritti riservati.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-8 md:contents">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-semibold text-white">{column.title}</p>
              <div className="mt-3 grid gap-2.5 text-sm md:mt-5 md:gap-3">
                {column.links.map((link) => (
                  <a key={link.label} href={link.href} className="leading-relaxed text-white/50 transition-colors hover:text-[#C8FF3D] md:text-white/65">
                    <span className="md:hidden">{link.mobileLabel ?? link.label}</span>
                    <span className="hidden md:inline">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-night font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Manifesto />
        <BrandLogos />
        <PhoneShowcase />
        <Pricing />
        <Team />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
