const product = {
  name: "Notebook",
  price: 3500,
};

// const { name: productName } = product;
// const { price: productPrice } = product;

// const { name: productName, price: productPrice } = product;

// console.log(productName);
// console.log(productPrice);
// Notebook
// 3500

const { name, price: productPrice, stock = 0 } = product;

console.log(name);
console.log(productPrice);
console.log(stock);

const colors = ["red", "blue", "green"];

// const [a, b, c] = colors;
// console.log(a, b, c);

const numbers = [10, 20, 30, 40];

const [a, b, c] = numbers;

// console.log(a);
// console.log(b);
console.log(c);
