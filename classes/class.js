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
