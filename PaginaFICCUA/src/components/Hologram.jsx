import { useEffect, useRef } from "react";
import logo from "../assets/logo-ficcua.png";
import { Reveal } from "./Reveal";

// Visor 3D del logo. Se inclina y deriva solo en todos los dispositivos: antes
// en desktop seguía al puntero, pero eso dejaba la animación muerta hasta que
// alguien pasaba el mouse encima, así que el movimiento autónomo que ya corría
// en móvil quedó como único modo. Flota sobre una sombra suave, con partículas
// subiendo de fondo. El movimiento va por lerp en rAF, sin librería de por
// medio: cada frame acerca el valor actual al objetivo.
export function Hologram() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    left: (i * 5.5 + 6) % 100,
    delay: (i * 0.4) % 6,
    duration: 5 + (i % 4),
    size: 3 + (i % 3),
  }));

  const panelRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const panel = panelRef.current;
    const logoEl = logoRef.current;
    if (!panel || !logoEl) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // target = a dónde quiere ir el drift, cur = el valor ya suavizado
    const target = { rx: 0, ry: 0, tx: 0, ty: 0 };
    const cur = { rx: 0, ry: 0, tx: 0, ty: 0 };
    const lerp = (a, b, t) => a + (b - a) * t;
    const start = performance.now();
    let raf = 0;

    const tick = (now) => {
      // Dos senoidales lentas a distinta frecuencia trazan un flotado suave que
      // nunca se repite igual. El logo rota y se desplaza a la vez, así que el
      // conjunto lee como parallax sin necesitar puntero ni sensores.
      const t = (now - start) / 1000;
      target.ry = Math.sin(t * 0.8) * 12;
      target.rx = Math.sin(t * 0.6 + 1) * 8;
      target.tx = Math.sin(t * 0.8) * 22;
      target.ty = Math.sin(t * 0.6 + 1) * 14;

      cur.rx = lerp(cur.rx, target.rx, 0.12);
      cur.ry = lerp(cur.ry, target.ry, 0.12);
      cur.tx = lerp(cur.tx, target.tx, 0.12);
      cur.ty = lerp(cur.ty, target.ty, 0.12);
      panel.style.transform = `rotateX(${cur.rx}deg) rotateY(${cur.ry}deg)`;
      logoEl.style.transform = `translate3d(${cur.tx}px, ${cur.ty}px, 40px)`;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-cream">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ficcua-blue/10 blur-3xl" />

      <div className="relative w-full text-center">
        <Reveal delay={120}>
          <div
            className="relative mx-auto flex h-160 w-full items-center justify-center"
            style={{ perspective: "1600px" }}
          >
            {/* partículas ascendentes */}
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

            {/* logo flotante con inclinación autónoma */}
            <div
              ref={panelRef}
              className="relative mx-auto w-[80%] max-w-4xl sm:w-[70%] lg:w-[62%]"
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

            {/* sombra en el piso — mismo ancho que el logo de arriba */}
            <div
              className="pointer-events-none absolute bottom-8 h-8 w-[80%] max-w-4xl rounded-[100%] sm:w-[70%] lg:w-[62%]"
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
