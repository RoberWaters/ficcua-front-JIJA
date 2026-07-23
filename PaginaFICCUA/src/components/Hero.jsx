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
    <header id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden pt-24 sm:pt-28">
      {/* Galería de fondo — crossfade y deriva ken burns lenta */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-ink/10 to-ink/40" />
        {/* Disuelve la foto en negro sólido contra el borde inferior */}
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <Confetti count={40} className="z-10" />

      {/* Formas culturales flotantes */}
      <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
        <div className="animate-float-y absolute left-[6%] top-[20%] h-16 w-16 rounded-full border-2 border-ficcua-gold/40 bg-ficcua-gold/10" />
        <div className="animate-float-y-alt absolute right-[8%] top-[16%] h-12 w-12 rotate-45 border-2 border-ficcua-red/50 bg-ficcua-red/15" />
        <div className="animate-float-y absolute bottom-[30%] left-[3%] h-14 w-14 rounded-full border-2 border-ficcua-blue/40 bg-ficcua-blue/10" style={{ animationDelay: "0.8s" }} />
      </div>

      {/* El divisor de onda va en `absolute`, así que no reserva alto: el padding
          inferior tiene que cubrir su altura (56px / 80px) o en pantallas bajas
          la curva termina mordiendo los botones. */}
      <div className="relative z-30 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center gap-14 px-6 pb-24 pt-10 text-center sm:pb-32">
        {/* Columna de texto editorial */}
        <div>
          <div style={{ animation: "fade-in-up 0.7s var(--ease-out) both" }}>
            <Kicker color="var(--color-ficcua-gold)">Edición 2026 · Honduras</Kicker>
          </div>

          <h1 className="mt-5 text-display-1 text-cream">
            <span className="block overflow-hidden">
              <span className="block" style={{ animation: "rise 0.9s var(--ease-out) 0.05s both" }}>
                Festival Interuniversitario
              </span>
            </span>
            <span className="block overflow-hidden">
              {/* En móvil se deja envolver en dos líneas: forzar nowrap ahí
                  obligaba a bajar la fuente a ~13px para que cupieran los 33
                  caracteres, y quedaba diminuto contra el título. El nowrap
                  vuelve desde sm, donde ya hay ancho de sobra. */}
              <span
                className="text-gradient-warm block text-[clamp(1.15rem,5vw,1.5rem)] sm:whitespace-nowrap sm:text-[min(3.6vw,2.25rem)]"
                style={{
                  backgroundSize: "200% auto",
                  animation: "rise 0.9s var(--ease-out) 0.18s both, gradient-drift 5s ease-in-out 1.1s infinite",
                }}
              >
                Centroamericano de Cultura y Arte
              </span>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-lg text-cream/70" style={{ animation: "fade-in-up 0.8s var(--ease-out) 0.3s both" }}>
            Centroamérica y el Caribe se reúnen en danza, teatro, música, artes visuales, cinematografía y literatura.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4" style={{ animation: "fade-in-up 0.8s var(--ease-out) 0.4s both" }}>
            <Button href="#cronogramas">Ver cronogramas</Button>
            <Button href="#galeria" variant="secondary">
              Explorar galería
            </Button>
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
