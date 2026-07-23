import { Link } from "react-router-dom";
import { CRONOGRAMAS, HERO_GALLERY } from "../data";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionDivider } from "./ui/SectionDivider";
import { Reveal } from "./Reveal";

// Una foto por tarjeta para que el tinte no quede como un rectángulo plano.
const CARD_PHOTOS = [HERO_GALLERY[0], HERO_GALLERY[2]];

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

// Contenido interno compartido entre la tarjeta que navega a una página
// (Link) y las que abren un PDF directo (button + window.open).
function CardContent({ c, photo }) {
  const hasPdf = "pdf" in c;
  const hasFile = Boolean(c.pdf);
  return (
    <>
      <img
        src={photo}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0" style={{ background: c.tint, opacity: 0.88 }} />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

      {/* aros decorativos */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-125" />
      <div className="pointer-events-none absolute bottom-8 right-14 h-20 w-20 rotate-45 rounded-2xl bg-white/10" />

      <div className="relative">
        <p className="kicker text-cream/70">{c.kicker}</p>
        <h3 className="mt-2 font-display text-2xl font-black leading-tight sm:text-3xl">{c.title}</h3>
        <p className="mt-3 max-w-md text-sm text-cream/85 sm:text-base">{c.desc}</p>
      </div>

      <div className="relative mt-7 flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-2.5 text-sm font-bold backdrop-blur-sm transition-colors duration-200 group-hover:bg-white/30 sm:px-5 sm:py-3 sm:text-base">
        {hasPdf ? (hasFile ? "Ver PDF" : "PDF próximamente") : "Entrar"}
        <Arrow />
      </div>
    </>
  );
}

export function CronogramaLinks() {
  return (
    <section id="cronogramas" className="relative scroll-mt-24 bg-cream pb-24 pt-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading kicker="Programación" kickerColor="var(--color-ficcua-red)" title="Consulta los cronogramas" className="mb-14" />
      </div>

      {/* A sangre, de borde a borde — las tarjetas leen como una sola banda. */}
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {CRONOGRAMAS.map((c, i) => {
          const photo = CARD_PHOTOS[i % CARD_PHOTOS.length];
          const cardClass =
            "group relative flex min-h-[340px] flex-col justify-between overflow-hidden p-6 text-left text-cream shadow-xl transition-[filter] duration-300 hover:brightness-105 disabled:cursor-not-allowed sm:min-h-[400px] sm:p-9 lg:p-14";

          return (
            <Reveal key={c.title} variant="rise" delay={i * 90}>
              {"pdf" in c ? (
                <button
                  type="button"
                  disabled={!c.pdf}
                  onClick={() => c.pdf && window.open(c.pdf, "_blank", "noopener,noreferrer")}
                  className={cardClass}
                >
                  <CardContent c={c} photo={photo} />
                </button>
              ) : (
                <Link to={c.href} className={cardClass}>
                  <CardContent c={c} photo={photo} />
                </Link>
              )}
            </Reveal>
          );
        })}
      </div>

      <div className="absolute inset-x-0 bottom-0 translate-y-px">
        <SectionDivider fill="var(--color-ink-700)" />
      </div>
    </section>
  );
}
