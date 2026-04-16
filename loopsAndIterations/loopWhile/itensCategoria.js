//ex: 9 verificar quantidade de itens por categoria

const sales = [
  { produto: "Arroz", categoria: "Alimento" },
  { produto: "Sabão", categoria: "Limpeza" },
  { produto: "Feijão", categoria: "Alimento" },
];

let res = {};
let i = 0;

while (i < sales.length) {
  let categoria = sales[i].categoria;
  if (res[categoria]) {
    res[categoria] += 1;
  } else {
    res[categoria] = 1;
  }
  i++;
}

console.log(res); //{ Alimento: 2, Limpeza: 1 }

