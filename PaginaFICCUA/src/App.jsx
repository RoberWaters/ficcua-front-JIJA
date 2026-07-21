import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { CronogramaManifestacion } from "./pages/CronogramaManifestacion";
import { NotFound } from "./pages/NotFound";

// Client-side navigation keeps scroll position by default — reset it on every
// route change so a new page always opens at the top.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
