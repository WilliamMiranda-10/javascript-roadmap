const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const btn = document.querySelector("#btn_copiar");
const todosCursos = [...document.querySelectorAll(".curso")];

todosCursos.forEach((curso) => {
  curso.addEventListener("click", (evt) => {
    const el = evt.target;

    el.classList.toggle("selecionado");
    if (el.parentElement === caixa1) {
      btn.textContent = "Mover";
    } else if (el.parentElement === caixa2) {
      btn.textContent = "Remover";
    }
  });
});

btn.addEventListener("click", () => {
  const cursoSelecionados = document.querySelectorAll(".selecionado");

  cursoSelecionados.forEach((curso) => {
    if (btn.textContent === "Mover") {
      caixa2.appendChild(curso);
    } else if (btn.textContent === "Remover") {
      caixa1.appendChild(curso);
    }

    curso.classList.remove("selecionado");
  });
  btn.textContent = "Mover";
});
