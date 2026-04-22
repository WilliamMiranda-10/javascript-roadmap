// //  condicao ? valorSeTrue : valorSeFalse

// // Ex: 01

// const age = 8;

// const result = age >= 18 ? "Maior de idade" : "Menor de idade";

// console.log(result);

// // Ex: 02

// const number = 15;

// const typer = number % 2 === 0 ? "Par" : "Impar";

// console.log(typer);

// // Ex: 03 classificar usuário

// const user = {
//   name: "William",
//   age: 10,
//   email: "teste@gmail.com",
// };

// const statusLogin = user.age >= 18 ? "Acesso liberado" : "Acesso negado";

// console.log(statusLogin);

// //Ex: 04 Desconto

// const purchaseValue = 500;

// const finalValue =
//   purchaseValue >= 3000
//     ? purchaseValue * 0.85
//     : purchaseValue >= 2000
//     ? purchaseValue * 0.9
//     : purchaseValue >= 1000
//     ? purchaseValue * 0.95
//     : purchaseValue;

// console.log(`Valor total R$ ${purchaseValue.toFixed(2)}`);

// console.log(
//   purchaseValue < 1000
//     ? "Não tem desconto"
//     : `Valor com desconto: R$ ${finalValue.toFixed(2)}`
// );

// // Ex : 04 validar usuário

// const user1 = {
//   name: "William",
//   email: "teste@gmail.com",
//   age: 10,
// };

// const isValid =
//   user1.name && user1.email && user1.age >= 18
//     ? "Usuário valido"
//     : "Usuário inválido";

// console.log(isValid); //Usuário inválido

// // Ex: 05 sistema login com tentativas

const correctPassword = "1234";
const attempts = [
  "1111", //0
  "2222", //1
  "6958", //2
  "5699", //3
  "1234", //4
  "6948", //5
  "1844", //6
  "4456", //7
];

let success = false;
let errors = 0;
let blocked = false;

for (let i = 0; i < attempts.length; i++) {
  if (attempts[i] === correctPassword) {
    success = true;
    break;
  } else {
    errors++;
  }

  if (errors >= 2) {
    blocked = true;
    break;
  }
}

const result = success
  ? "Login sucesso"
  : blocked
  ? "Login bloqueado"
  : "Tente novamente";

console.log(result);
