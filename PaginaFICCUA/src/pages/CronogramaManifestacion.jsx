import { MANIFESTACIONES } from "../data";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { Footer } from "../components/Footer";
import { CenefaBloques } from "../components/CenefaBloques";

// Each card opens that discipline's programación PDF in a new tab once it
// exists — `m.pdf` is a placeholder (null) until the real files are ready.
function ManifestacionCard({ m }) {
  const hasPdf = Boolean(m.pdf);
  return (
    <button
      type="button"
      disabled={!hasPdf}
      onClick={() => hasPdf && window.open(m.pdf, "_blank", "noopener,noreferrer")}
      className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden p-9 text-left text-cream shadow-xl transition-[filter] duration-300 hover:brightness-105 disabled:cursor-not-allowed sm:min-h-[360px]"
    >
      <img
        src={m.foto}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0" style={{ background: m.accent, opacity: 0.82 }} />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

      <div className="relative">
        <h3 className="font-display text-3xl font-black leading-tight">{m.name}</h3>
        <p className="mt-3 max-w-md text-cream/85">{m.desc}</p>
      </div>

      <div className="relative mt-7 flex w-fit items-center rounded-full bg-white/20 px-5 py-3 font-bold backdrop-blur-sm transition-colors duration-200 group-hover:bg-white/30">
        {hasPdf ? "Ver programación (PDF)" : "PDF próximamente"}
      </div>
    </button>
  );
}

export function CronogramaManifestacion() {
  return (
    <>
      <CenefaBloques />
      <PageHeader
        kicker="Cronograma por manifestación"
        title="Elige tu manifestación artística"
        description="Danza, teatro, música, artes visuales, cine y literatura — descubre la programación de cada disciplina del festival."
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
