// Ex: 1

let x = 10;
x += 5;
console.log(x); //15

let y = 50;
y -= 15;
console.log(y); //35

let a = 40;
a /= 8;
console.log(a); //5

// Ex: 2

let n = 10;
n += 5;
n *= 2;
console.log(n); //30

let num = 50;
num -= 20;
num /= 5;
console.log(num); //6

let b = 2;
b **= 2;
b *= 3;

console.log(b); //12

// Ex : 3 Conta bancária
let balance = 1500;

function calculateFinalBalance(balance) {
  const boletoEnergia = 320;
  const pixRecebido = 500;
  const boletoAgua = 200;

  balance -= boletoEnergia;
  balance += pixRecebido;
  balance -= boletoAgua;
  balance *= 2; // rendimento

  return balance;
}

const finalBalance = calculateFinalBalance(balance);

console.log(
  `Extrato da conta:
Saldo inicial: R$ ${balance.toFixed(2)}
- pagamento energia: R$ 320.00
- pix recebido: R$ 500.00
- pagamento água: R$ 200.00
Saldo final: R$ ${finalBalance.toFixed(2)}`
);



