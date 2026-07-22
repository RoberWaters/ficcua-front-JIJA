import { Kicker } from "./Kicker";
import { Reveal } from "../Reveal";

// kicker + title + optional subtitle — the pattern every section header on
// the site repeats (Stats, Carousel, Countries, CronogramaLinks, PageHeader).
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
