console.log("javascript".toUpperCase()); //deixa as letras tudo maiuscula
console.log("JAVASCRIPT".toLowerCase()); //ao contrario do toUpperCase, deixa tudo minusculas

const url = "https://www.google.com/";

const urlValida = "https://";
if (url.startsWith(urlValida)) {
  // -> verifica se o 'https://' esta no inicio da string
  console.log("Url valida");
} else {
  console.log("Url invalida");
}

console.log("j a vascript".replace(" ", "")); //faz somente a primeira execução
console.log("j a va sc ript".replaceAll(" ", "")); // faz todas as execuções

console.log(" javascript ".trim()); //tira os espaços no inicio de no fim
console.log(" javascript ".trimStart()); //tira espaço no inicio
console.log(" javascript ".trimEnd()); //tira espaço no fim

console.log("javascript".substring(0, 4)); //pega somente as 4 strings // java
console.log("javascript".substring(4)); // inicia no indice 4 ate fim

console.log("JAVAscript".toLocaleLowerCase().includes("java")); //trasnforma e minusculo e verifica sem a string java esta incluida
console.log("javascript".includes("script")); // verifica se a string esta incluida

const email = 'fulano@gmail.com'

const indice = email.indexOf('@')
const dominio = email.substring(indice)
console.log(dominio)

console.log(email.split('@')[0].length) 
//com split retorna um array separando apartir do @,
//pega o primeiro indice do array que no caso e "fulano" 
//depois exibe a qtde de caractere
