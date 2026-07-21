import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";

export function NotFound() {
  return (
    <>
      <main className="flex min-h-[70vh] items-center justify-center px-6 text-center">
        <Reveal>
          <span className="text-xs font-black uppercase tracking-[0.25em] text-ficcua-gold">
            Próximamente
          </span>
          <h1 className="mt-3 font-display text-4xl font-black text-cream md:text-5xl">
            Esta sección estará disponible pronto
          </h1>
          <p className="mx-auto mt-4 max-w-md text-lg text-cream/60">
            Estamos preparando esta página. Mientras tanto, vuelve al inicio del festival.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold text-cream shadow-2xl transition-transform duration-200 hover:-translate-y-1 active:scale-95"
            style={{ background: "#E8843E" }}
          >
            Volver al inicio
          </Link>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
