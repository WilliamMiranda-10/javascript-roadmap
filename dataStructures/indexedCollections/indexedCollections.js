let frutas = ["Uva", "Banana", "Morango", "Manga", "Laranja", "Abacaxi"];

console.log(frutas[5]); //acessado pelo indice dos elementos
console.log(frutas[2]);

frutas[0] = "Abacate";
frutas[5] = "Melancia";
console.log(frutas); //[ 'Abacate', 'Banana', 'Morango', 'Manga', 'Laranja', 'Abacaxi' ]

const arr = [27, 16, 4, 8, 23, 11, 4, 6, 55, 89, 7, 9];

function analyseArray(arr) {
  let max = getMaxNumber(arr);
  let min = arr[0];
  let sum = sumArray(arr);

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (num < min) {
      min = num;
    }
  }

  return {
    max,
    min,
    sum,
  };
}

console.log(analyseArray(arr));

function getFirstLast(arr) {
  const first = arr[0];
  const last = arr[arr.length - 1];

  return [first, last];
}

console.log(getFirstLast(arr));

function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(sumArray(arr));

function countArray(arr) {
  let counter = 0;

  for (const num of arr) {
    counter++;
  }
  return counter;
}

console.log(countArray(arr));

function getMaxNumber(arr) {
  let max = arr[0];
  console.log(max);

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num > max) {
      max = num;
    }
  }
  return max;
}

console.log(getMaxNumber(arr));
