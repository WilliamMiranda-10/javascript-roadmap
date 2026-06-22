const caixa1 = document.querySelector("#caixa1");
const btn_c = [...document.querySelectorAll(".curso")];

console.log(caixa1.firstElementChild); // pega primeiro elemento
console.log(caixa1.lastElementChild); // pega ultimo elemento
console.log(caixa1.children); // todos elementos

const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySql"];

cursos.map((curso, chave) => {
  const novoElemento = document.createElement("div");
  novoElemento.innerHTML = curso;
  novoElemento.setAttribute("id", "c" + chave);
  novoElemento.setAttribute("class", "curso c1");

  const btn_lixeira = document.createElement("img");
  btn_lixeira.setAttribute("src", "./lixeira.png");
  btn_lixeira.setAttribute("class", "lixeira");

  btn_lixeira.addEventListener("click", (evt) => {
    console.log(evt.target.parentNode);
    caixa1.removeChild(evt.target.parentNode);
  });

  novoElemento.appendChild(btn_lixeira);
  caixa1.appendChild(novoElemento);
});
