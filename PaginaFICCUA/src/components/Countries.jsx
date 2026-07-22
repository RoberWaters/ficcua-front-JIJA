import { COUNTRIES } from "../data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./ui/SectionHeading";

// Duplicated once so the marquee track can loop seamlessly (translateX -50%).
const STRIP = [...COUNTRIES, ...COUNTRIES];

export function Countries() {
  return (
    <section id="paises" className="relative scroll-mt-24 overflow-hidden bg-cream py-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-ficcua-green blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-ficcua-red blur-3xl" />
      </div>

      <div className="relative">
        <SectionHeading
          kicker="Naciones participantes"
          kickerColor="var(--color-ficcua-green)"
          title="Ocho países, una sola fiesta"
          subtitle="Centroamérica y el Caribe se encuentran en el arte."
          className="mb-14 px-6"
        />

        {/* Cintillo — the flags drift steadily past. Pauses on hover. */}
        <Reveal
          className="group relative w-full overflow-hidden py-4"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)",
          }}
        >
          <div className="animate-marquee flex w-max group-hover:[animation-play-state:paused]">
            {STRIP.map((c, i) => (
              <div
                key={i}
                className="mx-5 flex w-52 shrink-0 flex-col items-center gap-4"
                aria-hidden={i >= COUNTRIES.length ? "true" : undefined}
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl shadow-[0_14px_34px_-14px_rgba(21,10,36,0.25)] ring-1 ring-ink/10">
                  <img
                    src={c.flag}
                    alt={`Bandera de ${c.name}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="text-sm font-bold tracking-wide text-ink/70">
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
