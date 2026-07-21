import { useEffect, useRef } from "react";
import logo from "../assets/logo-ficcua.png";
import { Reveal } from "./Reveal";

// Interactive 3D/hologram viewer.
// The logo floats on a translucent panel that tilts in real 3D following the
// pointer (with a parallax offset on the logo for depth), plus a sweeping
// sheen, scanlines, a glowing base and rising particles. The tilt is driven by
// a rAF lerp — targets are set on pointermove and eased toward each frame —
// so it stays smooth without a heavy animation dependency.
export function Hologram() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    left: (i * 5.5 + 6) % 100,
    delay: (i * 0.4) % 6,
    duration: 5 + (i % 4),
    size: 3 + (i % 3),
  }));

  const stageRef = useRef(null);
  const panelRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    const panel = panelRef.current;
    const logoEl = logoRef.current;
    if (!stage || !panel || !logoEl) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // target = where the pointer wants it, cur = eased current value
    const target = { rx: 0, ry: 0, tx: 0, ty: 0 };
    const cur = { rx: 0, ry: 0, tx: 0, ty: 0 };
    const lerp = (a, b, t) => a + (b - a) * t;
    let raf = 0;

    const tick = () => {
      cur.rx = lerp(cur.rx, target.rx, 0.12);
      cur.ry = lerp(cur.ry, target.ry, 0.12);
      cur.tx = lerp(cur.tx, target.tx, 0.12);
      cur.ty = lerp(cur.ty, target.ty, 0.12);
      panel.style.transform = `rotateX(${cur.rx}deg) rotateY(${cur.ry}deg)`;
      logoEl.style.transform = `translate3d(${cur.tx}px, ${cur.ty}px, 40px)`;
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      const r = stage.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width; // 0..1
      const py = (e.clientY - r.top) / r.height; // 0..1
      // Panel tilts (X-axis from vertical pointer, Y-axis from horizontal)
      target.rx = 15 - 30 * py;
      target.ry = -15 + 30 * px;
      // Logo drifts the opposite way for a parallax sense of depth
      target.tx = -30 + 60 * px;
      target.ty = -30 + 60 * py;
    };

    const onLeave = () => {
      target.rx = 0;
      target.ry = 0;
      target.tx = 0;
      target.ty = 0;
    };

    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-[#1B0E30] to-ink" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ficcua-blue/10 blur-3xl" />

      <div className="relative w-full text-center">
        <Reveal delay={120}>
          <div
            ref={stageRef}
            className="relative mx-auto flex h-[640px] w-full items-center justify-center"
            style={{ perspective: "1600px" }}
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

            {/* pointer-tilted 3D panel */}
            <div
              ref={panelRef}
              className="relative w-full"
              style={{ transformStyle: "preserve-3d", willChange: "transform" }}
            >
              <div
                className="relative flex h-[520px] w-full items-center justify-center border-y border-[#8FD3FF]/40"
                style={{
                  background:
                    "linear-gradient(150deg, rgba(143,211,255,0.16), rgba(232,179,62,0.10) 55%, rgba(209,59,94,0.14))",
                  boxShadow:
                    "0 0 40px rgba(143,211,255,0.25), inset 0 0 40px rgba(143,211,255,0.12)",
                  backdropFilter: "blur(2px)",
                }}
              >
                <img
                  ref={logoRef}
                  src={logo}
                  alt="Proyección holográfica del logo FICCUA"
                  className="w-[52%] max-w-3xl opacity-90"
                  style={{
                    filter: "drop-shadow(0 0 14px rgba(143,211,255,0.5))",
                    transform: "translate3d(0, 0, 40px)",
                    willChange: "transform",
                  }}
                />

                {/* scanlines */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, rgba(143,211,255,0.35) 0px, rgba(143,211,255,0.35) 1px, transparent 2px, transparent 5px)",
                  }}
                />
                {/* sweeping sheen */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
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
              className="pointer-events-none absolute bottom-8 h-6 w-[36rem] max-w-[80%] rounded-[100%]"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(143,211,255,0.55), rgba(143,211,255,0) 75%)",
                animation: "breathe 3.5s ease-in-out infinite",
              }}
            />
          </div>
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
