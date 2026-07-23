// Piezas decorativas compartidas, armadas con la paleta del logo FICCUA.

const PALETTE = ["#D13B5E", "#E8B33E", "#4FA84E", "#2F57C6", "#E8843E"];

// Lluvia suave de confeti — determinista para que no se reordene en cada render.
export function Confetti({ count = 40, className = "" }) {
  const pieces = Array.from({ length: count }, (_, i) => ({
    color: PALETTE[i % PALETTE.length],
    size: 5 + (i % 6) * 1.4,
    // Paso de ángulo áureo: reparte las piezas parejo en todo el ancho sin
    // depender del count. Con i * 2.37 llegaba solo a la mitad con count 22 y
    // dejaba vacía la mitad derecha de la banda.
    left: (i * 61.803) % 100,
    delay: (i * 0.19) % 6,
    duration: 5 + (i % 5) * 0.8,
    shape: i % 3,
  }));

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true" style={{ containerType: "size" }}>
      {pieces.map((p, i) => (
        <span
          key={i}
          className="absolute top-0 block"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: p.shape === 0 ? "50%" : "2px",
            transform: p.shape === 1 ? "rotate(45deg)" : "none",
            animation: `confetti-fall ${p.duration}s linear ${p.delay}s infinite`,
            opacity: 0.85,
          }}
        />
      ))}
    </div>
  );
}

// Papel picado — tira de banderines triangulares.
export function PapelPicado({ className = "", count = 34 }) {
  return (
    <div className={`flex w-full overflow-hidden ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="h-9 flex-1 animate-float-y-alt"
          style={{
            background: PALETTE[i % PALETTE.length],
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            animationDelay: `${(i % 6) * 0.25}s`,
            animationDuration: "5.5s",
            opacity: 0.9,
          }}
        />
      ))}
    </div>
  );
}
