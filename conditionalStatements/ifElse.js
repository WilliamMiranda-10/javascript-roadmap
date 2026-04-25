// ex: 1
let number = 10;

if (number % 2 === 0) {
  console.log(`${number} é par`);
} else {
  console.log(`${number} é impar`);
}

//ex 2
const age = 17;

if (age >= 18) {
  console.log(`idade: ${age}, maior de idade.`);
} else {
  console.log(`idade: ${age}, menor de idade`);
}

//ex: 3

const number2 = -55;

if (number2 > 0) {
  console.log(`${number2} é positivo`);
} else if (number2 === 0) {
  console.log(`${number2} é neutro`);
} else {
  console.log(`${number2} é negativo`);
}

//ex: 4

const nota = 9;

if (nota >= 7) {
  console.log(`Nota: ${nota}, APROVADO`);
} else if (nota < 7 && nota >= 5) {
  console.log(`Nota: ${nota}, RECULPERAÇÃO`);
} else {
  console.log(`Nota: ${nota}, REPROVADO`);
}

//Ex: 5

const purchaseValue = 16500;
let discount;

if (purchaseValue >= 3000) {
  discount = 15;
} else if (purchaseValue >= 1500) {
  discount = 10;
} else {
  discount = 5;
}

let valueDicount = purchaseValue * (discount / 100);
let endValue = purchaseValue - valueDicount;
console.log(
  `Valor total: R$ ${purchaseValue.toFixed(2)}
Valor Total com desconto: R$ ${endValue.toFixed(2)}`
);

