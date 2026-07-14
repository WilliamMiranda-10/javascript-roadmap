const products = [
  { id: 1, name: "Notebook", price: 3500, stock: 5 },
  { id: 2, name: "Mouse", price: 120, stock: 0 },
  { id: 3, name: "Monitor", price: 900, stock: 10 },
  { id: 4, name: "Teclado", price: 250, stock: 0 },
];



const productId = products.find((product) => product.id === 10);
console.log(productId);

const users = [
  { id: 1, name: "William", active: true },
  { id: 2, name: "Maria", active: false },
  { id: 3, name: "João", active: true },
];

const getUser = (name) => {
  return users.find((user) => user.name === name);
};

const user = getUser("Maria");

if (!user) {
  console.log("Usuário não encontrado!");
} else {
  console.log(user);
// }


