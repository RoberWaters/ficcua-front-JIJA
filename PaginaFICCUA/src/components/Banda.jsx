import banda from "../assets/banda.png";

// Franja decorativa que se repite a lo ancho a una altura fija, para usarse
// como borde superior e inferior de la página.
export function Banda({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`w-full ${className}`}
      style={{
        height: "48px",
        backgroundImage: `url(${banda})`,
        backgroundRepeat: "repeat-x",
        backgroundSize: "auto 100%",
        backgroundPosition: "center",
      }}
    />
  );
}
