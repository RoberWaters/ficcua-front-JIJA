import { useCallback, useEffect, useRef, useState } from "react";
import { CAROUSEL } from "../data";
import { Reveal } from "./Reveal";

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

  // Autoplay — pauses on hover and when the tab is hidden (invisible correctness).
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
    // Center the active thumbnail within its own horizontal track only.
    // scrollIntoView would also scroll the whole page vertically, yanking the
    // viewport to the gallery while autoplay advances in the background.
    const track = thumbsRef.current;
    const el = track?.children[index];
    if (!track || !el) return;
    const target = el.offsetLeft - track.clientWidth / 2 + el.clientWidth / 2;
    track.scrollTo({ left: target, behavior: "smooth" });
  }, [index]);

  return (
    <section id="galeria" className="relative scroll-mt-24 bg-cream py-12 text-ink">
      <div className="mx-auto mb-12 max-w-4xl px-6">
        <Reveal className="text-center">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-ficcua-blue">
            Galería
          </span>
          <h2 className="mt-3 font-display text-4xl font-black md:text-5xl">
            Momentos del festival
          </h2>
          <p className="mt-3 text-lg text-ink/55">Un anticipo de la fiesta que nos espera.</p>
        </Reveal>
      </div>

      {/* Full-bleed photo stage — edge to edge, tall, images fitted to the frame. */}
      <Reveal delay={100}>
        <div
          className="relative w-full overflow-hidden bg-ink"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="relative mx-auto"
            style={{ width: "100%", aspectRatio: "3 / 2" }}
          >
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
                {/* Full-bleed photo — object-cover so it fills edge to edge. */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl p-6 sm:p-10">
                  <span
                    className="inline-block rounded-full px-4 py-1.5 text-sm font-black text-ink"
                    style={{ background: "var(--color-ficcua-gold)" }}
                  >
                    {item.title}
                  </span>
                  <p className="mt-3 max-w-lg text-cream/85">{item.caption}</p>
                </figcaption>
              </figure>
            ))}

            {/* counter */}
            <div className="absolute right-5 top-5 rounded-full bg-ink/50 px-4 py-1.5 text-sm font-semibold text-cream backdrop-blur-sm">
              {index + 1} / {count}
            </div>
          </div>

          {/* arrows */}
          <button
            onClick={() => go(index - 1)}
            aria-label="Anterior"
            className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-ink shadow-xl transition-transform duration-200 hover:scale-110 active:scale-95 sm:left-6"
          >
            <Chevron dir="left" />
          </button>
          <button
            onClick={() => go(index + 1)}
            aria-label="Siguiente"
            className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-ink shadow-xl transition-transform duration-200 hover:scale-110 active:scale-95 sm:right-6"
          >
            <Chevron dir="right" />
          </button>
        </div>
      </Reveal>

      <div className="mx-auto max-w-4xl px-6">
        {/* progress dots */}
        <div className="mt-7 flex items-center justify-center gap-2.5">
          {CAROUSEL.map((item, i) => (
            <button
              key={item.src}
              onClick={() => setIndex(i)}
              aria-label={`Ir a la foto ${i + 1}`}
              className="h-2.5 rounded-full transition-all duration-300"
              style={{
                width: i === index ? 30 : 10,
                background: i === index ? "var(--color-ficcua-red)" : "rgba(21,10,36,0.18)",
              }}
            />
          ))}
        </div>

        {/* thumbnails */}
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
