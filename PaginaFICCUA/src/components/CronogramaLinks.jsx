import { Link } from "react-router-dom";
import { CRONOGRAMAS } from "../data";
import { Reveal } from "./Reveal";

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CronogramaLinks() {
  return (
    <section id="cronogramas" className="relative scroll-mt-24 bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 text-center">
          <h2 className="font-display text-4xl font-black text-ink md:text-5xl">
            Consulta los cronogramas
          </h2>
        </Reveal>

        <div className="grid gap-7 md:grid-cols-2">
          {CRONOGRAMAS.map((c, i) => (
            <Reveal key={c.href} delay={i * 90}>
              <Link
                to={c.href}
                className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-3xl p-9 text-cream shadow-xl transition-[transform,box-shadow] duration-300 hover:-translate-y-2 hover:shadow-2xl active:scale-[0.985]"
                style={{ background: c.tint }}
              >
                {/* decorative rings */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-125" />
                <div className="pointer-events-none absolute bottom-8 right-14 h-20 w-20 rotate-45 rounded-2xl bg-white/10" />

                <div className="relative">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-cream/70">
                    {c.kicker}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-black leading-tight">{c.title}</h3>
                  <p className="mt-3 max-w-md text-cream/85">{c.desc}</p>
                </div>

                <div className="relative mt-7 flex w-fit items-center gap-2 rounded-full bg-white/20 px-5 py-3 font-bold backdrop-blur-sm transition-colors duration-200 group-hover:bg-white/30">
                  Entrar
                  <Arrow />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
