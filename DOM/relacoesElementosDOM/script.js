const caixa1 = document.querySelector("#caixa1");
const btn_c = [...document.querySelectorAll(".curso")];

console.log(caixa1.firstElementChild); // pega primeiro elemento
console.log(caixa1.lastElementChild); // pega ultimo elemento
console.log(caixa1.children); // todos elementos

console.log(document.getRootNode()); // nó raiz

console.log(btn_c[0].nextElementSibling);

if (caixa1.children.length > 0) {
  //Possui filhos
  console.log("Possui filhos");
} else {
  console.log("Não possui filhos");
}

console.log(// Não possui filhos
  btn_c[0].children.length > 0 ? "Possui filhos" : "Não possui filhos"
);


console.log((caixa1.firstElementChild.innerHTML = "Teste"));

console.log((caixa1.children[4].innerHTML = "Java"));

// Criando elementos na pagina

const novoElemento = document.createElement("div");
novoElemento.innerHTML = "React Native";
novoElemento.setAttribute("id", "c7");
novoElemento.setAttribute("class", "curso c1");
caixa1.appendChild(novoElemento);



const cursos = [
  "HTML",
  "CSS",
  "Javascript",
  "PHP",
  "React",
  "MySql",
  "ReactNative",
];

cursos.map((curso, chave) => {
  const novoElemento = document.createElement("div");
  novoElemento.innerHTML = curso;
  novoElemento.setAttribute("id","c"+ chave);
  novoElemento.setAttribute("class", "curso c1");
  caixa1.appendChild(novoElemento);
});
