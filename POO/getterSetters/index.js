class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value === "") {
      throw new Error("O nome não pode ser vazio!");
    }
    this._name = value;
  }
}

const william = new User("William");

william.name = "José"; // permitido

william.name = ""; // nao permitido

console.log(william.name);
