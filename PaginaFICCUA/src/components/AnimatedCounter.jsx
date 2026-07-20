import { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";

// Counts up from 0 to `value` once the element enters the viewport.
// Uses requestAnimationFrame with an ease-out curve so the number decelerates
// as it approaches the target — feels intentional, not linear.
export function AnimatedCounter({ value, suffix = "", duration = 1800 }) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value);
      return;
    }

    let raf;
    const start = performance.now();
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(easeOut(progress) * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {display.toLocaleString("es-HN")}
      {suffix}
    </span>
  );
}
