//Type Casting (ou conversão de tipo)
//é quando você transforma um valor de um tipo para outro em linguagens de programação, como JavaScript.
//Ex:

//implicit --> a linguagem faz a conversão sozinha
let x = "5";
let y = 10;

let result = x + y;
//o javascript converte automaticamente o 10 para string e concatena

console.log(result); //510

console.log("56" - 6); //faz o contrário converte o "56" para número

//Explicit --> forço a conversão manual

//para number
let n1 = Number("5"); //coverti manualmente o 5 para Number
let n2 = 10;

console.log(n1 + n2); //15

console.log(parseFloat("55.6")); //55.6 typeof number

console.log(parseInt("10.5")); //10 typeof number

// para string

console.log(String(100)); //"100" typeof string

let number = 255;

console.log(number.toString()); // "255" typeof string

//para boolean

console.log(Boolean(1)); //true
console.log(Boolean(0)); //false
console.log(Boolean("")); //false
console.log(Boolean("oi")); //true

console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
