import logo from "../assets/logo-ficcua.png";

export function Footer() {
  return (
    <footer className="relative bg-cream text-ink">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-center text-sm text-ink/45 lg:flex-row lg:text-left">
        <img src={logo} alt="FICCUA" className="h-10 w-auto" />
        <p>© 2026 FICCUA · Universidad Nacional Autónoma de Honduras</p>
        <p>XIII Festival Interuniversitario Centroamericano de la Cultura y el Arte</p>
      </div>
    </footer>
  );
}
