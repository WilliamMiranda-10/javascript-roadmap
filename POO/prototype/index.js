const usuarioPrototype = {
  introduce() {
    console.log(`Olá, meu nome é ${this.name}`);
  },
};

const william = Object.create(usuarioPrototype);

william.name = "William";

console.log(william.introduce);
// o js faz a busca -> existe introduce? não -> vai para o prototype
// -> existe introduce? sim -> retorna a função

console.log(william.introduce === usuarioPrototype.introduce); // true
// caminho 1: O js faz ->   usuarioPrototype -> existe introduce ? -> sim -> retorna a função
// caminho 2: O js faz ->   william -> existe introduce ? -> não -> prototype -> existe introduce ?
// sim -> retorna a função

const joao = Object.create(usuarioPrototype);

joao.name = "joao";
joao.introduce(); // Olá, meu nome é joao

console.log(joao.introduce); // [Function: introduce]
console.log(joao); // { name: 'joao' }

("use strict");

function User(name, age) {
  this.name = name;
  this.age = age;
}
// Função comum + Strict Mode
// ↓
// this === undefined

const william = User("William", 30);

console.log(william);

//----->>>> factory functions

function createUser(name, age) {
  return {
    name,
    age,

    introduce() {
      console.log(`Olá, meu nome é ${this.name}`);
    },
  };
}

const bruna = createUser("Bruna", 68);

bruna.introduce();

// ----->>>> Constructor function

function User(name, age) {
  this.name = name;
  this.age = age;

  this.introduce = function () {
    console.log(`Olá, meu nome é ${this.name}`);
  };
}

const carlos = new User("José", 68);
carlos.introduce();

// ----->>>> Constructor + Prototype (o jeito clássico)

function user1(name, age) {
  (this.name = name), (this.age = age);
}

// adicionando um metodo
// ATENÇÃO NAO ADICIONAR O METODO NA FUNÇÃO
// Por que ? Não quero criar uma função nova para cada objeto.

// metodo introduce adicionado no prototype
user1.prototype.introduce = function () {
  console.log(`Olá meu nome é ${this.name}`);
};

// assim posso criar varios objetos:
const jose = new user1("José", 68);
const maria = new user1("Maria", 84);
// a função nao retorna nada pois
// o new rotorna o objeto automaticamente

jose.introduce(); // Olá meu nome é José
maria.introduce(); // Olá meu nome é Maria

// ----->>>> Classes

// "Classes são uma forma mais organizada de criar objetos. Por baixo dos panos, 
// elas utilizam prototypes para compartilhar métodos entre todas as instâncias, 
// evitando criar uma nova cópia do mesmo método para cada objeto."

