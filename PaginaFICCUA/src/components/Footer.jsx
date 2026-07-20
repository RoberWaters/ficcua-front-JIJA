import logo from "../assets/logo-ficcua.png";
import { COUNTRIES } from "../data";
import { PapelPicado } from "./Decor";

export function Footer() {
  return (
    <footer className="relative bg-ink-700 text-cream">
      <PapelPicado className="opacity-90" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img src={logo} alt="FICCUA" className="h-14 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/55">
              Festival Interuniversitario Centroamericano de la Cultura y el Arte. Una nueva
              historia florece con el arte y la cultura.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-ficcua-gold">
              Navegación
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { href: "#cronogramas", label: "Cronograma general" },
                { href: "#cronogramas", label: "Cronograma por manifestación" },
                { href: "#galeria", label: "Galería" },
                { href: "#paises", label: "Países participantes" },
              ].map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="text-cream/60 transition-colors hover:text-cream">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-ficcua-gold">
              Naciones
            </h4>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {COUNTRIES.map((c) => (
                <li key={c.code} className="flex items-center gap-2 text-cream/60">
                  <img src={c.flag} alt="" className="h-3.5 w-5 rounded-sm object-cover ring-1 ring-white/10" />
                  {c.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-sm text-cream/40 md:flex-row">
          <p>© 2026 FICCUA · Universidad Nacional Autónoma de Honduras</p>
          <p>XIII Festival Interuniversitario Centroamericano de la Cultura y el Arte</p>
        </div>
      </div>
    </footer>
  );
}
