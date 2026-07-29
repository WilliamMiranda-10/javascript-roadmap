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
  static totalUsers = 0;
  constructor(name, email) {
    this.name = name;
    this.email = email;
    User.totalUsers++;
  }
}

const william = new User("William", "willian@gmail.com");
const maria = new User("Maria", "maria@gmail.com");

console.log(User.totalUsers, 'usuários cadastrado')

//Por que totalUsers() seria um método static?

