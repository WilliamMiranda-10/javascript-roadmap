const products = [
  { id: 1, name: "Notebook", price: 3500, stock: 5 },
  { id: 2, name: "Mouse", price: 120, stock: 0 },
  { id: 3, name: "Monitor", price: 900, stock: 10 },
  { id: 4, name: "Teclado", price: 250, stock: 0 },
];

const productsInStock = products.filter((product) => product.stock > 0);
console.log(productsInStock);

const nameProducts = products
  .filter((product) => product.stock > 0)
  .map((product) => product.name);
console.log(nameProducts);



const productsNamesInitialM = products
  .map((product) => product.name)
  .filter((name) => name.startsWith("T"));

console.log(productsNamesInitialM);
