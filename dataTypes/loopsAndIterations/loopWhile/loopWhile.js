//ex: 1, fatorial de 5

let n = 5;
let fat = 1;

while (n >= 1) {
  fat = fat * n;
  n--; //4 , 3, 2, 1
}

console.log(fat); //120

// ex: 2, contar de 1 a 10
let num = 1;

while (num <= 10) {
  console.log(num);
  num++;
}

//ex:3, somar os valores do array enquanto não for 0

let numbers = [12, 35, 23, 36, 95, 156, 659, 22, 0, 33, 17];

let sum = 0;
let i = 0;
while (numbers[i] != 0) {
  sum += numbers[i];
  i++;
}

console.log(sum); //1038

//ex: 4 somar todos os valores

let sum1 = 0;
let indice = 0;

while (indice < numbers.length) {
  sum1 += numbers[indice];
  indice++;
}

console.log("Valor total:", sum1);
