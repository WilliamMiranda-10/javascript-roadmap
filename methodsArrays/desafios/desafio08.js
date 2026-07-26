const customers = [
  { id: 1, name: "William" },
  { id: 2, name: "Maria" },
];

const products = [
  { id: 1, name: "Notebook", price: 3500 },
  { id: 2, name: "Mouse", price: 150 },
  { id: 3, name: "Keyboard", price: 300 },
];

const sales = [
  { customerId: 1, productId: 1, quantity: 1 },
  { customerId: 1, productId: 2, quantity: 2 },
  { customerId: 2, productId: 3, quantity: 1 },
];

const result = customers.map((customer) => {
  const customerSales = sales.filter((sale) => sale.customerId === customer.id);
  const totalPrice = customerSales.reduce((acc, sale) => {
    const productSales = products.find(
      (product) => product.id === sale.productId
    );
    const price = productSales.price * sale.quantity;
    return acc + price;
  }, 0);
  return {
    customer: customer.name,
    products: customerSales.length,
    totalSpent: totalPrice,
  };
});

console.log(result);

// [
//     {
//       customer: "William",
//       products: 2,
//       totalSpent: 3800,
//     },
//     {
//       customer: "Maria",
//       products: 1,
//       totalSpent: 300,
//     },
//   ]
