const main = document.querySelector("main");

// Habilita la profundidad 3D del contenedor para que las rotaciones se vean con perspectiva
gsap.set("main", { perspective: 650 });

// quickTo crea funciones optimizadas para animar la misma propiedad en cada frame del mousemove
// (evita crear un tween nuevo por evento, que sería costoso con eventos tan frecuentes)
const outerRX = gsap.quickTo(".logo-outer", "rotationX", { ease: "power3" });
const outerRY = gsap.quickTo(".logo-outer", "rotationY", { ease: "power3" });
const innerX = gsap.quickTo(".logo", "x", { ease: "power3" });
const innerY = gsap.quickTo(".logo", "y", { ease: "power3" });

main.addEventListener("pointermove", (e) => {
  // La tarjeta exterior rota (efecto "tilt"); el eje X del mouse controla rotationY y viceversa
  // porque rotar en Y mueve la tarjeta horizontalmente y en X verticalmente
  outerRX(gsap.utils.interpolate(15, -15, e.y / window.innerHeight));
  outerRY(gsap.utils.interpolate(-15, 15, e.x / window.innerWidth));
  // El logo interior se desplaza (parallax) en sentido contrario al tilt para dar sensación de profundidad
  innerX(gsap.utils.interpolate(-30, 30, e.x / window.innerWidth));
  innerY(gsap.utils.interpolate(-30, 30, e.y / window.innerHeight));
});

// Al salir el cursor, todo vuelve suavemente a su posición neutral
main.addEventListener("pointerleave", (e) => {
  outerRX(0);
  outerRY(0);
  innerX(0);
  innerY(0);
});
