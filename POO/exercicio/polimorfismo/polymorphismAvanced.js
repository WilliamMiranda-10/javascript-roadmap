class Payment {
  process() {
    console.log("Processando pagamento...");
  }
}

class CreditCard extends Payment {
  process() {
    super.process();
    console.log("Pagamento realizado com cartão de Crédito");
  }
}

class Pix extends Payment {
  process() {
    super.process();
    console.log("Pagamento realizado via Pix");
  }
}

class Boleto extends Payment {
  process() {
    super.process();
    console.log("Pagamento realizado com boleto");
  }
}

const credit = new CreditCard();

const pix = new Pix();

const boleto = new Boleto();

credit.process();

console.log();

pix.process();

console.log();

boleto.process();
