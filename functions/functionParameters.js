// Default parameters -> Parâmetros padrão

function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 5;
  // o typeof de b e diferente de undefined ? se for true b recebe 5

  return a * b;
}

console.log(multiply(10, 9));

function sum(a, b = 150) {
  return a + b;
}

console.log(sum(10)); //160

function hello(nome) {
  console.log("Olá", nome);
}

hello(); //Olá undefined --> como não passei nenhum valor para o parametro nome o resultado deu undefined para nome
hello("William"); // Olá William

function createUser(name, age = 30) {
  console.log(name, age);
}

createUser("William"); // William 30

function applyDiscount(value, discount = 5) {
  return value - (value * discount) / 100;
}
// Valor padrao (discount = 5) e usado quando nenhum argumento for passado
console.log(applyDiscount(15000)); // 14250
console.log(applyDiscount(4000, 10)); //3600

// Rest parameters ->

function puchaseValue(discount, ...puchases) {
  let totalValue = 0;

  for (value of puchases) {
    totalValue += value;
  }
  let valueDiscount = totalValue - (totalValue / 100 * discount )

  return `Valor total: R$ ${valueDiscount.toFixed(2)}`;
}

console.log(puchaseValue(5, 15, 6.5, 19.99, 7.49, 4.99, 5, 6.45));


function fruitSalad(aliment,...fruits){
   console.log('Alimentos:', aliment)
   console.log(fruits)
}

fruitSalad('Arroz', 'manga', 'jaca', 'laranja')