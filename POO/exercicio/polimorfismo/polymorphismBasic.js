class Animal {
  move() {
    console.log("O animal esta se movendo.");
  }
}

class Bird extends Animal {
  move() {
    console.log("O pássaro esta voando.");
  }
}

class Fish extends Animal {
  move() {
    console.log("O peixe esta nadando.");
  }
}

const bird = new Bird();

bird.move();

const fish = new Fish();
fish.move();

console.log(Object.getPrototypeOf(bird)); // Animal {}
console.log(Object.getPrototypeOf(bird) === bird.prototype);



// bird
//    │
//    ▼
// Bird.prototype
//    │
//    ▼
// Animal.prototype
//    │
//    ▼
// Object.prototype
//    │
//    ▼
// null
