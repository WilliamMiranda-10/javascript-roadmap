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

console.log(moreFruits)



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

