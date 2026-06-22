const caixa1 = document.querySelector("#caixa1");
const btn_c = [...document.querySelectorAll(".curso")];

console.log(caixa1.firstElementChild); // pega primeiro elemento
console.log(caixa1.lastElementChild); // pega ultimo elemento
console.log(caixa1.children); // todos elementos

const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySql"];

cursos.map((curso, chave) => {
  const novoElemento = document.createElement("div"); //cria o elemento div
  novoElemento.innerHTML = curso;
  novoElemento.setAttribute("id", "c" + chave); // adidiciona um id
  novoElemento.setAttribute("class", "curso c1"); // adiciona uma class

  const btn_lixeira = document.createElement("img"); // cria uma img como button
  btn_lixeira.setAttribute("src", "./lixeira.png"); // adiciona o src o caminho da img
  btn_lixeira.setAttribute("class", "lixeira"); // adiciona uma classe

  novoElemento.appendChild(btn_lixeira); // adiciona a lixeira dentro de cada div dos cursos que foi criada logo acima
  caixa1.appendChild(novoElemento); // adiciona as div dos cursos que foi criado dentro da caixa1

  btn_lixeira.addEventListener("click", (evt) => {
    console.log(evt.target.parentNode);
    caixa1.removeChild(evt.target.parentNode); // remove filhos da caixa1 ou seija os elementos div com cursos
  });
});
