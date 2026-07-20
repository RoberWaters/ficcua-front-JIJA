# Esqueleto — Página Principal FICCUA (Festival Internacional)

> Este documento es un mapa de estructura, no código. Define el orden de secciones, qué contiene cada una y qué es solo un enlace/placeholder, para que Claude Code lo use como guía al construir la página.

---

## Orden de secciones (de arriba hacia abajo)

### 1. Encabezado
- Título: **Festival Internacional** (FICCUA)
- Es la parte superior de la página, tipo hero/portada.

### 2. Cronograma General
- Tipo de elemento: **botón / tarjeta de enlace** (no contenido propio aquí).
- Texto sugerido: "Cronograma General"
- Acción: redirige a una página aparte (ej. `/cronograma-general`) donde vivirá el contenido real del cronograma.
- En la página principal solo va el punto de acceso.

### 3. Cronograma por Manifestación
- Tipo de elemento: **botón / tarjeta de enlace** (no contenido propio aquí).
- Texto sugerido: "Cronograma por Manifestación"
- Acción: redirige a otra página aparte (ej. `/cronograma-manifestacion`).
- Igual que la sección anterior, solo es el enlace de acceso.

### 4. Logo FICCUA
- Espacio reservado (placeholder) para el logo del evento.
- Centrado, tamaño destacado, imagen a definir más adelante.

### 5. Contadores (Stats)
- Fila/grid con 4 contadores, cada uno = número grande + etiqueta debajo:
  1. **# Universidades**
  2. **# Artistas**
  3. **# Manifestaciones**
  4. **# Escenarios**
- Los valores numéricos son datos a conectar después (por ahora placeholder).

### 6. Carrusel de Fotos
- Slider/carrusel con fotos del evento.
- Necesita: navegación (flechas o puntos), posibilidad de autoplay.
- Contenido real (fotos) se carga después; por ahora placeholder de imágenes.

### 7. Holograma 3D
- Espacio reservado para una pieza 3D/holograma del logo o del evento.
- Es un embed/visualización 3D, no una imagen estática.
- Placeholder por ahora (sin definir aún la tecnología del visor 3D).

### 8. Banderas de los 8 países
- Fila/grid con las banderas de los 8 países participantes.
- Cada bandera puede llevar el nombre del país debajo (opcional, a confirmar).

---

## Notas generales para Claude Code
- Las secciones **2 y 3 son solo enlaces** — su contenido detallado vive en páginas separadas que aún no se han definido en este documento.
- Las secciones **4, 6 y 7 son placeholders visuales** (logo, fotos, modelo 3D) — el contenido final se agregará después.
- La sección **5 (contadores)** necesita datos numéricos que probablemente vengan de una fuente dinámica más adelante.
- La sección **8** es una lista fija de 8 elementos (banderas de los países del festival).
- El orden de arriba hacia abajo debe respetarse tal como está listado.
