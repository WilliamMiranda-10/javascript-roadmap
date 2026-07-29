"use strict";

// const pessoa = {
//   nome: "William",
//   mostrarNome() {
//     console.log(this.nome);
//   },
// };

// const exibir = pessoa.mostrarNome

// exibir()

const pessoa = {
  nome: "William",
  mostrarNome() {
    console.log(this.nome);
  },
};

const exibir = pessoa.mostrarNome;
// call()
// O call() chama a função e define explicitamente qual será o this.
exibir.call(pessoa);

function apresentar(cidade, estado) {
  console.log(`Olá, Eu sou ${this.nome}, moro em ${cidade}-${estado}`);
}
// com call() passamos argumentos separados:
// call() define o this que é (pessoa), e executa imediatamente
// Exemplo:
apresentar.call(pessoa, "Jaru", "RO");

//=====================================================================
//aplly()
// com apply() passamos argumentos dentro de um array
// define o this neste caso ->( pessoa), executa emediatamente, recebe os argumentos em um array
// Exemplo:
const dados = ["Jaru", "RO"];
apresentar.apply(pessoa, dados);

//=================================================
// bind()
// com bind() passamos os dados separados
// O bind() cria uma nova função com o this (e opcionalmente alguns argumentos) já definidos.
// Essa nova função só será executada quando for chamada.
// Exemplo:

const exibir1 = apresentar.bind(pessoa, "Jaru", "RO");

exibir1();

