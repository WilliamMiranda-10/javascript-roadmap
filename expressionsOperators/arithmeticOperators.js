// Ex: 01 (soma e média)
let num1 = 156;
let num2 = 85;
let resSum = num1 + num2;
let media = resSum / 2;

console.log(`${num1} + ${num2} = ${resSum}`);
console.log(`Média: ${media}`);

// Ex: 02 (Cosumo de combustivel)

let kmDistance = 280;

function calculateFuelCost(kmDistance) {
  const consumptionKm = 12.85;
  const priceLiter = 7.53;

  const totalLiters = kmDistance / consumptionKm;

  const valueTotals = totalLiters * priceLiter;

  return `
========= RESUMO DA VIAGEM ========
Distância: ${kmDistance} Km
Consumo médio: ${consumptionKm} Km/l
Preço da gasolina: R$ ${priceLiter.toFixed(2)}

Consumo necessário: ${totalLiters.toFixed(2)} litros
Custo total estimado: R$ ${valueTotals.toFixed(2)}
===================================`;
}

console.log(calculateFuelCost(kmDistance));

// Ex: 3 (simulando compra)

function purchase(priceProduct, amount, discount) {
  const valueTotals = priceProduct * amount;
  const valueDiscount = valueTotals * (discount / 100);
  const valueTotalDiscount = valueTotals - valueDiscount;

  return `
Valor da Unidade : R$ ${priceProduct.toFixed(2)}
Quantidade: ${amount}
Valor total: R$ ${valueTotals.toFixed(2)}

Desconto: ${discount}%
Valor com desconto: R$ ${valueTotalDiscount.toFixed(2)}  
`;
}

console.log(purchase(23895, 1, 15));
