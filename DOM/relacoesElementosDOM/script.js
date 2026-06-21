const caixa1 = document.querySelector("#caixa1");
const btn_c = [...document.querySelectorAll(".curso")];



console.log(caixa1.firstElementChild) // pega primeiro elemento
console.log(caixa1.lastElementChild) // pega ultimo elemento
console.log(caixa1.children) // todos elementos

console.log(document.getRootNode()) // nó raiz
console.log(btn_c[0].ownerDocument) // nó raiz


console.log(btn_c[0].nextElementSibling) 


