const c1 = document.getElementById("c1");
const todosCursos = document.querySelectorAll(".curso");

console.log(todosCursos);

todosCursos.forEach((el) => {
  el.addEventListener("click", (evt) => {
    const el = evt.target;
    el.classList.add("destaque");
    console.log(el.innerHTML + " foi clicado");
  });
});



c1.addEventListener("click", (evt) => {
  const el = evt.target;
  el.classList.add("destaque");
});
