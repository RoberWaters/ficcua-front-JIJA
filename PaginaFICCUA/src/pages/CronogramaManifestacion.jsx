import { MANIFESTACIONES } from "../data";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { Footer } from "../components/Footer";

// Thin line-art icons, one per manifestación — same flat style as Stats.jsx
const ICONS = {
  danza: () => (
    <>
      <path d="M7 4c3 0 5 2 5 4.5S9.5 12 7 12s-4 2-4 4.5S5 21 8 21" />
      <path d="M17 4c-3 0-5 2-5 4.5S14.5 12 17 12s4 2 4 4.5-2 4.5-5 4.5" />
    </>
  ),
  teatro: () => (
    <>
      <path d="M12 21c-4.4 0-8-3.8-8-8.5S7.6 4 12 4s8 3.8 8 8.5S16.4 21 12 21Z" />
      <path d="M8.5 9.5c.5-.8 1.3-.8 1.8 0M13.7 9.5c.5-.8 1.3-.8 1.8 0" />
      <path d="M8.3 14c1.2 1.4 6.2 1.4 7.4 0" />
    </>
  ),
  musica: () => (
    <>
      <path d="M9 18V5l11-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="17" cy="16" r="3" />
    </>
  ),
  "artes-visuales": () => (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <circle cx="8.5" cy="9" r="1.6" />
      <path d="m3 15 5-4 4 3 3-2 6 6" />
    </>
  ),
  cine: () => (
    <>
      <path d="M3 8.5h18M3 8.5V19a1.5 1.5 0 0 0 1.5 1.5h15A1.5 1.5 0 0 0 21 19V8.5M3 8.5l1.8-4.3A1.5 1.5 0 0 1 6.2 3h11.6a1.5 1.5 0 0 1 1.4 1.2l1.8 4.3" />
      <path d="M7 3.5 9 8.5M13 3.5l2 5" />
    </>
  ),
  literatura: () => (
    <>
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5v-17Z" />
      <path d="M4 19a2.5 2.5 0 0 1 2.5-2.5H20" />
    </>
  ),
};

export function CronogramaManifestacion() {
  return (
    <>
      <PageHeader
        kicker="Cronograma por manifestación"
        title="Elige tu manifestación artística"
        description="Danza, teatro, música, artes visuales, cine y literatura — descubre la programación de cada disciplina del festival."
      />

      <section className="relative bg-cream pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {MANIFESTACIONES.map((m, i) => (
              <Reveal key={m.key} delay={i * 90}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-8 ring-1 ring-ink/10 shadow-xl transition-[transform,box-shadow] duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-[0.16] transition-transform duration-500 group-hover:scale-125"
                    style={{ background: m.accent }}
                  />

                  <div
                    className="relative flex h-14 w-14 items-center justify-center rounded-2xl text-cream shadow-lg"
                    style={{ background: m.accent }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-7 w-7"
                      aria-hidden="true"
                    >
                      {ICONS[m.key]()}
                    </svg>
                  </div>

                  <h3 className="relative mt-6 font-display text-2xl font-black text-ink">{m.name}</h3>
                  <p className="relative mt-3 text-ink/60">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
