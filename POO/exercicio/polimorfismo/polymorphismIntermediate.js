class Employee {
  work() {
    console.log("Funcionário iniciou o trabalho.");
  }
}

class Developer extends Employee {
  work() {
    super.work();
    console.log("Programando em JavaScript");
  }
}

class Designer extends Employee {
  work() {
    super.work();
    console.log("Criando layout no figma");
  }
}

const developer = new Developer();

const designer = new Designer();

developer.work();

console.log();

designer.work();
