let numeroGrande = 8915502332156131520120n 
// o n no final representa um bigint ou seija um numero muito grande
//maiores que do que o number consegue suportar

console.log(numeroGrande)

// o number tem um limite seguro ==> 9007199254740991

console.log(9007199254740991 + 1 === 9007199254740992) // true
console.log(900719925474099255 + 1 === 9007199254740992) // BUG 

// com o bigint isso nao acontece

let a = 9007199254740991n
let b = 554n


console.log(a + b) //9007199254741545n

