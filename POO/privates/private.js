class User1 {
  #name;
  constructor(name) {
    this.#name = name;
  }

  showName() {
    return this.#name;
  }
}

const will = new User1("William");

console.log(will.showName());
