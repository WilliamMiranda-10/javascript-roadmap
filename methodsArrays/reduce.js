// O reduce() pega vários valores e reduz tudo para um único resultado.
const words = ["Olá", "William", "!"];

const message = words.reduce((acc, word) => acc + " " + word, "");
console.log(message); //  Olá William !

const cart = [
  { product: "Notebook", price: 3500 },
  { product: "Mouse", price: 120 },
  { product: "Monitor", price: 900 },
];

const valueTotals = cart.reduce((acc, product) => acc + product.price, 0);
console.log(valueTotals); // 4520

// usando desestruturação:

const valueTotal = cart.reduce((acc, { price }) => {
  return acc + price;
}, 0);

console.log(valueTotal); // 4520

const orders = [
  { status: "paid" },
  { status: "pending" },
  { status: "paid" },
  { status: "cancelled" },
  { status: "paid" },
];

const qtdeOrders = orders.reduce((acc, order) => {
  acc[order.status] = (acc[order.status] || 0) + 1;
  return acc;
}, {});

console.log(qtdeOrders);

