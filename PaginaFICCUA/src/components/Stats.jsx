import { STATS } from "../data";
import { AnimatedCounter } from "./AnimatedCounter";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionDivider } from "./ui/SectionDivider";

// Thin line-art icons (one per stat), in the flat style of the reference band.
const ICONS = [
  // Universidades — birrete
  () => (
    <>
      <path d="M12 4 2 9l10 5 10-5-10-5Z" />
      <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
      <path d="M22 9v5" />
    </>
  ),
  // Artistas — estrella
  () => <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9L12 3.5Z" />,
  // Manifestaciones — paleta
  () => (
    <>
      <path d="M12 3a9 9 0 0 0 0 18c1 0 1.7-.8 1.7-1.7 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.1 0-.9.8-1.7 1.7-1.7H16a5 5 0 0 0 5-5c0-3.9-4-7.3-9-7.3Z" />
      <circle cx="7.5" cy="10.5" r="1" />
      <circle cx="12" cy="7.5" r="1" />
      <circle cx="16.5" cy="10.5" r="1" />
    </>
  ),
  // Escenarios — ubicación
  () => (
    <>
      <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
];

export function Stats() {
  return (
    <section id="contadores" className="relative scroll-mt-24 bg-ink-700 py-28 text-cream">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          kicker="El festival en números"
          kickerColor="var(--color-ficcua-gold)"
          title="Un encuentro que crece"
          light
          className="mb-10"
        />
      </div>

      {/* Solid-color counter tiles — full-bleed, joined edge to edge, square
          corners. Same "big rectangular button" language as the Cronograma cards. */}
      <div className="grid w-full grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div
              className="group relative flex h-full flex-col justify-center px-8 py-12 text-cream shadow-lg transition-[filter] duration-300 hover:brightness-110 sm:px-10 sm:py-16"
              style={{ background: s.accent }}
            >
              <div className="flex items-center gap-4">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-9 w-9 shrink-0 opacity-90 sm:h-11 sm:w-11"
                  aria-hidden="true"
                >
                  {ICONS[i]()}
                </svg>
                <div className="font-display text-5xl font-black leading-none tracking-tight sm:text-6xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
              </div>
              <div className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-cream/70 sm:text-sm">
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 translate-y-px">
        <SectionDivider fill="var(--color-cream)" />
      </div>
    </section>
  );
}
