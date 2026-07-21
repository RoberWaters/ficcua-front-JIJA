import logo from "../assets/logo-ficcua.png";

export function Footer() {
  return (
    <footer className="relative bg-cream-200 text-ink">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div>
          <img src={logo} alt="FICCUA" className="h-14 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/55">
            Festival Interuniversitario Centroamericano de la Cultura y el Arte. Una nueva
            historia florece con el arte y la cultura.
          </p>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-ink/10 pt-8 text-sm text-ink/45 md:flex-row">
          <p>© 2026 FICCUA · Universidad Nacional Autónoma de Honduras</p>
          <p>XIII Festival Interuniversitario Centroamericano de la Cultura y el Arte</p>
        </div>
      </div>
    </footer>
  );
}
