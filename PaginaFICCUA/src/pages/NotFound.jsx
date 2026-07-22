import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";
import { Kicker } from "../components/ui/Kicker";
import { Button } from "../components/ui/Button";

export function NotFound() {
  return (
    <>
      <main className="flex min-h-[70vh] items-center justify-center px-6 text-center">
        <Reveal variant="rise">
          <Kicker>Próximamente</Kicker>
          <h1 className="mt-3 font-display text-4xl font-black text-cream md:text-5xl">
            Esta sección estará disponible pronto
          </h1>
          <p className="mx-auto mt-4 max-w-md text-lg text-cream/60">
            Estamos preparando esta página. Mientras tanto, vuelve al inicio del festival.
          </p>
          <Button to="/" className="mt-8">
            Volver al inicio
          </Button>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
