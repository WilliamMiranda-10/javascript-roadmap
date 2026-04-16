// ex: 6; pegar o preço do produto

const products = [
  { name: "Arroz", price: 20 },
  { name: "Feijão", price: 10 },
  { name: "Macarrão", price: 5 },
];

let found = false;
let nameProduct = "Macarrão";
let i = 0;

while (i < products.length) {
  if (products[i].name == nameProduct) {
    console.log(`Preço R$ ${products[i].price.toFixed(2)}`); //Preço R$ 5.00
    found = true;
    break;
  }

  i++;
}

if (!found) {
  console.log("Produto não encontrado");
}
