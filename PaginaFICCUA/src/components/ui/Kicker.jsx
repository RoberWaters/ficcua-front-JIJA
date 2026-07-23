// La etiqueta en mayúsculas y tracking amplio que va sobre cada título de
// sección; antes se copiaba a mano en cada componente con las mismas clases.
export function Kicker({ children, color = "var(--color-ficcua-gold)", className = "" }) {
  return (
    <span className={`kicker ${className}`} style={{ color }}>
      {children}
    </span>
  );
}
