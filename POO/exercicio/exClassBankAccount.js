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
