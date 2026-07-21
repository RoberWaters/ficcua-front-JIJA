import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { CronogramaLinks } from "../components/CronogramaLinks";
import { LogoSection } from "../components/LogoSection";
import { Stats } from "../components/Stats";
import { Carousel } from "../components/Carousel";
import { Hologram } from "../components/Hologram";
import { Countries } from "../components/Countries";
import { Footer } from "../components/Footer";
import { CenefaBloques } from "../components/CenefaBloques";

export function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1 · Encabezado */}
        <Hero />
        {/* 2 y 3 · Cronograma general y por manifestación */}
        <CronogramaLinks />
        {/* 4 · Logo FICCUA */}
        <LogoSection />
        {/* 5 · Contadores */}
        <Stats />
        {/* 6 · Carrusel de fotos */}
        <Carousel />
        {/* 7 · Holograma 3D */}
        <Hologram />
        {/* 8 · Banderas de los 8 países */}
        <Countries />
      </main>
      <Footer />
      {/* Cenefa decorativa abajo del todo de la página */}
      <CenefaBloques />
    </>
  );
}
