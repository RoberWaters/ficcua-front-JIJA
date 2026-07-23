import { Link } from "react-router-dom";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-200 hover:-translate-y-1 active:scale-95";

const VARIANTS = {
  primary: "text-cream shadow-2xl",
  secondary: "border border-cream/25 bg-cream/10 text-cream backdrop-blur-sm hover:bg-cream/20",
  ghost: "border border-ink/15 bg-ink/5 text-ink backdrop-blur-sm hover:bg-ink/10",
};

const SIZES = {
  lg: "px-8 py-4 text-base",
  sm: "px-5 py-2.5 text-sm",
};

// CTA compartido — reemplaza al `<a className="rounded-full px-8 py-4...">` que
// estaba copiado a mano en Hero, Navbar y NotFound.
export function Button({ variant = "primary", size = "lg", to, href, className = "", style, children, ...props }) {
  const cls = `${BASE} ${SIZES[size] ?? SIZES.lg} ${VARIANTS[variant] ?? VARIANTS.primary} ${className}`;
  const finalStyle = variant === "primary" ? { background: "var(--surface-sunset)", ...style } : style;

  if (to) {
    return (
      <Link to={to} className={cls} style={finalStyle} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} style={finalStyle} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} style={finalStyle} {...props}>
      {children}
    </button>
  );
}
