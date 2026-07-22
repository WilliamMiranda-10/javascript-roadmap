const products = [
  { id: 1, name: "Notebook", stock: 5 },
  { id: 2, name: "Mouse", stock: 0 },
  { id: 3, name: "Monitor", stock: 8 },
];

const cart = [
  { id: 1, quantity: 2 },
  { id: 2, quantity: 1 },
];

const result = cart.map((item) => {
  const productCart = products.find((product) => product.id === item.id);
  const {id, name, stock } = productCart // <----desestruturação
  return {
    id: id,
    name: name,
    quantity: item.quantity,
    available: stock > 0,
  };
});

console.log(result);

// [
//     {
//       id: 1,
//       name: "Notebook",
//       quantity: 2,
//       available: true,
//     },
//     {
//       id: 2,
//       name: "Mouse",
//       quantity: 1,
//       available: false,
//     },
//   ]
