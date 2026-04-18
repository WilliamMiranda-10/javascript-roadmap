const number = 100.66;

console.log(Number.isNaN(number)); // false, verifica se o valor É NaN (Not a Number)

console.log(Number.isInteger(number)); // false, pois nao e um numero inteiro

console.log("Inteiro:", parseInt(15.6648)); // 15
// remove a parte decimal e retorna a parte inteira

console.log("Float", parseFloat("12.662")); //12.662
//converte para float

const values = 150.92199964;

console.log(values.toFixed(2)); // 150.92
// formata o número com X casas decimais (retorna string)

console.log(values.toString()); // 150.92199964
//transforma um numero em uma string

console.log(values.toPrecision(4)); // 150.9
// define o quantidade digitos e transforma em string

console.log(Number.MAX_VALUE); //1.7976931348623157e+308 -> maior numero que o js suporta
console.log(Number.MIN_VALUE);//5e-324 menor numero positivo maior que o zero

console.log(Number.isFinite(values));// verifica se o número é finito (não é Infinity ou -Infinity)
