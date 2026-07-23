import { useCallback, useEffect, useRef, useState } from "react";
import { CAROUSEL } from "../data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const INTERVAL = 5000;

function Chevron({ dir = "left" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {dir === "left" ? <path d="M15 6l-6 6 6 6" /> : <path d="M9 6l6 6-6 6" />}
    </svg>
  );
}

export function Carousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = CAROUSEL.length;

  const go = useCallback((next) => setIndex(((next % count) + count) % count), [count]);

  // Autoplay — se pausa en hover y con la pestaña oculta.
  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const id = setInterval(() => {
      if (!document.hidden) setIndex((c) => (c + 1) % count);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [paused, count]);

  const thumbsRef = useRef(null);
  useEffect(() => {
    // Centra la miniatura activa dentro de su propio track horizontal.
    // scrollIntoView movería también el scroll vertical de la página, tirando
    // el viewport hacia la galería cada vez que el autoplay avanza de fondo.
    const track = thumbsRef.current;
    const el = track?.children[index];
    if (!track || !el) return;
    const target = el.offsetLeft - track.clientWidth / 2 + el.clientWidth / 2;
    track.scrollTo({ left: target, behavior: "smooth" });
  }, [index]);

  return (
    <section id="galeria" className="relative flex min-h-[100svh] scroll-mt-24 flex-col justify-center bg-cream py-12 text-ink">
      <div className="mx-auto mb-12 max-w-4xl px-6">
        <SectionHeading
          kicker="Galería"
          kickerColor="var(--color-ficcua-blue)"
          title="Momentos del festival"
          subtitle="Un anticipo de la fiesta que nos espera."
        />
      </div>

      {/* Escenario de la foto a sangre — de borde a borde y alto. */}
      <Reveal delay={100}>
        <div
          className="relative w-full overflow-hidden bg-ink"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative mx-auto h-[68svh] w-full sm:h-[78vh] lg:h-[86vh]">
            {CAROUSEL.map((item, i) => (
              <figure
                key={item.src}
                className="absolute inset-0"
                style={{
                  opacity: i === index ? 1 : 0,
                  transition: "opacity 0.8s var(--ease-in-out)",
                  pointerEvents: i === index ? "auto" : "none",
                }}
                aria-hidden={i !== index}
              >
                {/* object-cover para llenar el marco; el object-position por
                    imagen (centro por defecto) mantiene las caras encuadradas. */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: item.position || "center" }}
                  loading="lazy"
                />
              </figure>
            ))}

            {/* contador */}
            <div className="absolute right-5 top-5 rounded-full bg-ink/50 px-4 py-1.5 text-sm font-semibold text-cream backdrop-blur-sm">
              {index + 1} / {count}
            </div>
          </div>

          {/* flechas */}
          <button
            onClick={() => go(index - 1)}
            aria-label="Anterior"
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-ink shadow-xl transition-transform duration-200 hover:scale-110 active:scale-95 sm:left-6 sm:h-12 sm:w-12"
          >
            <Chevron dir="left" />
          </button>
          <button
            onClick={() => go(index + 1)}
            aria-label="Siguiente"
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-ink shadow-xl transition-transform duration-200 hover:scale-110 active:scale-95 sm:right-6 sm:h-12 sm:w-12"
          >
            <Chevron dir="right" />
          </button>
        </div>
      </Reveal>

      <div className="mx-auto max-w-4xl px-6">
        {/* puntos de progreso */}
        {/* El punto mide 10px, pero el botón que lo envuelve llega a 44px de
            alto: en móvil el blanco táctil es ese, no el punto que se ve. */}
        <div className="mt-4 flex items-center justify-center gap-1">
          {CAROUSEL.map((item, i) => (
            <button
              key={item.src}
              onClick={() => setIndex(i)}
              aria-label={`Ir a la foto ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
              className="flex h-11 items-center justify-center px-1.5"
            >
              <span
                className="block h-2.5 rounded-full transition-all duration-300"
                style={{
                  width: i === index ? 30 : 10,
                  background: i === index ? "var(--color-ficcua-red)" : "rgba(21,10,36,0.18)",
                }}
              />
            </button>
          ))}
        </div>

        {/* miniaturas */}
        <div
          ref={thumbsRef}
          className="mt-6 flex justify-start gap-3 overflow-x-auto pb-2 sm:justify-center"
          style={{ scrollbarWidth: "none" }}
        >
          {CAROUSEL.map((item, i) => (
            <button
              key={item.src}
              onClick={() => setIndex(i)}
              className="h-16 w-24 flex-shrink-0 overflow-hidden rounded-xl transition-all duration-300"
              style={{
                outline: i === index ? "3px solid var(--color-ficcua-red)" : "3px solid transparent",
                outlineOffset: 2,
                opacity: i === index ? 1 : 0.55,
                transform: i === index ? "scale(1.04)" : "scale(1)",
              }}
              aria-label={item.title}
            >
              <img src={item.src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
