const products = [
  { id: 1, name: "Notebook", price: 3500 },
  { id: 2, name: "Mouse", price: 120 },
  { id: 3, name: "Monitor", price: 900 },
];

const names = products.map((product) => product.name);

console.log(names);

const stockProduct = products.map((product) => ({
  name: product.name,
  inStock: true,
}));

console.log(stockProduct);

const productsEletronic = [
  { id: 1, name: "Notebook", price: 3500, stock: 5 },
  { id: 2, name: "Mouse", price: 120, stock: 0 },
  { id: 3, name: "Monitor", price: 900, stock: 10 },
];

const productsInStock = productsEletronic.map((product) => {
  return {
    id: product.id,
    name: product.name,
    available: product.stock > 0,
  };
});

console.log(productsInStock);

const test = products.map(({ name, price }) => {
  return `${name} - R$${price}`;
});

console.log(test);

const users = [
  {
    id: 1,
    name: "William",
    email: "william@email.com",
    password: "123456",
  },
  {
    id: 2,
    name: "Maria",
    email: "maria@email.com",
    password: "abcdef",
  },
];

const removePassword = users.map(
  ({ password, ...userWithoutPassword }) => userWithoutPassword
);

console.log(removePassword);
