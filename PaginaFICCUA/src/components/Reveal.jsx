import { useInView } from "../hooks/useInView";

// Wraps children and fades/slides them in on scroll. `delay` staggers siblings.
export function Reveal({ children, delay = 0, className = "", style, as: Tag = "div" }) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
