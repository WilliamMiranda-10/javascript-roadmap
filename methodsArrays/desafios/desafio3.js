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
  return {
    id: productCart.id,
    name: productCart.id,
    quantity: item.quantity,
    available: productCart.stock > 0,
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
