class Employee {
  #name;
  #salary;

  constructor(name, salary) {
    this.#name = name;
    this.#salary = salary;
  }

  setName(name) {
    if (name.trim() === "") {
      throw new Error("Nome obrigatório");
    }
    this.#name = name;
  }

  setSalary(salary) {
    if (salary <= 0) {
      throw new Error("Valor inválido");
    }
    this.#salary = salary;
  }

  getName() {
    return this.#name;
  }

  getSalary() {
    return this.#salary;
  }
}

const jose = new Employee("José", 3500);

console.log(jose.getName());

console.log(jose.getSalary());

jose.setName("José Ferreira");

jose.setSalary(3790);

try {
  jose.setName("");
} catch (error) {
  console.log(error.message);
}


try {
  jose.setSalary(-40);
} catch (error) {
  console.log(error.message);
}

console.log(jose.getName());

console.log(jose.getSalary());


//"Eu faria essa alteração apenas dentro da classe Product, porque ela é a responsável 
// por controlar as regras de negócio relacionadas ao preço.
// Como toda alteração passa pelo método setPrice(), 
// basta modificar a validação em um único lugar e todo o sistema passa a obedecer à nova regra."

