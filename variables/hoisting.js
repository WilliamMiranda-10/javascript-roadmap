//HOISTING COM VAR
var nome 
console.log(nome) // undefined
nome = 'William'

//HOISTING COM LET 

console.log(idade) // Erro
let idade = 30 


//HOISTING COM FUNÇÃO
lerNumero(10) //posso chamar a função antes

function lerNumero(num){
    console.log(num)
}