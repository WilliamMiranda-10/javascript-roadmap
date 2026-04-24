let x = 15;
let y = 10;

console.log(x != y); // true
console.log(x > y); // true
console.log(x < y); // false
console.log(x <= y); // false
console.log(x >= y); // true
console.log(x == y); // false
console.log(x === y); // false ->  verifica se o valor e o tipo sao iguais

// Ex: 01
const number = 15;

if (number > 0) {
  console.log("Número positivo"); // Número positivo
} else if (number < 0) {
  console.log("Número negativo");
} else {
  console.log("Zero");
}

// Ex: 02

let nota = 75;

if (nota >= 90) {
  console.log("A");
} else if (nota >= 70) {
  console.log("B");
} else if (nota >= 50) {
  console.log("C");
} else {
  console.log("Reprovado");
}

// Ex: 03

let sake = 1000;
let balance = 1200;

if (sake <= 0) {
  console.log("Valor inválido");
} else if (sake <= balance) {
  console.log("Saque realizado");
} else {
  console.log("Saldo insulficiente");
}
