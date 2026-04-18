for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    console.log(`${i} é par`);
  } else {
    console.log(`${i} é Impar`);
  }
}

const numbers = [12, 25, 36, 15, 233, 1555, 77];

for (num in numbers) {
  // "for in" pega o indice de cada elemento
  console.log(num); // 0 1 2 3 4 5 6

  console.log(numbers[num]); // 12 25 36 15 233 1555 77
  // retorna o valor de cada indice semelhante ao "for of"
}

for (num of numbers) {
  console.log(num); // retorna o valor do array => 12 25 36 15 233 1555 77
}

for (let num = 0; num < numbers.length; num++) {
  console.log(numbers[num]); 
  //neste caso, fazendo mesmo que o "for of " pegando somente os valores 12 25 36 15 233 1555 77
}
