class BankAccount {
  #balance;

  constructor(balance) {
    if (balance < 0) {
      throw new Error("Valor inválido");
    }
    this.#balance = balance;
  }

  deposit(value) {
    if (value <= 0) {
      throw new Error("Valor inválido");
    }
    this.#balance += value;
  }

  withdraw(value) {
    if (value <= 0) {
      throw new Error("Valor inválido");
    }

    if (value > this.#balance) {
      throw new Error("Saldo insuficiente");
    }

    this.#balance -= value;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(0);
try {
  account.deposit(50);
  account.withdraw(5500);
} catch (error) {
  console.log(error.message);
}

console.log(`Saldo: ${account.getBalance()}`);
