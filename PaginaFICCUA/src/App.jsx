import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { CronogramaManifestacion } from "./pages/CronogramaManifestacion";
import { NotFound } from "./pages/NotFound";

// La navegación client-side conserva el scroll, así que lo reiniciamos en cada
// cambio de ruta. Si el destino trae hash, como "/#galeria" en los enlaces del
// footer de vuelta a Home, vamos a esa sección en vez de al tope.
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
