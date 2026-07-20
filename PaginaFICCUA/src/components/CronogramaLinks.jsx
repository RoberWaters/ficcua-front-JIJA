import { CRONOGRAMAS } from "../data";
import { Reveal } from "./Reveal";

function CalendarMark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
      <path d="M3 9h18M8 2.5v4M16 2.5v4" />
      <path d="M7.5 13h2M11 13h2M14.5 13h2M7.5 16.5h2M11 16.5h2" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CronogramaLinks() {
  return (
    <section id="cronogramas" className="relative scroll-mt-24 bg-ink py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 text-center">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-ficcua-gold">
            Planifica tu experiencia
          </span>
          <h2 className="mt-3 font-display text-4xl font-black text-cream md:text-5xl">
            Consulta los cronogramas
          </h2>
        </Reveal>

        <div className="grid gap-7 md:grid-cols-2">
          {CRONOGRAMAS.map((c, i) => (
            <Reveal key={c.href} delay={i * 90}>
              <a
                href={c.href}
                className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-3xl p-9 text-cream shadow-xl transition-[transform,box-shadow] duration-300 hover:-translate-y-2 hover:shadow-2xl active:scale-[0.985]"
                style={{ background: c.tint }}
              >
                {/* decorative rings */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-125" />
                <div className="pointer-events-none absolute bottom-8 right-14 h-20 w-20 rotate-45 rounded-2xl bg-white/10" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-cream backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <CalendarMark />
                  </div>
                  <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-cream/70">
                    {c.kicker}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-black leading-tight">{c.title}</h3>
                  <p className="mt-3 max-w-md text-cream/85">{c.desc}</p>
                </div>

                <div className="relative mt-7 flex w-fit items-center gap-2 rounded-full bg-white/20 px-5 py-3 font-bold backdrop-blur-sm transition-colors duration-200 group-hover:bg-white/30">
                  Entrar
                  <Arrow />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
