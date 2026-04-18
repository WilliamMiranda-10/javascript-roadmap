// ex: somar preços por categoria
const vendas = [
    { produto: "Arroz", categoria: "Alimento", preco: 20 },
    { produto: "Feijão", categoria: "Alimento", preco: 10 },
    { produto: "Sabão", categoria: "Limpeza", preco: 15 },
    { produto: "Detergente", categoria: "Limpeza", preco: 0 },
  ];
  
  let resultado = {};
  let i = 0;
  
  while (i < vendas.length) {
    let categoria = vendas[i].categoria;
    let preco = vendas[i].preco;
  
    if (preco > 10) {
      if (resultado[categoria] !== undefined) {
        resultado[categoria] += preco;
      } else {
        resultado[categoria] = preco;
      }
    }
  
    i++;
  }
  
  console.log(resultado); //{ Alimento: 20, Limpeza: 15 }
  