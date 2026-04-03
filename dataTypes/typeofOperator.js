let numero = 10;
console.log(typeof numero); //number

let PI = 3.14;
console.log(typeof PI); //number

let nome = "William";
console.log(typeof nome); //string

let verdadeiro = true;
console.log(typeof verdadeiro); //boolean

let falso = false;
console.log(typeof falso); //boolean

let array = [1, 2, 3];
console.log(typeof array); //object , Em JavaScript, array é um tipo especial de objeto
//para verificar se e realmente um array faz assim:
console.log(Array.isArray(array)); //true ou seja sim e um array

let objeto = { idade: 30 };
console.log(typeof objeto); //object

function saudacao() {
  console.log("ola");
}
console.log(typeof saudacao); //function

let cidade = null;
console.log(typeof cidade); //object

let idade = NaN;
console.log(typeof NaN); //number

let infinito = Infinity;
console.log(typeof infinito); //number

let bigint = 1552n;
console.log(typeof bigint); //bigint ou seja numeros muito grande

let estado;
console.log(typeof estado); //undefined, variavel que nao foi definida com algum valor


console.log(typeof Symbol()) //symbol