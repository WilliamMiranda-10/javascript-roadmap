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
  