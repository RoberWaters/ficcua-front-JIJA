// The uppercase, wide-tracked eyebrow label used above every section title —
// previously hand-copied per component with the same three utility classes.
export function Kicker({ children, color = "var(--color-ficcua-gold)", className = "" }) {
  return (
    <span className={`kicker ${className}`} style={{ color }}>
      {children}
    </span>
  );
}
