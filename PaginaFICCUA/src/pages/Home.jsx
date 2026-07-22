import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { CronogramaLinks } from "../components/CronogramaLinks";
import { Stats } from "../components/Stats";
import { Carousel } from "../components/Carousel";
import { Hologram } from "../components/Hologram";
import { Countries } from "../components/Countries";
import { ClosingCTA } from "../components/ClosingCTA";
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
        {/* 4 · Contadores */}
        <Stats />
        {/* 5 · Carrusel de fotos */}
        <Carousel />
        {/* 6 · Logo FICCUA en 3D */}
        <Hologram />
        {/* 7 · Banderas de los 8 países */}
        <Countries />
        {/* 8 · Banda de cierre — enlaza hacia el footer en vez de terminar en seco */}
        <ClosingCTA />
      </main>
      <Footer />
      {/* Cenefa decorativa abajo del todo de la página */}
      <CenefaBloques />
    </>
  );
}
