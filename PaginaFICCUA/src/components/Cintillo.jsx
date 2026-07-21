import { COUNTRIES } from "../data";
import { Reveal } from "./Reveal";

// Cintillo de banderas — banda blanca con scroll infinito (portado desde la
// rama "animaciones"). El set se duplica para que el loop sea imperceptible
// (translateX 0 → -50%). Los degradados laterales difuminan la entrada/salida
// y la marcha se pausa al pasar el cursor.
const STRIP = [...COUNTRIES, ...COUNTRIES];

export function Cintillo() {
  return (
    <section className="relative overflow-hidden bg-ink py-16">
      <Reveal className="mb-8 px-6 text-center">
        <h2 className="font-display text-3xl font-black uppercase tracking-tight text-ficcua-red md:text-4xl">
          ¡Somos FICCUA!
        </h2>
      </Reveal>

      <div className="group relative w-full overflow-hidden bg-cream shadow-[0_10px_20px_-5px_rgba(0,0,0,0.125)]">
        {/* Degradados laterales que difuminan la entrada/salida de las banderas */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-cream to-transparent" />

        <div
          className="flex w-max group-hover:[animation-play-state:paused]"
          style={{ animation: "marquee 40s linear infinite" }}
        >
          {STRIP.map((c, i) => (
            <div
              key={i}
              className="flex h-24 w-52 shrink-0 items-center justify-center px-4"
              aria-hidden={i >= COUNTRIES.length ? "true" : undefined}
            >
              <img
                src={c.flag}
                alt={`Bandera de ${c.name}`}
                className="h-[70px] w-auto"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
