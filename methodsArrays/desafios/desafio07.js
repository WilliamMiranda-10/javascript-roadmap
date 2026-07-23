const categories = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Books" },
  { id: 3, name: "Games" },
];

const products = [
  { id: 101, name: "Notebook", categoryId: 1, price: 3500 },
  { id: 102, name: "Mouse", categoryId: 1, price: 150 },
  { id: 103, name: "Clean Code", categoryId: 2, price: 120 },
  { id: 104, name: "JavaScript", categoryId: 2, price: 90 },
  { id: 105, name: "PlayStation 5", categoryId: 3, price: 4500 },
];

const result = categories.map((category) => {
  const categoriesProducts = products.filter(
    (product) => product.categoryId === category.id
  );

  const totalPrice = categoriesProducts.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  const averagePrice = totalPrice / categoriesProducts.length;

  return {
    category: category.name,
    products: categoriesProducts.length,
    averagePrice,
  };
});

console.log(result);
