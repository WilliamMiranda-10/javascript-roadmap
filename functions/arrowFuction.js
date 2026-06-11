// Default --> padrao

// function isAdult(age){
//     return age >= 18
// }

// console.log(isAdult(18))

// Arrow functions
// Ex: 01
const isAdult = (age) => age >= 18;

console.log(isAdult(19));

// Ex: 02

const getRandomNumber = () => Math.random();
console.log(getRandomNumber());

const sum = (a, b) => a + b;
console.log(sum(56, 22));


// Ex: 03
const colores = ["Azul", "Amarelo", "Verde", "Marrom"];

const getColors = (colors) => colors.filter((color)=> color)

console.log(getColors(colores))