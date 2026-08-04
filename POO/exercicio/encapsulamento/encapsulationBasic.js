class Product {
  #price;
  constructor(price) {
    this.#price = price;
  }

  setPrice(newPrice) {
    if (newPrice <= 0) {
      throw new Error("Preço inválido");
    }
    this.#price = newPrice;
  }

  getPrice() {
    return this.#price;
  }
}

const iphone = new Product(7999);

try {
  iphone.setPrice(0);
} catch (error) {
  console.log(error.message);
}

console.log(iphone.getPrice());
