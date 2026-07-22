import { Confetti } from "./Decor";
import { Button } from "./ui/Button";
import { Reveal } from "./Reveal";
import { SectionDivider } from "./ui/SectionDivider";

// Closing statement band that bridges Home into the Footer instead of the
// page ending abruptly right after Countries. Wavy on both edges — like a
// ribbon banner — so it reads as a deliberate band, not a rectangular block.
export function ClosingCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-cream">
      <div className="absolute inset-0" style={{ background: "var(--surface-dusk)", opacity: 0.18 }} />
      <Confetti count={44} />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal variant="rise">
          <span className="kicker text-ficcua-gold">Te esperamos</span>
          <h2 className="mt-4 text-display-2 text-cream">
            Vive el arte y la cultura centroamericana
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-cream/70">
            Explora la programación completa y descubre dónde encontrar cada manifestación artística del festival.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button to="/cronograma-manifestacion">Ver programación completa</Button>
            <Button href="#top" variant="secondary">
              Volver al inicio
            </Button>
          </div>
        </Reveal>
      </div>

      {/* Wave dividers painted last so the dusk tint above never mutes their cream fill. */}
      <div className="absolute inset-x-0 top-0 z-10 -translate-y-px">
        <SectionDivider fill="var(--color-cream)" flip />
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10 translate-y-px">
        <SectionDivider fill="var(--color-cream)" />
      </div>
    </section>
  );
}
