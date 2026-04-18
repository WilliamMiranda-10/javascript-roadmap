// //usando o break

let n = 0;
let max = 1000;

while (n < max) {
  console.log("número:", n);
  if (n > 10) {
    break;
  }
  n++;
}

console.log("Fim do programa");

// // usando o continue

let pairs = 0;

for (let i = 0; i < max; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  pairs++;
}

console.log(`${pairs} numeros é par`);

// // parar o loop somente quando encontrar 9

const numbers = [1, 3, 5, 6, 7, 9, 8, 11, 12, 14, 15, 17];
let i = 0;

while (i < numbers.length) {
  console.log(numbers[i]);
  if (numbers[i] == 9) {
    console.log("numero:", numbers[i]);
    break;
  }

  i++;
}

// Mostre apenas os números ímpares
const numbers2 = [1, 3, 4, 5, 6, 7, 9, 8, 10, 11, 12, 14, 15, 17];
let impares = [];

for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] % 2 == 0) {
    continue;
  }
  impares.push(numbers2[i]);
}
console.log("Numeros impares", impares);

//Simular umas tentativas de login, quando acertar, pare o loop.

const password = "6842";
const passwordTentative = [
  "6958", //0
  "5894", //1
  "8693", //2
  "7849", //3
  "6842", //4
  "1002", //
  "1455", //
];
let index = 0;
let count = 1;

while (index < passwordTentative.length) {
  if (passwordTentative[index] === password) {
    console.log("Senha correta: ", passwordTentative[index]);

    break;
  }
  count++;
  index++;
}

console.log(count);
