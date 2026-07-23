import { Link } from "react-router-dom";
import logo from "../assets/logo-ficcua.png";
import { Reveal } from "./Reveal";
import { Kicker } from "./ui/Kicker";
import { Button } from "./ui/Button";

function BackArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  );
}

// Header compartido de las páginas sueltas, o sea todo menos Home. Repite la
// marca del Navbar del landing sin su scroll-spy, que solo tiene sentido entre
// las secciones de una misma página.
export function PageHeader({ kicker, title, description }) {
  return (
    <header className="relative overflow-hidden bg-surface-warm pb-20 pt-8">
      {/* Formas culturales flotantes, mismo motivo que el Hero del landing */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="animate-float-y absolute left-[6%] top-[18%] h-14 w-14 rounded-full border-2 border-ficcua-gold/40 bg-ficcua-gold/15" />
        <div className="animate-float-y-alt absolute right-[10%] top-[22%] h-10 w-10 rotate-45 border-2 border-ficcua-red/40 bg-ficcua-red/10" />
        <div className="animate-float-y absolute bottom-[12%] right-[18%] h-12 w-12 rounded-full border-2 border-ficcua-blue/40 bg-ficcua-blue/10" style={{ animationDelay: "1s" }} />
      </div>

      <nav className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-6">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img src={logo} alt="FICCUA" className="h-9 w-auto drop-shadow sm:h-11" />
        </Link>
        <Button to="/" variant="ghost" size="sm" className="group shrink-0">
          <BackArrow />
          {/* En móvil solo la flecha y "Inicio": el rótulo completo no cabe
              junto al logo en pantallas de 320px. */}
          <span className="sm:hidden">Inicio</span>
          <span className="hidden sm:inline">Volver al inicio</span>
        </Button>
      </nav>

      <Reveal className="relative mx-auto mt-10 max-w-4xl px-6 text-center sm:mt-16" variant="rise">
        <Kicker>{kicker}</Kicker>
        {/* El mínimo del clamp tiene que caber en un teléfono: "manifestación"
            no se puede partir y a 2.5rem se salía del ancho en pantallas de 320px. */}
        <h1 className="mt-3 font-display text-[clamp(1.9rem,6vw,4.5rem)] font-black leading-[0.95] text-ink">
          {title}
        </h1>
        <p className="mt-5 text-lg text-ink/70 md:text-xl">{description}</p>
      </Reveal>
    </header>
  );
}
