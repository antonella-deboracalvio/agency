import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BadgeCheck } from "lucide-react";
import CurvedLoop from "./CurvedLoop/CurvedLoop";
import SoftAurora from "./SoftAurora/SoftAurora";

const heroWords = ["SITI WEB", "LOGHI", "MENU QR", "E-COMMERCE", "SOCIAL MEDIA", "GESTIONALI"];

const trustItems = ["Web design", "Brand identity", "Menu QR", "Social media", "E-commerce"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function HeroButton({ children, href, variant = "light" }) {
  const styles =
    variant === "light"
      ? "border-white bg-white text-[#070707] hover:border-[#b7ff2a] hover:bg-[#b7ff2a]"
      : "border-white/20 text-white hover:border-[#b7ff2a] hover:text-[#b7ff2a]";

  return (
    <a
      href={href}
      className={`group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border px-5 text-sm font-semibold transition duration-300 sm:w-auto sm:px-6 ${styles}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
    </a>
  );
}

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const activeWord = heroWords[wordIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % heroWords.length);
    }, 2000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="hero relative isolate h-[100svh] overflow-hidden bg-[#050505] text-white md:h-auto lg:h-[calc(100vh-80px)] lg:min-h-[calc(100vh-80px)]"
    >
      <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
        <SoftAurora
          speed={0.6}
          scale={1.5}
          brightness={1.35}
          color1="#f7f7f7"
          color2="#e100ff"
          noiseFrequency={2.5}
          noiseAmplitude={1}
          bandHeight={0.5}
          bandSpread={1}
          octaveDecay={0.1}
          layerOffset={0}
          colorSpeed={1}
          enableMouseInteraction={true}
          mouseInfluence={0.25}
        />
      </div>
      <div className="absolute inset-0 z-[1] bg-black/20 pointer-events-none" />
      <div className="pointer-events-none absolute bottom-0 inset-x-0 z-[2] h-32 bg-gradient-to-b from-transparent to-[#050505]" />

      <div className="hero-content relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-start px-5 pb-[190px] pt-[118px] text-center sm:px-6 md:min-h-0 lg:h-[calc(100vh-80px)] lg:justify-center lg:px-8 lg:pb-4 lg:pt-12">
        <motion.div
          className="mx-auto flex w-full min-w-0 max-w-6xl flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h1
            className="flex w-screen max-w-[100vw] flex-col gap-y-1 uppercase tracking-[-0.04em] text-white sm:w-full sm:max-w-[calc(100vw-40px)] sm:gap-y-0 sm:text-[clamp(2.5rem,7vw,4.6rem)] sm:leading-[0.9] lg:max-w-[1100px] lg:text-[clamp(4rem,6vw,6rem)]"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-[clamp(1.9rem,7.4vw,2.6rem)] font-extrabold leading-[0.95] text-white sm:text-[inherit] sm:font-bold sm:leading-[inherit]">CREIAMO</span>
            <span className="relative mx-auto my-0 grid h-[0.98em] w-full max-w-full place-items-center text-[clamp(2.45rem,9.6vw,3.4rem)] font-black leading-[0.9] tracking-[-0.04em] text-[#B7FF2A] sm:text-[clamp(2.8rem,8vw,4.8rem)] lg:text-[clamp(3.6rem,5.5vw,5.5rem)]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeWord}
                  className="col-start-1 row-start-1 whitespace-nowrap font-black text-[#B7FF2A]"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                >
                  {activeWord}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="block text-[clamp(1.5rem,6vw,2.4rem)] font-extrabold leading-[0.95] tracking-[-0.055em] text-white sm:text-[inherit] sm:font-bold sm:leading-[inherit] sm:tracking-[-0.04em]">
              CHE FANNO CRESCERE
            </span>
            <span className="block text-[clamp(1.65rem,6.6vw,2.4rem)] font-extrabold leading-[0.95] text-white sm:text-[inherit] sm:font-bold sm:leading-[inherit]">
              IL TUO BRAND.
            </span>
          </motion.h1>
          <motion.div
            className="hero-actions mb-0 mt-8 flex w-[calc(100vw-40px)] max-w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row lg:mt-4 lg:max-w-none"
            variants={fadeUp}
            transition={{ duration: 0.72, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroButton href="#contatti">Parliamo del progetto</HeroButton>
            <HeroButton href="#servizi" variant="outline">
              Scopri i servizi
            </HeroButton>
          </motion.div>
          <motion.div
            className="hidden md:block hero-curved-loop-wrapper relative z-10 mt-10 h-[120px] w-full overflow-hidden"
            variants={fadeUp}
            transition={{ duration: 0.72, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <CurvedLoop
              marqueeText="CREATIVE ✦ AGENCY ✦ STUDIO ✦ DESIGN ✦ "
              speed={1.5}
              curveAmount={180}
              direction="right"
              interactive={false}
              className="hero-curved-loop"
            />
          </motion.div>
          <motion.div
            className="mt-4 hidden max-w-4xl flex-wrap items-center justify-center gap-x-0 gap-y-1.5 text-[0.68rem] font-medium uppercase tracking-[0.13em] text-zinc-500 sm:flex lg:mt-3 lg:text-[0.72rem]"
            variants={fadeUp}
            transition={{ duration: 0.72, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            {trustItems.map((item, index) => (
              <span key={item} className="inline-flex items-center gap-1.5 sm:px-3">
                <BadgeCheck className="h-3 w-3 text-[#b7ff2a]/80" />
                {item}
                {index < trustItems.length - 1 && <span className="hidden h-3.5 w-px bg-white/10 sm:ml-3 sm:block" />}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <div className="md:hidden absolute left-1/2 bottom-[62px] z-20 h-[120px] w-[120vw] -translate-x-1/2 overflow-visible flex items-center justify-center pointer-events-none">
        <CurvedLoop
          marqueeText="CREATIVE ✦ AGENCY ✦ STUDIO ✦ DESIGN ✦ "
          speed={1.2}
          curveAmount={300}
          centeredCurve={true}
          direction="right"
          interactive={false}
          className="mobile-curved-loop"
        />
      </div>
    </section>
  );
}
