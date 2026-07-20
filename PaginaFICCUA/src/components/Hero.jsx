import { HERO_IMG } from "../data";
import { Confetti, PapelPicado } from "./Decor";

export function Hero() {
  return (
    <header id="top" className="relative flex min-h-[90vh] items-center overflow-hidden">
      {/* Background photo with slow ken-burns drift */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Grupo folclórico en el festival FICCUA"
          className="h-full w-full object-cover"
          style={{ animation: "ken-burns 22s ease-in-out infinite alternate" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/60 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-ink/40" />
      </div>

      <PapelPicado className="absolute inset-x-0 top-0 z-20 opacity-80" />
      <Confetti count={44} className="z-10" />

      {/* Floating cultural shapes */}
      <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
        <div className="animate-float-y absolute left-[8%] top-[24%] h-16 w-16 rounded-full border-2 border-ficcua-gold/40 bg-ficcua-gold/10" />
        <div className="animate-float-y-alt absolute right-[12%] top-[30%] h-12 w-12 rotate-45 border-2 border-ficcua-red/50 bg-ficcua-red/15" />
        <div className="animate-float-y absolute bottom-[26%] left-[18%] h-14 w-14 rounded-full border-2 border-ficcua-blue/40 bg-ficcua-blue/10" style={{ animationDelay: "0.8s" }} />
        <div className="animate-float-y-alt absolute right-[22%] bottom-[30%] h-10 w-10 rounded-full border-2 border-ficcua-green/40 bg-ficcua-green/10" style={{ animationDelay: "1.4s" }} />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pb-20 pt-32">
        <div className="max-w-4xl">
          <div
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-ficcua-gold/30 bg-ficcua-gold/10 px-5 py-2 text-sm font-bold tracking-wide text-ficcua-gold backdrop-blur-sm"
            style={{ animation: "fade-in-up 0.7s var(--ease-out) both" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-ficcua-gold" />
            XIII Festival · Honduras · UNAH 2026
          </div>

          <h1 className="font-display text-[clamp(3rem,9vw,7rem)] font-black leading-[0.9] tracking-tight">
            <span className="block overflow-hidden">
              <span className="block" style={{ animation: "rise 0.9s var(--ease-out) 0.05s both" }}>
                Festival
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="text-gradient-warm block" style={{ animation: "rise 0.9s var(--ease-out) 0.18s both" }}>
                Internacional
              </span>
            </span>
          </h1>

          <p
            className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-cream/75 md:text-xl"
            style={{ animation: "fade-in-up 0.8s var(--ease-out) 0.4s both" }}
          >
            Una nueva historia florece con el arte y la cultura. Ocho países centroamericanos se
            encuentran para celebrar la danza, la música y las tradiciones que nos unen.
          </p>

          <div
            className="mt-10 flex flex-wrap gap-4"
            style={{ animation: "fade-in-up 0.8s var(--ease-out) 0.55s both" }}
          >
            <a
              href="#cronogramas"
              className="rounded-full px-8 py-4 text-base font-bold text-cream shadow-2xl transition-transform duration-200 hover:-translate-y-1 active:scale-95"
              style={{ background: "linear-gradient(135deg,#D13B5E,#E8843E)" }}
            >
              Ver cronogramas
            </a>
            <a
              href="#galeria"
              className="rounded-full border border-cream/25 bg-cream/10 px-8 py-4 text-base font-bold text-cream backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:bg-cream/20 active:scale-95"
            >
              Explorar galería
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2" aria-hidden="true">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-cream/40 p-1.5">
          <span className="h-2 w-1 rounded-full bg-cream/70" style={{ animation: "scroll-dot 1.6s ease-in-out infinite" }} />
        </div>
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
        @keyframes scroll-dot {
          0%   { opacity: 0; transform: translateY(0); }
          40%  { opacity: 1; }
          100% { opacity: 0; transform: translateY(10px); }
        }
      `}</style>
    </header>
  );
}
