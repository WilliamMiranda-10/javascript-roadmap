// every() → verifica se todos os elementos atendem à condição.

const users = [
  { id: 1, active: true },
  { id: 2, active: true },
  { id: 3, active: true },
];

const allActive = users.every((user) => user.active);

console.log(allActive);

const orders = [
  { id: 1, paid: true },
  { id: 2, paid: true },
  { id: 3, paid: false },
  { id: 4, paid: true },
];

// some() verifica se apenas um elemento atende a condição
const hasUnpaidOrders = orders.some((order) => !order.paid);
console.log(hasUnpaidOrders);

// every() verifica se todos atende a condição
const allOrdersPaid = orders.every((order) => order.paid);
console.log(allOrdersPaid);

const numbers = [2, 4, 6, 8];
// Exite pelo menos um numero impar? false
const result1 = numbers.some((number) => number % 2 !== 0);
console.log(result1); // false

// Todos os numeros são par? true
const result2 = numbers.every((number) => number % 2 === 0);
console.log(result2); // true
