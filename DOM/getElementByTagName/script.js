const dc1 = document.getElementById("c1");
const dc2 = document.getElementById("c2");
const dc3 = document.getElementById("c3");
const dc4 = document.getElementById("c4");
const dc5 = document.getElementById("c5");
const dc6 = document.getElementById("c6");

const arrayElement = [dc1, dc2, dc3, dc4, dc5, dc6];
console.log(arrayElement);

const collection = [...document.getElementsByTagName("div")];
// antes -> HTMLcollection/ com spread[...] tranaforma em array

console.log(collection);

collection.map((e) => {
  if (e.innerHTML === "CSS") {
    e.innerHTML = "C++";
  }
});

// Exercício 01 imprimir no console os titulos

const title = document.getElementsByTagName("h1");

console.log(title[0].textContent);
console.log(title[1].textContent);
console.log(title[2].textContent);

// Exercício 02 alterar texto do paragrafo 2 para Uva

// const fruits = document.getElementsByTagName("p");
// fruits[1].innerHTML = "Uva";

// Exercício 3 imprimir 1 - javascript etc

const element = document.getElementsByTagName("li");

for (let i = 0; i < element.length; i++) {
  console.log(`${i + 1} - ${element[i].innerHTML}`);
}

// Exercicio 4 deixar todos os parágrafos em maiúsculas

let upperText = document.getElementsByTagName("p");

for (let i = 0; i < upperText.length; i++) {
  upperText[i].textContent = upperText[i].innerHTML.toUpperCase();
}

// Exercicio 5, para adicionar um evento de clique em cada botão. Quando clicar, deve aparecer no console:

const btn = [...document.getElementsByTagName("button")];

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    console.log(`Clicou no botão ${i + 1}`);
  });
}

