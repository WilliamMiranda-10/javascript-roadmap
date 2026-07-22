// Desafio #004 — Relatório de Pedidos

const orders = [
  { id: 1, customer: "William", status: "paid", total: 300 },
  { id: 2, customer: "Maria", status: "pending", total: 150 },
  { id: 3, customer: "William", status: "paid", total: 200 },
  { id: 4, customer: "João", status: "cancelled", total: 100 },
  { id: 5, customer: "Maria", status: "paid", total: 250 },
  { id: 6, customer: "William", status: "pending", total: 400 },
];

const paidOrdersReport = orders
  .filter((order) => order.status === "paid")
  .reduce((acc, order) => {
    if (!acc[order.customer]) {
      acc[order.customer] = { totalPaid: 0, paidOrders: 0 };
    }
    acc[order.customer].totalPaid += order.total;
    acc[order.customer].paidOrders += 1;
    return acc
  }, {});


const result = Object.entries(paidOrdersReport).map(([customer, data]) => ({customer, ...data}))

console.log(result)

