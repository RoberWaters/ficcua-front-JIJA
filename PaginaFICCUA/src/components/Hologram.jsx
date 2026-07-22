import { useEffect, useRef } from "react";
import logo from "../assets/logo-ficcua.png";
import { Reveal } from "./Reveal";

// Interactive 3D logo viewer. On desktop the logo tilts in real 3D following
// the pointer (with a parallax offset for depth); on touch devices it drifts
// on its own so the effect is always alive without asking for any sensor
// permission. It floats above a soft black ground shadow, with rising
// particles for atmosphere. The motion is driven by a rAF lerp — a target is
// eased toward each frame — so it stays smooth without a heavy dependency.
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

    // target = where the pointer/drift wants it, cur = eased current value
    const target = { rx: 0, ry: 0, tx: 0, ty: 0 };
    const cur = { rx: 0, ry: 0, tx: 0, ty: 0 };
    const lerp = (a, b, t) => a + (b - a) * t;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const start = performance.now();
    let raf = 0;

    const tick = (now) => {
      // Phones can't hover a pointer, so instead of asking for any sensor
      // permission we let the logo drift on its own: two slow sine waves at
      // different rates trace a gentle floating path. Always visible, never
      // prompts the user. Desktop skips this and follows the pointer below.
      if (isTouch) {
        const t = (now - start) / 1000;
        target.ry = Math.sin(t * 0.8) * 12;
        target.rx = Math.sin(t * 0.6 + 1) * 8;
        target.tx = Math.sin(t * 0.8) * 22;
        target.ty = Math.sin(t * 0.6 + 1) * 14;
      }
      cur.rx = lerp(cur.rx, target.rx, 0.12);
      cur.ry = lerp(cur.ry, target.ry, 0.12);
      cur.tx = lerp(cur.tx, target.tx, 0.12);
      cur.ty = lerp(cur.ty, target.ty, 0.12);
      panel.style.transform = `rotateX(${cur.rx}deg) rotateY(${cur.ry}deg)`;
      logoEl.style.transform = `translate3d(${cur.tx}px, ${cur.ty}px, 40px)`;
      raf = requestAnimationFrame(tick);
    };

    // ---- Desktop / mouse: follow the pointer ----
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

    // Only the mouse follows the pointer; on touch the drift above owns the
    // motion, so we don't attach these (a touch-drag would otherwise fight it).
    if (!isTouch) {
      stage.addEventListener("pointermove", onMove);
      stage.addEventListener("pointerleave", onLeave);
    }

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-cream py-6 sm:py-10">
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

            {/* pointer-tilted floating logo (no panel) */}
            <div
              ref={panelRef}
              className="relative mx-auto w-[62%] max-w-4xl"
              style={{ transformStyle: "preserve-3d", willChange: "transform" }}
            >
              <img
                ref={logoRef}
                src={logo}
                alt="Logotipo FICCUA en 3D"
                className="w-full"
                style={{ transform: "translate3d(0, 0, 40px)", willChange: "transform" }}
              />
            </div>

            {/* ground shadow — same width as the logo above it */}
            <div
              className="pointer-events-none absolute bottom-8 h-8 w-[62%] max-w-4xl rounded-[100%]"
              style={{
                background: "radial-gradient(closest-side, rgba(21,10,36,0.35), rgba(21,10,36,0) 75%)",
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
