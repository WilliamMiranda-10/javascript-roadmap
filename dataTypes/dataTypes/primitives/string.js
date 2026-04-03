// String é um tipo de dado para texto,
// pode ser escrita entre aspas 'simples' ou "duplas",
// Um numero entre aspas pode ser considerado uma string.
// É possivel concatenar strings com o +

let nome = "William";
let sobrenome = "Miranda"

console.log(nome)
console.log(sobrenome)

let nomeCompleto = nome + " " + sobrenome // <== Concatenação

console.log(nomeCompleto)
console.log(typeof(nomeCompleto))  //string

console.log(typeof '5622') //string

// console.log("Olá meu nome é "William"") // ERRO
console.log("Olá meu nome é 'William'") // CORRETO

console.log("Olá meu nome é " + nome) //Concatena
console.log("Olá meu nome é", nome) 