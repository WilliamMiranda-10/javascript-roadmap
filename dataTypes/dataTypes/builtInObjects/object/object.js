// Object.assign

const destino = { a: 1, b: 2 };
const origen = { b: 4, c: 5 };

const destinoRetornado = Object.assign(destino, origen);
console.log(destinoRetornado); //{ a: 1, b: 4, c: 5 }

const obj1 = { nome: "William" };
const obj2 = { idade: 30 };
const novoObj = Object.assign({}, obj1, obj2); // aqui o assign pega o obj1 e obj2 e mescla ou agrupa em um so objeto
console.log(novoObj); //{ nome: 'William', idade: 30 }

//usando operator

const produto = {
  produto: "Iphone 17",
  valor: 9000,
};

const comprador = {
  nome: "William",
  cidade: "Jaru",
};

const compra = { ...produto, ...comprador }; //operator
console.log("Detalhes do comprador:", compra);
//Detalhes da compra: { produto: 'Iphone 17', valor: 9000, nome: 'William', cidade: 'Jaru' }

//Object.fromEntries

const arrayDeEntrada = [
  ["nome", "william"],
  ["idade", 30],
];
const objeto = Object.fromEntries(arrayDeEntrada); // fromEntries trasnforma array em object
console.log(objeto); //{ nome: 'william', idade: 30 }

//Object.entries
const objEntrada = { nome: "William", idade: 30 };
const array = Object.entries(objEntrada); // entries faz o contrario do fromEntries ele transform obj em array
console.log(array); //[ [ 'nome', 'William' ], [ 'idade', 30 ] ]

// Object.keys e Object.values
const usuario = {
  nome: "William",
  idade: 30,
};

const keys = Object.keys(usuario); // retorna um array das chaves [ 'nome', 'idade' ]
const values = Object.values(usuario); // retorna um array dos valores // [ 'William', 30 ]

console.log("Keys:", keys);
console.log("Values", values);

//Object.hasOwn

console.log(Object.hasOwn(usuario, "nome")); //true , verifica se aa proprieda com chave nome existe retorna um boolean

//Object.seal

const novoUsuario = Object.seal(usuario);

novoUsuario.nome = "José";
usuario.admin = true;
console.log("Resultado usando seal", novoUsuario); //Resultado usando seal { nome: 'José', idade: 30 }
//consegui modificar porem nao adicionar uma nova proprieda

//Object.freeze

Object.freeze(usuario); // com o freeze obj fica congelado nao pode alterar
usuario.nome = "José";
console.log("Resultado", usuario);
console.log(Object.isFrozen(usuario)); // verifica se o objeto esta congelado no meu caso true


