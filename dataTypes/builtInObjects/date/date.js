//object Date  e um objeto embutido para trabalharmos com data e hora

const dataHoje = new Date(); //retorna a data atual
console.log(dataHoje); //2026-04-03T22:09:23.707Z

let dia = String(dataHoje.getDate()).padStart(2, "0");
let mes = String(dataHoje.getMonth() + 1).padStart(2, "0"); // string // +1 por que janeiro inicia com 0
let ano = String(dataHoje.getFullYear());

/* (padStart) garante que dia e mes menores que 10 tenham o 0 antes, 
 para isso acontercer temos que transformar a data em string */

console.log(`${dia}/${mes}/${ano}`); // 03/04/2026
console.log(typeof dia);


const timestamp = Date.now()
console.log(timestamp) //1775260642789,  Quantidade de milisegundos desde 01/01/1970   

const data = new Date(timestamp)
console.log(data) //2026-04-03T23:57:22.789Z

const dataUTC = new Date(Date.UTC(2026,10,4,19,54,52,0)) //mes começa em 0(0= janeiro/ 10 = novembro)
console.log(dataUTC)


const dataAgora = new Date()

console.log(dataAgora.toString()) // Fri Apr 03 2026 20:05:19 GMT-0400 (Horário Padrão do Amazonas)
console.log(dataAgora.toUTCString())


