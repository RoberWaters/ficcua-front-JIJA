import grupoFolclorico from "./assets/photos/grupo-folclorico.jpg";
import musico from "./assets/photos/musico.jpg";
import danzaNoche from "./assets/photos/danza-noche.jpg";
import garifuna from "./assets/photos/garifuna.jpg";
import pollera from "./assets/photos/pollera.jpg";
import danzaAfricana from "./assets/photos/danza-africana.jpg";

// Fondo del hero
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
  // Los rostros están en la franja superior; anclamos el recorte hacia arriba
  // para que no se corten las caras en pantallas anchas (crop vertical).
  { src: danzaAfricana, title: "Ritmo y raíz afro", caption: "Energía, telas y percusión", position: "50% 20%" },
];

// Sección 5 — Contadores (valores placeholder, a conectar con datos reales)
export const STATS = [
  { value: 12, suffix: "", label: "Universidades", accent: "var(--color-ficcua-red)" },
  { value: 940, suffix: "+", label: "Artistas", accent: "var(--color-ficcua-gold)" },
  { value: 6, suffix: "", label: "Manifestaciones", accent: "var(--color-ficcua-green)" },
  { value: 11, suffix: "", label: "Escenarios", accent: "var(--color-ficcua-blue)" },
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
  { code: "do", name: "República Dominicana", flag: flagDo },
];

// Página — Cronograma por manifestación: las 6 disciplinas del festival.
// `pdf` apunta a un archivo de `public/cronogramas/`, que se sirve tal cual y
// la tarjeta abre en una pestaña nueva. Música y Literatura siguen en null a
// propósito: aún no existe su programación y la tarjeta queda deshabilitada.
export const MANIFESTACIONES = [
  {
    key: "danza",
    name: "Danza",
    accent: "var(--color-ficcua-red)",
    desc: "Trajes típicos, coreografías folclóricas y ritmos que narran la historia de cada pueblo.",
    foto: grupoFolclorico,
    pdf: "/cronogramas/danza.pdf",
  },
  {
    key: "teatro",
    name: "Teatro",
    accent: "var(--color-ficcua-gold)",
    desc: "Puestas en escena universitarias que exploran identidad, comedia y drama.",
    foto: danzaNoche,
    pdf: "/cronogramas/teatro.pdf",
  },
  {
    key: "musica",
    name: "Música",
    accent: "var(--color-ficcua-green)",
    desc: "Conciertos, coros y ensambles con instrumentos tradicionales y contemporáneos.",
    foto: musico,
    pdf: null,
  },
  {
    key: "artes-visuales",
    name: "Artes Visuales",
    accent: "var(--color-ficcua-blue)",
    desc: "Pintura, escultura y fotografía expuestas por artistas de toda la región.",
    foto: pollera,
    pdf: "/cronogramas/artes-visuales.pdf",
  },
  {
    key: "cinematografia",
    name: "Cinematografía",
    accent: "#E8843E",
    desc: "Cortometrajes y muestras audiovisuales de estudiantes centroamericanos.",
    foto: danzaAfricana,
    pdf: "/cronogramas/cinematografia.pdf",
  },
  {
    key: "literatura",
    name: "Literatura",
    accent: "#6E43C6",
    desc: "Lecturas, recitales de poesía y presentaciones de obras literarias.",
    foto: garifuna,
    pdf: null,
  },
];

// Secciones 2 y 3 — Cronograma General y Componente Académico abren un PDF
// directo (`pdf: null` hasta que exista el archivo real); Cronograma por
// Manifestación sigue llevando a su propia página.
export const CRONOGRAMAS = [
  {
    pdf: null,
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
  {
    pdf: null,
    kicker: "Charlas y conferencias",
    title: "Componente Académico",
    desc: "Más de 10 charlas a cargo de expositores que profundizan en un tema particular ligado a cada manifestación artística.",
    accent: "var(--color-ficcua-gold)",
    tint: "linear-gradient(135deg, #E8B33E, #4FA84E)",
  },
];
