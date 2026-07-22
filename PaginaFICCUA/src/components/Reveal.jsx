import { motion, useReducedMotion } from "framer-motion";

// Entrance variants available via the `variant` prop — "fade" (default) is
// the original opacity-only reveal; the rest add real motion for sections
// that want more editorial punch.
const VARIANTS = {
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
  rise: { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.94 }, show: { opacity: 1, scale: 1 } },
  blur: { hidden: { opacity: 0, filter: "blur(10px)" }, show: { opacity: 1, filter: "blur(0px)" } },
};

// Wraps children and animates them in once on scroll. `delay` staggers
// siblings. Built on Framer Motion's `whileInView`, which — unlike the CSS
// `animation` shorthand — doesn't honor prefers-reduced-motion on its own,
// so it's checked explicitly here, same as the rest of the codebase does.
export function Reveal({ children, delay = 0, duration = 0.6, variant = "fade", className = "", style, as = "div" }) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;
  const v = VARIANTS[variant] ?? VARIANTS.fade;

  if (reduceMotion) {
    const Tag = as;
    return (
      <Tag className={className} style={style}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      variants={v}
      transition={{ duration, delay: delay / 1000, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </MotionTag>
  );
}
