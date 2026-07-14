//Esse método é muito útil quando você não quer o elemento, apenas quer saber se ele existe.
const products = [
  { id: 1, name: "Notebook", stock: 5 },
  { id: 2, name: "Mouse", stock: 0 },
  { id: 3, name: "Monitor", stock: 10 },
];

const hasOutOfStock = products.some((product) => product.stock === 0);

console.log(hasOutOfStock);

const users = [
  { id: 1, name: "William", active: true },
  { id: 2, name: "Maria", active: false },
  { id: 3, name: "João", active: true },
];

const hasInactiveUsers = users.some((user) => !user.active);

if (hasInactiveUsers) {
  console.log("Existem usuários inativos.");
} else {
  console.log("Todos os usuários estão ativos.");
}
