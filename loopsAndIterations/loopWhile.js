//fatorial de 5

let n = 5;
let fat = 1;

while (n >= 1) {
  fat = fat * n;
  n--; //4 , 3, 2, 1
}

console.log(fat); //120

// Crie um programa que mostre os números de 1 até 10 usando while.
let num = 1;

while (num <= 10) {
  console.log(num);
  num++;
}

//Peça números ao usuário (ou simule com um array) e vá somando até que ele digite 0.

let numbers = [12, 35, 23, 36, 95, 156, 659, 22, 0, 33, 17];

let sum = 0;
let i = 0
while(numbers[i] != 0){
    sum += numbers[i]
    i++
}

console.log(sum)

console.log(numbers[5])

