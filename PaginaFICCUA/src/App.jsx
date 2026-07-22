import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { CronogramaManifestacion } from "./pages/CronogramaManifestacion";
import { NotFound } from "./pages/NotFound";

// Client-side navigation keeps scroll position by default — reset it on every
// route change so a new page always opens at the top. When the destination
// carries a hash (footer links back into a Home section, e.g. "/#galeria"),
// scroll to that section instead of overriding it back to the top.
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="grain min-h-screen bg-ink">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cronograma-manifestacion" element={<CronogramaManifestacion />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
