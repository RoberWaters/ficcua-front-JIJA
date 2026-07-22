const DEFAULT_COLORS = ["var(--color-ficcua-gold)", "var(--color-ficcua-green)", "var(--color-ficcua-blue)"];

// One module = ascending stair-step glyph + white square-spiral (greco), the
// two motifs that repeat across the reference cenefa. Pure vector so it can
// be recolored and resized without ever showing a raster seam.
const MODULE_VB_W = 100;
const MODULE_VB_H = 60;

export function GarlandModule({ color, height, spiralColor = "#FFF7EC" }) {
  const width = height * (MODULE_VB_W / MODULE_VB_H);
  return (
    <svg
      viewBox={`0 0 ${MODULE_VB_W} ${MODULE_VB_H}`}
      width={width}
      height={height}
      className="block shrink-0"
      aria-hidden="true"
      focusable="false"
    >
      <polygon points="6,50 6,40 17,40 17,30 28,30 28,20 39,20 39,10 50,10 50,50" fill={color} />
      <path
        d="M60,16 H90 V44 H66 V22 H84 V36 H72"
        fill="none"
        stroke={spiralColor}
        strokeWidth="6"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

// Recreation of the fucsia cenefa (staircases + greco spirals) as scalable
// vector modules instead of a raster image, so it repeats losslessly at any
// width. `repeat` tiles the pattern edge to edge; set it to false for a
// single pass through `colors` instead of a full-bleed band.
export function BannerGarland({
  width = "100%",
  height = 56,
  rotation = 0,
  repeat = true,
  colors = DEFAULT_COLORS,
  background = "var(--color-ficcua-fucsia)",
  className = "",
  style,
}) {
  const moduleWidth = height * (MODULE_VB_W / MODULE_VB_H);
  const count = repeat ? Math.max(Math.ceil(4000 / moduleWidth), colors.length) : colors.length;
  const modules = Array.from({ length: count }, (_, i) => colors[i % colors.length]);

  const strip = (
    <div className="flex" style={{ width: "max-content" }}>
      {modules.map((color, i) => (
        <GarlandModule key={i} color={color} height={height} />
      ))}
    </div>
  );

  return (
    <div
      className={`overflow-hidden ${rotation ? "relative" : ""} ${className}`}
      style={{ width, height, background, ...style }}
      aria-hidden="true"
    >
      {rotation ? (
        <div
          className="absolute left-1/2 top-1/2"
          style={{ width: "140%", transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}
        >
          {strip}
        </div>
      ) : (
        strip
      )}
    </div>
  );
}
