const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const btn = document.querySelector("#btn_copiar");
const todosCursos = [...document.querySelectorAll(".curso")];

todosCursos.map((el) => {
  el.addEventListener("click", (evt) => {
    const el = evt.target;
    el.classList.toggle("selecionado");
  });
});


const cursosAdcionados = [...document.querySelectorAll(".adicionados")];
console.log(cursosAdcionados);

cursosAdcionados.map((el) => {
  el.addEventListener("click", (evt) => {
    const el = evt.target;
    el.classList.add("selecionado");
    caixa1.appendChild(el);
  });
});



btn.addEventListener("click", () => {
  const cursosSelecionados = [...document.querySelectorAll(".selecionado")];

  cursosSelecionados.map((el) => {
    el.classList.remove("selecionado");
    el.classList.add("adicionados");
    caixa2.appendChild(el);
  });
});
