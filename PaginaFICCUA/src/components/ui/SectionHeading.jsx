import { Kicker } from "./Kicker";
import { Reveal } from "../Reveal";

// Kicker, título y subtítulo opcional — el patrón que repite todo encabezado de
// sección del sitio: Stats, Carousel, Countries, CronogramaLinks y PageHeader.
export function SectionHeading({
  kicker,
  kickerColor,
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
}) {
  const isLeft = align === "left";
  return (
    <Reveal className={`${isLeft ? "text-left" : "text-center"} ${className}`}>
      {kicker && <Kicker color={kickerColor}>{kicker}</Kicker>}
      <h2 className={`mt-3 text-display-2 ${light ? "text-cream" : "text-ink"}`}>{title}</h2>
      {subtitle && (
        <p
          className={`mt-3 text-lg ${light ? "text-cream/60" : "text-ink/55"} ${
            isLeft ? "max-w-xl" : "mx-auto max-w-xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
