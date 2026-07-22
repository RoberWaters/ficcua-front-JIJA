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

// Shared header for standalone pages (anything besides Home) — same brand chrome
// (logo, gold accent) as the landing Navbar, without its scroll-spy, which only
// makes sense across the single-page sections of Home.
export function PageHeader({ kicker, title, description }) {
  return (
    <header className="relative overflow-hidden bg-surface-warm pb-20 pt-8">
      {/* Floating cultural shapes, same motif as the landing Hero */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="animate-float-y absolute left-[6%] top-[18%] h-14 w-14 rounded-full border-2 border-ficcua-gold/40 bg-ficcua-gold/15" />
        <div className="animate-float-y-alt absolute right-[10%] top-[22%] h-10 w-10 rotate-45 border-2 border-ficcua-red/40 bg-ficcua-red/10" />
        <div className="animate-float-y absolute bottom-[12%] right-[18%] h-12 w-12 rounded-full border-2 border-ficcua-blue/40 bg-ficcua-blue/10" style={{ animationDelay: "1s" }} />
      </div>

      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="FICCUA" className="h-11 w-auto drop-shadow" />
          <span className="hidden font-display text-lg font-semibold tracking-tight text-ink sm:block">
            <span className="text-ficcua-gold">2026</span>
          </span>
        </Link>
        <Button to="/" variant="ghost" size="sm" className="group">
          <BackArrow />
          Volver al inicio
        </Button>
      </nav>

      <Reveal className="relative mx-auto mt-16 max-w-4xl px-6 text-center" variant="rise">
        <Kicker>{kicker}</Kicker>
        <h1 className="mt-3 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[0.95] text-ink">
          {title}
        </h1>
        <p className="mt-5 text-lg text-ink/70 md:text-xl">{description}</p>
      </Reveal>
    </header>
  );
}
