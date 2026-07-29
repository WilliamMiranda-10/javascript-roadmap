class User {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }

  introduce() {
    console.log(`Olá meu nome é ${this.name} e tenho ${this.age} anos!`);
  }
}

const william = new User("William", 30);

william.introduce();

// Class extends

class Animal {
  constructor(name) {
    this.name = name;
  }
  dormir() {
    console.log(`${this.name} está dormindo.`);
  }

  comer() {
    console.log(`${this.name} está comendo.`);
  }
}

class Cachorro extends Animal {
  latir() {
    console.log(`${this.name} pare de latir`);
  }
}

const rex = new Cachorro("Rex");

rex.latir(); // metodo do Cachorro
rex.dormir(); // metodo herdado de Animal
rex.comer(); // metodo herdado de Animal


// Method Overriding (Sobrescrita de método)
class Animal1 {
  comer() {
    console.log("Animal comendo...");
  }
}

class Cachorro1 extends Animal1 {
  comer() {
    console.log("Cachorro comendo ração...");
  }
}

const bob = new Cachorro1("Bob");

bob.comer(); // bob ? existe comer ? não -> cachorro.prototype -> existe -> executa

// class super
// Execute primeiro o comportamento da classe pai.

// super() em métodos
class funcionario {
  baterPonto() {
    console.log("Ponto registrado.");
  }
}

class Gerente extends funcionario {
  baterPonto() {
    super.baterPonto();
    console.log("Acesso liberado para sala de gerência");
  }
}

const williamGerente = new Gerente("William");
williamGerente.baterPonto();
// Ponto registrado.
// Acesso liberado para sala de gerência

// O gerente continua sendo um funcionário.
// Só adicionou mais um comportamento.

// class super
// antes de usar o this, precisa iniciar a class pai
// neste caso fazemos com super(nome)


// super() no constructor
class Animal2 {
  constructor(nome) {
    this.nome = nome;
  }
}

class Cachorro2 extends Animal2 {
  constructor(nome, raca) {
    super(nome); // antes de usar o this, precisa iniciar a class pai
    this.raca = raca;
  }
}

const caramelo = new Cachorro2('Caramelo', 'Vira-lata')
console.log(caramelo) // Cachorro2 { nome: 'Caramelo', raca: 'Vira-lata' }

