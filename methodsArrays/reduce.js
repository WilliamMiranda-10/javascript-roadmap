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

const orders1 = [
  { id: 1, total: 250 },
  { id: 2, total: 100 },
  { id: 3, total: 350 },
  { id: 4, total: 80 },
];

const finalValue = orders1.reduce((acc, { total }) => acc + total, 0);

console.log(finalValue); //780

const employees = [
  { name: "William", salary: 3000 },
  { name: "Maria", salary: 4500 },
  { name: "João", salary: 2500 },
];

const totalSalary = employees.reduce(
  (acc, employee) => acc + employee.salary,
  0
);

console.log(totalSalary);

const users = [
  { name: "William", age: 30 },
  { name: "Maria", age: 28 },
  { name: "João", age: 42 },
];

const maiorIdade = users.reduce((acc, user) => {
  if (user.age > acc) {
    acc = user.age;
    return user.age;
  }
  return acc;
}, 0);

console.log(maiorIdade);

const age = users.reduce((acc, user) => (user.age > acc ? user.age : acc), 0);
console.log(age);

const usersCity = [
  { name: "William", city: "Jaru" },
  { name: "Maria", city: "Porto Velho" },
  { name: "João", city: "Jaru" },
  { name: "Ana", city: "Ji-Paraná" },
];

const groupCity = usersCity.reduce((acc, user) => {
  if (!acc[user.city]) {
    acc[user.city] = [];
    acc[user.city].push(user);
  } else {
    acc[user.city].push(user);
  }

  return acc;
}, {});

console.log(groupCity);
