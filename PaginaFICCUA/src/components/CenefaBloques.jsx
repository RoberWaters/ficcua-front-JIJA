import { useEffect, useRef, useState } from "react";

/* Paleta tomada de la imagen */
const MAGENTA = "#E4175C";
const COLORS = {
  amarillo: "#EAAF21",
  rosa: MAGENTA,
  verde: "#00A65A",
  azul: "#3A62B4",
};

/* Secuencia de colores de los bloques, como en el original */
const SEQ = [
  "amarillo", "rosa", "verde", "amarillo", "azul",
  "amarillo", "rosa", "verde", "azul",
  "amarillo", "rosa", "verde", "azul", "amarillo",
];

const TILE_W = 156;
const BLOCK_X = 4;
const BLOCK_W = 96;
const BLOCK_Y = 22;
const BLOCK_H = 78;
const BAR_XS = [116, 132, 148];
const H = 122;

/* Línea ondulada dibujada a mano (marco superior e inferior) */
function wavyPath(width, y, amp = 3.5, seg = 60, seed = 1) {
  let d = `M 0 ${y}`;
  for (let x = seg; x <= width; x += seg) {
    const k = Math.sin((x / seg) * 1.7 + seed) * amp;
    d += ` Q ${x - seg / 2} ${y + k} ${x} ${y - k * 0.35}`;
  }
  return d;
}

function Block({ x, color }) {
  const inner = [0, 1, 2, 3].map(
    (i) => BLOCK_Y + (BLOCK_H / 5) * (i + 1)
  );
  return (
    <g transform={`translate(${x} 0)`}>
      <rect
        x={BLOCK_X}
        y={BLOCK_Y}
        width={BLOCK_W}
        height={BLOCK_H}
        rx={7}
        fill={COLORS[color]}
      />
      {inner.map((y, i) => (
        <line
          key={i}
          x1={BLOCK_X + 11}
          y1={y}
          x2={BLOCK_X + BLOCK_W - 11}
          y2={y}
          stroke="#FFFFFF"
          strokeWidth={7}
          strokeLinecap="round"
        />
      ))}
    </g>
  );
}

function Bars({ x }) {
  return (
    <g transform={`translate(${x} 0)`}>
      {BAR_XS.map((bx, i) => (
        <line
          key={i}
          x1={bx}
          y1={BLOCK_Y + 6}
          x2={bx}
          y2={BLOCK_Y + BLOCK_H - 6}
          stroke={COLORS.amarillo}
          strokeWidth={7}
          strokeLinecap="round"
        />
      ))}
    </g>
  );
}

export function CenefaBloques({ altura = 48 }) {
  // Medimos el contenedor en vez de asumir un ancho fijo: con un tope de 2600px
  // la cenefa se quedaba corta en monitores ultrawide y dejaba franja negra.
  const contenedorRef = useRef(null);
  const [ancho, setAncho] = useState(2600);

  useEffect(() => {
    const el = contenedorRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entrada]) => setAncho(entrada.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Ancho que ocupa un tile a la altura final; repetimos los suficientes para
  // cubrir el contenedor (el exceso lo recorta su overflow).
  const tileRender = (TILE_W * altura) / H;
  const repeticiones = Math.ceil(ancho / tileRender) + 1;
  const width = TILE_W * repeticiones;

  return (
    <div ref={contenedorRef} className="w-full overflow-hidden bg-black" style={{ height: altura }}>
      <svg
        viewBox={`0 0 ${width} ${H}`}
        height={altura}
        preserveAspectRatio="xMinYMid meet"
        role="img"
        aria-label="Cenefa horizontal con bloques rayados de colores entre líneas onduladas magenta"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
      >
        <defs>
          <filter id="trazo" x="-3%" y="-15%" width="106%" height="130%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.02 0.05"
              numOctaves="2"
              seed="4"
              result="n"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="n"
              scale="2.6"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>

        <g filter="url(#trazo)">
          <path
            d={wavyPath(width, 10, 3.5, 70, 0.4)}
            fill="none"
            stroke={MAGENTA}
            strokeWidth={9}
            strokeLinecap="round"
          />

          {Array.from({ length: repeticiones }, (_, i) => (
            <g key={i}>
              <Block x={i * TILE_W} color={SEQ[i % SEQ.length]} />
              <Bars x={i * TILE_W} />
            </g>
          ))}

          <path
            d={wavyPath(width, H - 10, 3.5, 70, 2.1)}
            fill="none"
            stroke={MAGENTA}
            strokeWidth={9}
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}
