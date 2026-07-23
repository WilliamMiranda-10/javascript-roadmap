const users = [
  { id: 1, name: "William" },
  { id: 2, name: "Maria" },
  { id: 3, name: "João" },
];

const orders = [
  { id: 101, userId: 1, total: 300 },
  { id: 102, userId: 2, total: 150 },
  { id: 103, userId: 1, total: 200 },
  { id: 104, userId: 3, total: 500 },
];

const result = users.map((user) => {
  const userOrders = orders.filter((order) => order.userId === user.id);
  const totalSpent = userOrders.reduce((acc, order) => {
    return acc + order.total;
  }, 0);

  return {
    id: user.id,
    name: user.name,
    orders: userOrders.length,
    totalSpent,
  };
});

console.log(result);
