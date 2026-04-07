// 🌍 ESCOPO GLOBAL (Global Scope)
let nome = "William";
let idade = 30;
const cpf = "662.333.555-00";

console.log(nome); // funciona normalmente

//  ESCOPO DE FUNÇÃO (Function Scope)
function showCarModel() {
  let carName = "VW Voyage";
  console.log(carName); // acessível apenas dentro da função
}

showCarModel();

// console.log(carName);  erro - não existe fora da função

//  ESCOPO DE BLOCO (Block Scope)
{
  let time = "Flamengo";
  // let e const só existem dentro do bloco
}

// console.log(time); erro

//  comportamento do VAR
{
  var produto = "Teclado";
  // var ignora escopo de bloco
}

// funciona mas não recomendado
console.log(produto);