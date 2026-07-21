import grupoFolclorico from "./assets/photos/grupo-folclorico.jpg";
import musico from "./assets/photos/musico.jpg";
import danzaNoche from "./assets/photos/danza-noche.jpg";
import garifuna from "./assets/photos/garifuna.jpg";
import pollera from "./assets/photos/pollera.jpg";
import danzaAfricana from "./assets/photos/danza-africana.jpg";

// Hero background
export { grupoFolclorico as HERO_IMG };

// Hero — galería de fondo (solo fotos horizontales)
export const HERO_GALLERY = [
  grupoFolclorico,
  danzaNoche,
  garifuna,
  pollera,
  musico,
  danzaAfricana,
];

// Sección 6 — Carrusel de fotos
export const CAROUSEL = [
  { src: grupoFolclorico, title: "Danzas folclóricas", caption: "Trajes típicos y tradición viva en escena" },
  { src: danzaNoche, title: "Danza bajo las luces", caption: "El folclor se enciende de noche" },
  { src: garifuna, title: "Herencia garífuna", caption: "Tambor y canto del Caribe centroamericano" },
  { src: pollera, title: "Color y movimiento", caption: "La pollera gira en cada compás" },
  { src: musico, title: "Música en vivo", caption: "Voces y cuerdas de la región" },
  { src: danzaAfricana, title: "Ritmo y raíz afro", caption: "Energía, telas y percusión" },
];

// Sección 5 — Contadores (valores placeholder, a conectar con datos reales)
export const STATS = [
  { value: 8, suffix: "", label: "Universidades", accent: "var(--color-ficcua-red)" },
  { value: 640, suffix: "+", label: "Artistas", accent: "var(--color-ficcua-gold)" },
  { value: 12, suffix: "", label: "Manifestaciones", accent: "var(--color-ficcua-green)" },
  { value: 6, suffix: "", label: "Escenarios", accent: "var(--color-ficcua-blue)" },
];

// Sección 8 — Banderas de los 8 países (miembros de CSUCA / FICCUA).
// Importamos solo los 8 SVG que usamos para no arrastrar todo flag-icons.
import flagGt from "flag-icons/flags/4x3/gt.svg";
import flagCu from "flag-icons/flags/4x3/cu.svg";
import flagSv from "flag-icons/flags/4x3/sv.svg";
import flagHn from "flag-icons/flags/4x3/hn.svg";
import flagNi from "flag-icons/flags/4x3/ni.svg";
import flagCr from "flag-icons/flags/4x3/cr.svg";
import flagPa from "flag-icons/flags/4x3/pa.svg";
import flagDo from "flag-icons/flags/4x3/do.svg";

export const COUNTRIES = [
  { code: "cr", name: "Costa Rica", flag: flagCr },
  { code: "hn", name: "Honduras", flag: flagHn },
  { code: "pa", name: "Panamá", flag: flagPa },
  { code: "gt", name: "Guatemala", flag: flagGt },
  { code: "sv", name: "El Salvador", flag: flagSv },
  { code: "ni", name: "Nicaragua", flag: flagNi },
  { code: "cu", name: "Cuba", flag: flagCu },
  { code: "do", name: "Rep. Dominicana", flag: flagDo },
];

// Secciones 2 y 3 — enlaces a otras páginas
export const CRONOGRAMAS = [
  {
    href: "/cronograma-general",
    kicker: "Programación completa",
    title: "Cronograma General",
    desc: "Explora día por día todas las presentaciones, horarios y sedes del festival.",
    accent: "var(--color-ficcua-red)",
    tint: "linear-gradient(135deg, #D13B5E, #E8843E)",
  },
  {
    href: "/cronograma-manifestacion",
    kicker: "Filtra por disciplina",
    title: "Cronograma por Manifestación",
    desc: "Danza, música, teatro, artes visuales y más — encuentra tu manifestación artística.",
    accent: "var(--color-ficcua-blue)",
    tint: "linear-gradient(135deg, #2F57C6, #6E43C6)",
  },
];
