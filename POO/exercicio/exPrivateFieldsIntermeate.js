class User {
  #name;
  constructor(name) {
    this.#name = name;
  }

  changeName(newName) {
    if (newName === "") {
      throw new Error("Nome inválido");
    }
    this.#name = newName;
  }

  getName() {
    return this.#name;
  }
}


const william = new User("William")

try {
    william.changeName('')
} catch (error) {
    console.log(error.message)
}

// 

console.log(william.getName())

william.changeName('José')

console.log(william.getName())

//"Por que você decidiu validar o nome dentro da classe e não fora dela?"