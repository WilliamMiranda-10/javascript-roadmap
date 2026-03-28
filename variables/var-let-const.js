//Var => Antigo

/*Tem escopo de função (pode ser vista fora de um bloco if ou for, por exemplo),
 permite redeclaração e reatribuição. Sofre hoisting, 
podendo ser usada antes de ser declarada (com valor undefined).*/
var nome = "William";
var nome = "José";

console.log(nome);

// Let => moderno

/*Tem escopo de bloco (só existe dentro do bloco {} onde foi criada), 
permite reatribuição, mas não redeclaração. 
Não pode ser usada antes da declaração.*/
let idade = 30;
idade = 25;
console.log(idade);

// const (constante)

/*: Tem escopo de bloco e é uma constante. 
Não permite reatribuição nem redeclaração, 
e deve ser inicializada na declaração. */
const cidade = "Jaru-ro";

console.log(cidade);
