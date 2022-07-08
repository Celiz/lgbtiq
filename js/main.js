const $$ = (el) => document.querySelectorAll(el);
const LINK = [
  "lesbian.html",
  "gays.html",
  "bisexual.html",
  "transexual.html",
  "intersexual.html",
  "queer.html",
];

$$(".s1 > .carousel-inner > .carousel-item > .img").forEach((el, index) => {
  el.addEventListener("click", () => {
    window.open(LINK[index], "_self"); // abre link en la misma pagina (self)
  });
});