import { STATS } from "../data";
import { AnimatedCounter } from "./AnimatedCounter";
import { Reveal } from "./Reveal";

export function Stats() {
  return (
    <section id="contadores" className="relative scroll-mt-24 bg-cream py-24 text-ink">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-16 text-center">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-ficcua-red">
            El festival en cifras
          </span>
          <h2 className="mt-3 font-display text-4xl font-black md:text-5xl">
            Un encuentro que crece
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="group relative h-full overflow-hidden rounded-3xl bg-white p-8 shadow-[0_10px_40px_-24px_rgba(21,10,36,0.5)] transition-[transform,box-shadow] duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-24px_rgba(21,10,36,0.55)]">
                <span
                  className="absolute inset-x-0 top-0 h-1.5"
                  style={{ background: s.accent }}
                />
                <div
                  className="font-display text-6xl font-black leading-none tracking-tight md:text-7xl"
                  style={{ color: s.accent }}
                >
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-4 text-sm font-bold uppercase tracking-wide text-ink/55">
                  {s.label}
                </div>
                {/* subtle corner flourish */}
                <div
                  className="pointer-events-none absolute -bottom-6 -right-6 h-20 w-20 rounded-full opacity-10 transition-transform duration-500 group-hover:scale-150"
                  style={{ background: s.accent }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
