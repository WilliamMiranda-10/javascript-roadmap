// Desafio #005 — Top 3 Clientes

const orders = [
  { id: 1, customer: "William", status: "paid", total: 300 },
  { id: 2, customer: "Maria", status: "pending", total: 150 },
  { id: 3, customer: "William", status: "paid", total: 200 },
  { id: 4, customer: "João", status: "paid", total: 800 },
  { id: 5, customer: "Maria", status: "paid", total: 250 },
  { id: 6, customer: "Carlos", status: "paid", total: 1200 },
  { id: 7, customer: "João", status: "paid", total: 300 },
  { id: 8, customer: "Pedro", status: "cancelled", total: 500 },
  { id: 9, customer: "Carlos", status: "paid", total: 500 },
];

const paidOrdersReport = orders
  .filter((order) => order.status === "paid")
  .reduce((acc, order) => {
    if (!acc[order.customer]) {
      acc[order.customer] = { totalPaid: 0 };
    }
    acc[order.customer].totalPaid += order.total;
    return acc;
  }, {});

const result = Object.entries(paidOrdersReport).map(([customer, data]) => {
  return { customer, ...data };
});

const topThreeClients = result
  .sort((a, b) => b.totalPaid - a.totalPaid)
  .slice(0, 3);

console.log(topThreeClients);
