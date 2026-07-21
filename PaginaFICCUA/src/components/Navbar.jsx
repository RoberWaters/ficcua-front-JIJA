import { useEffect, useState } from "react";
import logo from "../assets/logo-ficcua.png";
import { CenefaBloques } from "./CenefaBloques";

const LINKS = [
  { href: "#cronogramas", label: "Cronogramas" },
  { href: "#contadores", label: "El festival" },
  { href: "#galeria", label: "Galería" },
  { href: "#paises", label: "Países" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy — mark the link whose section currently owns the viewport top.
  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="fixed inset-x-0 top-0 z-50 transition-[transform,opacity] duration-300"
      style={{
        transform: scrolled ? "translateY(-100%)" : "translateY(0)",
        opacity: scrolled ? 0 : 1,
        pointerEvents: scrolled ? "none" : "auto",
      }}
    >
      {/* Cenefa decorativa arriba del todo — se oculta junto con el menú */}
      <CenefaBloques />
      <nav>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="FICCUA" className="h-11 w-auto drop-shadow" />
          <span className="hidden font-display text-lg font-semibold tracking-tight text-cream sm:block">
            <span className="text-ficcua-gold">2026</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={active === l.href ? "true" : undefined}
              className={`text-sm font-semibold transition-colors duration-200 hover:text-ficcua-gold ${
                active === l.href ? "text-ficcua-gold" : "text-cream/70"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cronogramas"
            className="rounded-full px-5 py-2 text-sm font-bold text-cream shadow-lg transition-transform duration-200 hover:-translate-y-0.5 active:scale-95"
            style={{ background: "#E8843E" }}
          >
            Ver programación
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-cream md:hidden"
          aria-label="Menú"
        >
          <span className="relative block h-4 w-5">
            <span
              className="absolute left-0 block h-0.5 w-5 bg-current transition-transform duration-300"
              style={{ top: open ? "7px" : "0", transform: open ? "rotate(45deg)" : "none" }}
            />
            <span
              className="absolute left-0 top-[7px] block h-0.5 w-5 bg-current transition-opacity duration-200"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="absolute left-0 block h-0.5 w-5 bg-current transition-transform duration-300"
              style={{ top: open ? "7px" : "14px", transform: open ? "rotate(-45deg)" : "none" }}
            />
          </span>
        </button>
      </div>

      <div
        className="overflow-hidden border-white/5 bg-ink/95 backdrop-blur-md transition-[max-height] duration-300 md:hidden"
        style={{ maxHeight: open ? "320px" : "0", borderTopWidth: open ? "1px" : "0" }}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              aria-current={active === l.href ? "true" : undefined}
              className={`rounded-lg px-2 py-2.5 font-semibold transition-colors hover:bg-white/5 hover:text-ficcua-gold ${
                active === l.href ? "bg-white/5 text-ficcua-gold" : "text-cream/80"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
      </nav>
    </div>
  );
}
