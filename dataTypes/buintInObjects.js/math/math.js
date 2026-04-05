//objects que ja vem prontos
//ex: Math, Number, Date, Strings, Array etc...

//ex Math:

console.log(Math.PI); //3.141592653589793

function raizQuadrada(num) {
  return Math.sqrt(num);
}

console.log(raizQuadrada(12)); //3.4641016151377544 Math.sqrt retorna a raiz quadrada

console.log(Math.random()); // 0.32815363570967304 retorna um numero alertório entre 0,1

const num1 = 12;
const num2 = 1;

console.log(Math.min(num1, num2)); // retorna o menor numero

console.log(Math.floor(3.7)); // 3
console.log(Math.floor(-3.7)); // -4
//retornando o maior número inteiro menor ou igual ao valor fornecido.
// Por exemplo, o resultado de FLOOR(3.7)seria 3, e FLOOR(-2.3) seria -3.

console.log(Math.trunc(25.66)); //25 
/* A função TRUNC, por outro lado, trunca um número para uma quantidade específica de casas decimais, 
removendo os dígitos excedentes sem arredondamento. Isso significa que TRUNC(3.7) resultaria em 3,
 e TRUNC(-2.3) também resultaria em -2. */


 