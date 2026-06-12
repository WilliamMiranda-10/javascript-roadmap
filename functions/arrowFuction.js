// Default --> padrao

// function isAdult(age){
//     return age >= 18
// }

// console.log(isAdult(18))

// Arrow functions
// Ex: 01
// para function trabalhamos com constante para que não possa ser repetido

// Ex: 03
//Sintaxe basica Arrow function
const sum = (a, b) => {
  return a + b;
};
console.log(sum(16, 225)); // 241

// Ex: 02
// Sintaxe Simplificada
const isAdult = (age) => age >= 18;
console.log(isAdult(19)); // true

//Ex: 03
//Parenteses vazio são obrigatórios mais de um parametro tanbem são obrigatórios

const getRandomNumber = () => Math.random();
console.log(getRandomNumber().toFixed(2)); // 0.61

// Ex: 04
const colors = ["Azul", "Amarelo", "Verde", "Marrom"];
const getColors = (colors) => colors.map((color) => color.length);
console.log(getColors(colors)); //[ 4, 7, 5, 6 ]

// Ex: 05 com function tradicional

const numbers = [23, 56, 8, 11, 2, 6, 7, 10, 5];
const square = numbers.map(function (number) {
  return number * number;
});
console.log(square); // [ 529, 3136, 64, 121,4, 36, 49, 100, 25 ]

// Exemplo com arrow function

const square1 = numbers.map((number) => number * number);
console.log(square1); // [ 529, 3136, 64, 121,4, 36, 49, 100, 25 ]

// Ex: 06, funções temporizadas tradicionais
setTimeout(function () {
  console.log("Executado após 1 segundo");
}, 5000);

setInterval(function () {
  console.log("Executado a cada 1 segundo");
}, 1000);

// Ex: 07, funções temporizadas com arrow function

setTimeout(() => {
  console.log("Executado após 1 segundo");
}, 1000);

setInterval(() => {
  console.log("Executado a cada 1 segundo");
}, 1000);

// Ex: 08
// Função tradicional
function fazerBolo() {
  console.log(arguments);
}
fazerBolo("Trigo", "Ovos", "Leite"); // [Arguments] { '0': 'Trigo', '1': 'Ovos', '2': 'Leite' }

// Arrow function
const fazerBolo2 = (...ingredientes) => {
  console.log(ingredientes);
};
fazerBolo2("Trigo", "Ovos", "Leite"); //[ 'Trigo', 'Ovos', 'Leite' ]
