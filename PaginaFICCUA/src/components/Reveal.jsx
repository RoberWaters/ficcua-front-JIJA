import { motion, useReducedMotion } from "framer-motion";

// Variantes de entrada, elegibles con la prop `variant`. "fade" es la original,
// solo opacidad; el resto agregan movimiento real.
const VARIANTS = {
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
  rise: { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.94 }, show: { opacity: 1, scale: 1 } },
  blur: { hidden: { opacity: 0, filter: "blur(10px)" }, show: { opacity: 1, filter: "blur(0px)" } },
};

// Envuelve a sus children y los anima una sola vez al entrar en viewport;
// `delay` escalona hermanos. Usa `whileInView` de Framer Motion, que a
// diferencia del shorthand `animation` de CSS no respeta prefers-reduced-motion
// por su cuenta, así que se verifica acá a mano.
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
