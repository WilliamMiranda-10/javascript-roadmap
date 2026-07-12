// const product = {
//   name: "Notebook",
//   price: 3500,
// };

// const { name: productName } = product;
// const { price: productPrice } = product;

// const { name: productName, price: productPrice } = product;

// console.log(productName);
// console.log(productPrice);
// Notebook
// 3500

// const { name, price: productPrice, stock = 0 } = product;

console.log(name);
console.log(productPrice);
console.log(stock);

const colors = ["red", "blue", "green"];

// const [a, b, c] = colors;
// console.log(a, b, c);

// const numbers = [10, 20, 30, 40];

// const [a, b, c] = numbers;

// console.log(a);
// console.log(b);
console.log(c);

function getUser() {
  return ["William", 30, "Backend"];
}

const [name, age, profession] = getUser();

console.log(name);
console.log(age);
console.log(profession);

function getProduct() {
  return ["Notebook", 3500, 10, "Dell"];
}

const [product, , , marca] = getProduct();

console.log(product);
// console.log(marca);

// const numbers = [10, 20, 30, 40, 50];
// const [first, ...rest] = numbers;

console.log(first, rest); //10 [ 20, 30, 40, 50 ]

const fruits = ["Maçã", "Banana"];

const moreFruits = [...fruits, "Laranja"];

console.log(moreFruits);

const user = {
  name: "William",
  age: 30,
};

const updatedUser = {
  ...user,
  age: 31,
  city: "Jaru",
};

console.log(updatedUser);

const productEletronic = {
  id: 10,
  name: "Notebook",
  price: 3500,
  costPrice: 2500,
  stock: 8,
};

const { costPrice, ...productDetails } = productEletronic;

console.log(productDetails);

// Desestruturação voçê tem array ou objeto e quer tirar informações dele

// O spread serve para copiar ou espalhar os valores de um array ou objeto.

function sum(...numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}

console.log(sum(10, 20, 30));

function max(...numbers) {
  let max = numbers[0];
  for (const number of numbers) {
    if (number > max) {
      max = number;
    }
  }

  return max;
}

const maxNumber = max(10, 80, 20, 15);

console.log(maxNumber);
