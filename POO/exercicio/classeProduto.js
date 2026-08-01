class Product {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
  showInfo() {
    console.log(`Produto: ${this.name} 
Preço: ${this.price} 
Estoque: ${this.stock}`);
  }
}

const notebook = new Product("Dell Inspiron 14", 2700, 4);
const iphone = new Product("Iphone 17 Pro Max", 7900, 10);

notebook.showInfo();
iphone.showInfo();

// Esse método showInfo() deveria ser static? Por quê?

//------------------------------------------------------------//

class User {
  static totalUsuarios = 0;

  constructor(name, email) {
    this.name = name;
    this.email = email;
    User.totalUsuarios++;
  }

  static totalUsers() {
    return User.totalUsuarios;
  }
}

const william = new User("William", "willian@gmail.com");
const maria = new User("Maria", "maria@gmail.com");

console.log(User.totalUsers(), "usuários cadastrados");

//Por que totalUsers() seria um método static?

class BankAccount {
  constructor(owner) {
    this.owner = owner;
    this.balance = 0;
  }

  deposit(value) {
    this.balance += value;
  }

  withdraw(value) {
    if (value > this.balance) {
      console.log("Saldo insuficiente");
      return;
    }
    this.balance -= value;
  }

  static createAccount(owner) {
    return new BankAccount(owner);
  }
}

console.log(BankAccount.createAccount("William"));
