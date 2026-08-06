// "Objetos diferentes respondem ao mesmo método de maneiras diferentes."

class Animal {
  speak() {
    console.log("Som do animal");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Au Au");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Miau");
  }
}

const dog = new Dog();

dog.speak();
// aqui o js primeiro procura o metodo na classe filha, como Dog possui sua propria implementação de speak()
// essa versão e executada, a implementação de Animal e sobrescrita (override)
// se Dog não tivesse esse metodo, entao os javascript ultilizaria a implementação herdada de Animal
