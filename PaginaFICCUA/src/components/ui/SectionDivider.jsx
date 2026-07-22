// Organic wave edge dropped between sections so backgrounds blend instead of
// cutting hard at a flat rectangle. `fill` should match the section that
// follows (or precedes, when `flip` is set) so the curve reads as one piece.
export function SectionDivider({ fill = "var(--color-cream)", flip = false, className = "" }) {
  return (
    <div
      className={`pointer-events-none w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="h-14 w-full sm:h-20">
        <path d="M0 40 C 200 90 400 0 600 30 C 800 60 1000 10 1200 40 L1200 80 L0 80 Z" fill={fill} />
      </svg>
    </div>
  );
}
