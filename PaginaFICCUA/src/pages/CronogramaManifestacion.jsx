import { MANIFESTACIONES } from "../data";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { Footer } from "../components/Footer";
import { CenefaBloques } from "../components/CenefaBloques";

const CARD_CLASS =
  "group relative flex min-h-[300px] flex-col justify-between overflow-hidden p-6 text-left text-cream shadow-xl transition-[filter] duration-300 hover:brightness-105 disabled:cursor-not-allowed sm:min-h-[360px] sm:p-9";

function IconoNuevaPestana() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 4h6v6M20 4l-9 9" />
      <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </svg>
  );
}

// Contenido interno, compartido entre la tarjeta que abre el PDF y la que
// sigue deshabilitada porque su disciplina aún no tiene programación.
function CardContent({ m, hasPdf }) {
  return (
    <>
      <img
        src={m.foto}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0" style={{ background: m.accent, opacity: 0.82 }} />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

      <div className="relative">
        <h3 className="font-display text-2xl font-black leading-tight sm:text-3xl">{m.name}</h3>
        <p className="mt-3 max-w-md text-sm text-cream/85 sm:text-base">{m.desc}</p>
      </div>

      <div className="relative mt-7 flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-2.5 text-sm font-bold backdrop-blur-sm transition-colors duration-200 group-hover:bg-white/30 sm:px-5 sm:py-3 sm:text-base">
        {hasPdf ? "Ver programación (PDF)" : "PDF próximamente"}
        {hasPdf && <IconoNuevaPestana />}
      </div>
    </>
  );
}

// Con PDF la tarjeta abre el archivo en una pestaña nueva, a pantalla completa
// en el visor propio del navegador: en móvil eso da pinch-zoom, índice de
// páginas y descarga, cosas que un PDF incrustado en la página no ofrece.
// Va como <a> y no como window.open() porque Safari en iOS bloquea las
// ventanas abiertas por código aunque salgan de un clic del usuario.
// Sin PDF, la tarjeta queda deshabilitada hasta que exista el archivo.
function ManifestacionCard({ m }) {
  const hasPdf = Boolean(m.pdf);

  if (!hasPdf) {
    return (
      <button type="button" disabled className={CARD_CLASS}>
        <CardContent m={m} hasPdf={false} />
      </button>
    );
  }

  return (
    <a
      href={m.pdf}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Ver la programación de ${m.name} en PDF (se abre en una pestaña nueva)`}
      className={CARD_CLASS}
    >
      <CardContent m={m} hasPdf />
    </a>
  );
}

export function CronogramaManifestacion() {
  return (
    <>
      <CenefaBloques />
      <PageHeader
        kicker="Cronograma por manifestación"
        title="Elige tu manifestación artística"
        description="Danza, teatro, música, artes visuales, cinematografía y literatura — descubre la programación de cada disciplina del festival."
      />

      {/* 3 columnas × 2 filas, fotos de fondo — mismo lenguaje que las tarjetas de Cronogramas en el landing */}
      <section className="relative bg-cream pb-24 pt-4">
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {MANIFESTACIONES.map((m, i) => (
            <Reveal key={m.key} variant="rise" delay={i * 80}>
              <ManifestacionCard m={m} />
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
      <CenefaBloques />
    </>
  );
}
