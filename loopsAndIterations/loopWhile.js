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

// ex: 5 retorna apenas os usuarios que tem idade maior que 18

const users = [
  { name: "Ana", age: 17 },
  { name: "Carlos", age: 22 },
  { name: "João", age: 19 },
];

let index = 0;

while (index < users.length) {
  if (users[index].age >= 18) {
    console.log(users[index].name); //Carlos João
  }
  index++;
}

// ex: 6; pegar o preço do produto

const products = [
  { name: "Arroz", price: 20 },
  { name: "Feijão", price: 10 },
  { name: "Macarrão", price: 5 },
];

let found = false;
let nameProduct = "Macarrão";
let ind = 0;

while (ind < products.length) {
  if (products[ind].name == nameProduct) {
    console.log(`Preço R$ ${products[ind].price.toFixed(2)}`); //Preço R$ 5.00
    found = true;
    break;
  }

  ind++;
}

if (!found) {
  console.log("Produto não encontrado");
}

// ex: 7, primeiro numero maior que 10 

const listNumbers = [5, 8, 12, 3, 20];
let numberIndex = 0;

while (numberIndex < listNumbers.length) {
  if (listNumbers[numberIndex] > 10) {
    console.log(listNumbers[numberIndex]);
    break;
  }
  numberIndex++;
}

//ex: 8 qual numero e duplicado

const numbersArray = [1, 2, 3, 4, 2, 5];

let numberInd = 0;
let hasDuplicate = false;

while (numberInd < numbersArray.length) {
  let numberIndex2 = numberInd + 1;

  while (j < numbersArray.length) {
    if (numbersArray[numberInd] === numbersArray[numberIndex2]) {
      console.log("Número duplicados:", numbersArray[numberInd]); // 2
      hasDuplicate = true;
      break; //interrompe o loop
    }
    j++;
  }
  if (hasDuplicate) {
    break;
  }
  numberInd++;
}

if (!hasDuplicate) {
  console.log("Não há números duplicados");
}

//ex: 9 verificar quantidade de itens por categoria

const vendas = [
  { produto: "Arroz", categoria: "Alimento" },
  { produto: "Sabão", categoria: "Limpeza" },
  { produto: "Feijão", categoria: "Alimento" },
];
