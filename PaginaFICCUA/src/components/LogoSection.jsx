import logo from "../assets/logo-ficcua.png";
import { Reveal } from "./Reveal";

export function LogoSection() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* aurora background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 40%, #2A1348 0%, #150A24 70%), linear-gradient(180deg,#150A24,#150A24)",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ficcua-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute left-[20%] top-[20%] h-72 w-72 rounded-full bg-ficcua-red/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[18%] bottom-[16%] h-72 w-72 rounded-full bg-ficcua-blue/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <span className="text-xs font-black uppercase tracking-[0.25em] text-ficcua-gold">
            Identidad oficial
          </span>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex justify-center">
            <div className="relative">
              {/* rotating dashed halo */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-ficcua-gold/20"
                style={{ animation: "spin-fwd 32s linear infinite" }}
              />
              <img
                src={logo}
                alt="Logotipo FICCUA — Una nueva historia florece con el arte y la cultura"
                className="w-full max-w-xl drop-shadow-[0_20px_45px_rgba(232,179,62,0.25)]"
                style={{ animation: "breathe 6s ease-in-out infinite" }}
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <p className="mx-auto mt-10 max-w-xl font-display text-2xl font-medium italic leading-snug text-cream/85 md:text-3xl">
            &ldquo;Una nueva historia florece con el arte y la cultura&rdquo;
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-cream/50">
            Honduras · UNAH · 2026
          </p>
        </Reveal>
      </div>
    </section>
  );
}
