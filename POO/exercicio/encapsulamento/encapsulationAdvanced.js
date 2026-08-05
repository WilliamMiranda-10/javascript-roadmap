class Book {
  #title;
  #author;
  #available;

  constructor(titulo, author) {
    this.#title = titulo;
    this.#author = author;
    this.#available = true;
  }

  borrow() {
    if (this.#available === false) {
      throw new Error("Livro indisponível");
    }

    this.#available = false;
  }
  returnBook() {
    if (this.#available === true) {
      throw new Error("Livro ja devolvido");
    }

    this.#available = true;
  }
  getTitle() {
    return this.#title;
  }

  getAuthor() {
    return this.#author;
  }

  isAvailable() {
    return this.#available;
  }
}

const harryPotter = new Book(
  "Harry Potter e o Enigma do Príncipe",
  "J. K. Rowling"
);

console.log(harryPotter.isAvailable());

harryPotter.borrow();

console.log(harryPotter.isAvailable());

try {
  harryPotter.borrow();
} catch (error) {
  console.log(error.message);
}

harryPotter.returnBook();

console.log(harryPotter.isAvailable());

try {
  harryPotter.returnBook();
} catch (error) {
  console.log(error.message);
}

console.log(harryPotter.isAvailable());
