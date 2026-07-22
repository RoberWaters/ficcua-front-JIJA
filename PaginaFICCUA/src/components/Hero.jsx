import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { HERO_GALLERY } from "../data";
import { Confetti } from "./Decor";
import { Button } from "./ui/Button";
import { Kicker } from "./ui/Kicker";
import { SectionDivider } from "./ui/SectionDivider";

export function Hero() {
  const [current, setCurrent] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || HERO_GALLERY.length <= 1) return;
    const id = setInterval(() => {
      setCurrent((i) => (i + 1) % HERO_GALLERY.length);
    }, 4000);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <header id="top" className="relative flex min-h-[92svh] flex-col overflow-hidden pt-24 sm:pt-28">
      {/* Atmospheric background gallery — crossfade + slow ken-burns drift */}
      <div className="absolute inset-0">
        {HERO_GALLERY.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: i === current ? 1 : 0,
              animation: i === current ? "ken-burns 22s ease-in-out infinite alternate" : "none",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/80 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/25 to-ink/65" />
        {/* Clean dissolve of the photo into solid black at the bottom edge */}
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <Confetti count={40} className="z-10" />

      {/* Floating cultural shapes */}
      <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
        <div className="animate-float-y absolute left-[6%] top-[20%] h-16 w-16 rounded-full border-2 border-ficcua-gold/40 bg-ficcua-gold/10" />
        <div className="animate-float-y-alt absolute right-[8%] top-[16%] h-12 w-12 rotate-45 border-2 border-ficcua-red/50 bg-ficcua-red/15" />
        <div className="animate-float-y absolute bottom-[30%] left-[3%] h-14 w-14 rounded-full border-2 border-ficcua-blue/40 bg-ficcua-blue/10" style={{ animationDelay: "0.8s" }} />
      </div>

      <div className="relative z-20 mx-auto grid w-full max-w-7xl flex-1 items-center gap-10 px-6 py-10 sm:gap-14 lg:grid-cols-12 lg:gap-10">
        {/* Editorial text column */}
        <div className="lg:col-span-6">
          <div style={{ animation: "fade-in-up 0.7s var(--ease-out) both" }}>
            <Kicker color="var(--color-ficcua-gold)">Edición 2026 · Honduras</Kicker>
          </div>

          <h1 className="mt-5 text-display-1 text-cream">
            <span className="block overflow-hidden">
              <span className="block" style={{ animation: "rise 0.9s var(--ease-out) 0.05s both" }}>
                Festival
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                className="text-gradient-warm block"
                style={{
                  backgroundSize: "200% auto",
                  animation: "rise 0.9s var(--ease-out) 0.18s both, gradient-drift 5s ease-in-out 1.1s infinite",
                }}
              >
                Internacional
              </span>
            </span>
          </h1>

          <p className="mt-6 max-w-md text-lg text-cream/70" style={{ animation: "fade-in-up 0.8s var(--ease-out) 0.3s both" }}>
            Centroamérica y el Caribe se reúnen en danza, teatro, música, artes visuales, cine y literatura.
          </p>

          <div className="mt-9 flex flex-wrap gap-4" style={{ animation: "fade-in-up 0.8s var(--ease-out) 0.4s both" }}>
            <Button href="#cronogramas">Ver cronogramas</Button>
            <Button href="#galeria" variant="secondary">
              Explorar galería
            </Button>
          </div>
        </div>

        {/* Photo collage column — poster-style layered frames instead of a flat rectangle */}
        <div className="relative lg:col-span-6" style={{ animation: "fade-in-up 1s var(--ease-out) 0.35s both" }}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div className="absolute inset-x-8 inset-y-2 -rotate-3 overflow-hidden rounded-[2rem] ring-4 ring-cream/10 shadow-2xl">
              <img src={HERO_GALLERY[1]} alt="Danza bajo las luces del festival" className="h-full w-full object-cover" />
            </div>
            <div className="absolute bottom-8 -left-4 h-36 w-36 rotate-6 overflow-hidden rounded-2xl ring-4 ring-cream/15 shadow-2xl sm:h-44 sm:w-44">
              <img src={HERO_GALLERY[3]} alt="Pollera en movimiento" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20">
        <SectionDivider fill="var(--color-cream)" />
      </div>

      <style>{`
        @keyframes rise {
          from { opacity: 0; transform: translateY(100%); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}
