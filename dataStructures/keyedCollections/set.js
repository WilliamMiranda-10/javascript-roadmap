let products = new Set(["Monitor", "Carregador"]); //não aceita elementos repetidos

products.add("teclado");
products.add("Mouse");
products.add("Fone de ouvido");
products.add("teclado");
products.add("Mouse");

products.delete("teclado");


console.log(products);

products.forEach((element) => {
  console.log(element);
});

console.log(products.size);

console.log(products.keys())

products.clear()

