import { useEffect, useRef, useState } from "react";

// Fires once when the element scrolls into view. Used for reveal + counters.
export function useInView({ threshold = 0.2, margin = "0px 0px -80px 0px" } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: margin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [inView, threshold, margin]);

  return [ref, inView];
}
