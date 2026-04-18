let n = 10;

do {
  console.log("Olá, Boa noite");
  n++;
} while (n < 10);

console.log("Fim do programa");

//ex: 01
let indice = 1;

do {
  console.log(indice);
  indice++;
} while (indice < 6); //1 2 3 4 5

// ex: 02

const numbers = [5, 3, 2, 7, 0, 10];

let index = 0;
let sum = 0;

do {
    sum += numbers[index]
    index++
} while (numbers[index] !== 0);

console.log(sum)

// ex: 03

const password = "6842";
const loginPassword = [
  "6648",
  "6985",
  "4556",
  "3662",
  "6668",
  "6842",
  "9895",
  "4223",
];
let i = 0;
let login = false;

do {
  if (loginPassword[i] === password) {
    console.log("Login efetuado com sucesso!", loginPassword[i]);
    login = true;
    break;
  }
  i++;
} while (i < loginPassword.length && !login);

if (!login) {
  console.log("Senha incorreta!");
}
