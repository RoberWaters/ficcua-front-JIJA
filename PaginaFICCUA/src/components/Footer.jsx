import logo from "../assets/logo-ficcua.png";
import logoVoae from "../assets/logo-voae.png";
import logoUnah from "../assets/logo-unah.png";

export function Footer() {
  return (
    <footer className="relative bg-cream text-ink">
      {/* Los créditos y la tira de logos van en filas separadas: los tres logos
          juntos miden ~540px, así que compartir fila con el texto los obligaba a
          encogerse (los <img> en flex encogen por defecto) y se veían aplastados. */}
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-8 text-center text-sm text-ink/45">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <img src={logo} alt="FICCUA" className="h-20 w-auto shrink-0 object-contain" />
          <img src={logoVoae} alt="VOAE" className="h-20 w-auto shrink-0 object-contain" />
          <img src={logoUnah} alt="UNAH" className="h-20 w-auto shrink-0 object-contain" />
        </div>
        <div className="flex flex-col items-center gap-1 md:flex-row md:gap-6">
          <p>© 2026 FICCUA · Universidad Nacional Autónoma de Honduras</p>
          <p>XIII Festival Interuniversitario Centroamericano de la Cultura y el Arte</p>
        </div>
      </div>
    </footer>
  );
}
