//arguments É um objeto semelhante a um array, acessível dentro de funções ,
//que contém os valores dos argumentos passados ​​para essa função.

//Ex: 01
// função tradicional
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 6, 5, 3, 48, 65, 32, 336, 64)); //560

// Ex 02
// arrow functions nao possuem arguments
// neste caso usa se rest parameters

// const test = () => {
//   console.log(arguments);
// };
// test(1, 6, 3, 5);

// rest parameters
const testSumNumbers = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};

console.log(testSumNumbers(12, 63, 148, 44, 887, 66)); // 1220
