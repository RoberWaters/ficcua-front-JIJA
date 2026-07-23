import logo from "../assets/logo-ficcua.png";
import logoVoae from "../assets/logo-voae.png";
import logoUnah from "../assets/logo-unah.png";

export function Footer() {
  return (
    <footer className="relative bg-cream text-ink">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-center text-sm text-ink/45 md:flex-row md:text-left">
        <p>© 2026 FICCUA · Universidad Nacional Autónoma de Honduras</p>
        <p>XIII Festival Interuniversitario Centroamericano de la Cultura y el Arte</p>
        <div className="flex items-center gap-4">
          <img src={logo} alt="FICCUA" className="h-10 w-auto" />
          <img src={logoVoae} alt="VOAE" className="h-10 w-auto" />
          {/* Escudo UNAH — proporción casi cuadrada (1.53:1) frente a los otros dos
              logos apaisados, así que necesita más altura para pesar igual en la fila. */}
          <img src={logoUnah} alt="UNAH" className="h-24 w-auto" />
        </div>
      </div>
    </footer>
  );
}
