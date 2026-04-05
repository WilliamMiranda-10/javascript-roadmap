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

console.log("j a vascript".replace(" ", "")); //ja vascript, faz somente a primeira execução 
console.log("j a va sc ript".replaceAll(" ", "")); //javascript,  faz todas as execuções
console.log("javascript".slice(0,4)) // "java" pega uma parte da string

console.log(" javascript ".trim()); //tira os espaços no inicio de no fim
console.log(" javascript ".trimStart()); //tira espaço no inicio
console.log(" javascript ".trimEnd()); //tira espaço no fim

console.log("javascript".substring(0, 4)); //"java", pega somente as 4 strings // 
console.log("javascript".substring(4)); // inicia no indice 4 ate fim

console.log('javascript'.endsWith('pt')) // verifica se existe 'pt' no final da string se sim retorna true 

console.log("JAVAscript".toLocaleLowerCase().includes("java")); //trasnforma e minusculo e verifica sem a string java esta incluida
console.log("javascript".includes("script")); // verifica se a string esta incluida se sim retorna true

const email = "   FulaNo@gmail.com  ";

const indice = email.indexOf("@");
const dominio = email.substring(indice);
console.log(dominio);

const emailFormatado = email.trim().toLowerCase()
console.log('email formatado:', emailFormatado)

console.log(email.split("@")[0].length);
/*com split retorna um array separando apartir do @,
pega o primeiro indice do array que no caso e "fulano"
com length mostra a quantidade ou tamanho de algo pode ser array, ou string etc um exemplo a seguir: */

const qtde = 'Feliz pascoa'
console.log(qtde.length)//12



