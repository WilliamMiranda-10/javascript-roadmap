//Podemos verificar o tipo de dados com (typeof)

//O Number é um tipo de dado para numeros
//Possui tres valores simbólicos: +Infinity, -Infinity, e NaN
// Não existe um tipo definido para numeros inteiros, todo numero é um Number

//Diferente de outras linguagens, não existe int, float, etc.Tudo é number.

let numero = 5;
console.log(numero);
console.log(typeof numero); //Number

const PI = 3.14; // mesmo tendo o ponto flutuante todo numero é um Number

console.log(PI);
console.log(typeof PI);

let textoComNumero = "500";
//==> verificar bem se realmente colocou number ou uma string
console.log(55 + textoComNumero); //somou com uma sring isso não pode acontecer
//O Js transforma o 55 em string e concatena,

//O NaN aparece quando você tenta fazer uma operação invalida, porem ele é um Number ex:
let resultado = "abc" * 5;
console.log("resposta:", resultado); //NaN (não é um numero)

let valor = parseInt("teste");
console.log(valor);

NaN === NaN; //false ==> NaN é diferente de tudo ate dele mesmo.

console.log(Number.isNaN(resultado)); // para validar

let y = 1 / 0;
console.log(y); //Infinity

let x = -1 / 0;
console.log(x); //-Infinity

//para verificar
console.log(Number.isFinite(x));

console.log(typeof +Infinity);
console.log(typeof -Infinity);
