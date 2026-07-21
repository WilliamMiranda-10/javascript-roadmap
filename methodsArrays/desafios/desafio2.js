const products = [
  { id: 1, name: "Notebook", price: 3500, stock: 5 },
  { id: 2, name: "Mouse", price: 120, stock: 0 },
  { id: 3, name: "Monitor", price: 900, stock: 8 },
  { id: 4, name: "Teclado", price: 250, stock: 0 },
  { id: 5, name: "Headset", price: 400, stock: 12 },
];

// O frontend precisa mostrar os produtos disponíveis.

const result = products.map((product) => ({
  ...product,
  available: product.stock > 0,
}));

console.log(result);
