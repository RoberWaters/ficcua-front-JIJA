import { GarlandModule } from "./BannerGarland";

const DEFAULT_COLORS = ["var(--color-ficcua-gold)", "var(--color-ficcua-green)", "var(--color-ficcua-blue)"];

// Jitter pseudoaleatorio determinista, sin Math.random: un valor realmente
// aleatorio acá daría markup distinto en servidor y cliente, y rompería la
// hidratación.
function jitter(seed, range = 3) {
  const x = Math.sin(seed * 999.7) * 10000;
  return (x - Math.floor(x)) * range * 2 - range;
}

const VB_W = 1000;
const MODULE_ASPECT = 100 / 60;

// Cuelga los módulos de la cenefa de una sola cuerda con caída, estilo papel
// picado. Todo se dibuja en un mismo viewBox, así que es responsive con un
// <svg width="100%"> y sin medir el contenedor desde JS.
export function HangingGarland({
  width = "100%",
  count = 9,
  moduleSize = 68,
  sag = 60,
  colors = DEFAULT_COLORS,
  ropeColor = "rgba(255,247,236,0.45)",
  className = "",
  style,
}) {
  const moduleWidth = moduleSize * MODULE_ASPECT;
  const topY = 22;
  const dip = topY + sag;
  const peakY = topY + sag / 2; // punto más bajo real de la curva cuadrática, en t=0.5
  const height = peakY + moduleSize + 16;
  const x0 = 28;
  const x1 = VB_W - 28;
  const midX = (x0 + x1) / 2;

  const bezierY = (t) => (1 - t) ** 2 * topY + 2 * (1 - t) * t * dip + t ** 2 * topY;

  const pendants = Array.from({ length: count }, (_, i) => {
    const t = (i + 0.5) / count;
    const x = x0 + (x1 - x0) * t;
    const y = bezierY(t);
    return {
      key: i,
      x,
      y,
      color: colors[i % colors.length],
      rot: jitter(i),
    };
  });

  return (
    <div className={`w-full ${className}`} style={style} aria-hidden="true">
      <svg
        viewBox={`0 0 ${VB_W} ${height}`}
        width={width}
        preserveAspectRatio="xMidYMin meet"
        className="block h-auto w-full"
        focusable="false"
      >
        <path
          d={`M ${x0} ${topY} Q ${midX} ${dip} ${x1} ${topY}`}
          fill="none"
          stroke={ropeColor}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {pendants.map((p) => (
          <g key={p.key} transform={`translate(${p.x - moduleWidth / 2}, ${p.y}) rotate(${p.rot}, ${moduleWidth / 2}, 0)`}>
            <line x1={moduleWidth / 2} y1="-8" x2={moduleWidth / 2} y2="4" stroke={ropeColor} strokeWidth="2" />
            <GarlandModule color={p.color} height={moduleSize} />
          </g>
        ))}
      </svg>
    </div>
  );
}
