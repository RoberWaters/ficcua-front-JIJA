import logo from "../assets/logo-ficcua.png";
import { Reveal } from "./Reveal";

// Placeholder for the future 3D/hologram viewer.
// Built as a CSS-3D holographic projection: the logo floats on a translucent
// panel that rotates in real 3D, with a sweeping sheen, scanlines, a glowing
// base and rising particles.
export function Hologram() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    left: (i * 5.5 + 6) % 100,
    delay: (i * 0.4) % 6,
    duration: 5 + (i % 4),
    size: 3 + (i % 3),
  }));

  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-[#1B0E30] to-ink" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ficcua-blue/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal className="mb-4">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-ficcua-blue">
            Experiencia inmersiva
          </span>
          <h2 className="mt-3 font-display text-4xl font-black text-cream md:text-5xl">
            Holograma 3D
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div
            className="relative mx-auto mt-10 flex h-[420px] max-w-xl items-center justify-center"
            style={{ perspective: "1200px" }}
          >
            {/* rising particles */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
              {particles.map((p, i) => (
                <span
                  key={i}
                  className="absolute bottom-16 block rounded-full"
                  style={{
                    left: `${p.left}%`,
                    width: p.size,
                    height: p.size,
                    background: i % 2 ? "var(--color-ficcua-gold)" : "#8FD3FF",
                    boxShadow: "0 0 8px currentColor",
                    animation: `holo-rise ${p.duration}s ease-in ${p.delay}s infinite`,
                  }}
                />
              ))}
            </div>

            {/* rotating 3D panel */}
            <div
              className="relative"
              style={{ transformStyle: "preserve-3d", animation: "holo-spin 14s linear infinite" }}
            >
              <div
                className="relative flex h-64 w-64 items-center justify-center rounded-3xl border border-[#8FD3FF]/40 sm:h-72 sm:w-72"
                style={{
                  background:
                    "linear-gradient(150deg, rgba(143,211,255,0.16), rgba(232,179,62,0.10) 55%, rgba(209,59,94,0.14))",
                  boxShadow:
                    "0 0 40px rgba(143,211,255,0.25), inset 0 0 40px rgba(143,211,255,0.12)",
                  backdropFilter: "blur(2px)",
                }}
              >
                <img
                  src={logo}
                  alt="Proyección holográfica del logo FICCUA"
                  className="w-[78%] opacity-90"
                  style={{ filter: "drop-shadow(0 0 14px rgba(143,211,255,0.5))" }}
                />

                {/* scanlines */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-40 mix-blend-screen"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, rgba(143,211,255,0.35) 0px, rgba(143,211,255,0.35) 1px, transparent 2px, transparent 5px)",
                  }}
                />
                {/* sweeping sheen */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
                  <div
                    className="absolute inset-x-0 h-1/3"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent, rgba(255,255,255,0.35), transparent)",
                      animation: "holo-scan 3.5s ease-in-out infinite",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* glowing base */}
            <div
              className="pointer-events-none absolute bottom-8 h-6 w-64 rounded-[100%]"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(143,211,255,0.55), rgba(143,211,255,0) 75%)",
                animation: "breathe 3.5s ease-in-out infinite",
              }}
            />
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-8 max-w-md text-cream/60">
            Vista previa del visor 3D interactivo. Próximamente podrás explorar el emblema del
            festival en holograma.
          </p>
        </Reveal>
      </div>

      <style>{`
        @keyframes holo-rise {
          0%   { transform: translateY(0) scale(1); opacity: 0; }
          20%  { opacity: 1; }
          100% { transform: translateY(-260px) scale(0.4); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
