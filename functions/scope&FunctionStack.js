// ---> Scoped, ESCOPO GLOBAL
// Ex: 01

// Variavel criada no escopo global ou seija fora da função,
// pode ser acessada em qualquer lugar
let lastName = "William";

function showName() {
  console.log(lastName); // William
}
showName();

// Ex: 02 ---> ESCOPO LOCAL

function isAdult() {
  let age = 14; // variavel criada em escopo local, so pode ser acessada dentro da função!
  console.log(`Idade: ${age} anos`);
  if (age >= 18) {
    console.log("Maior de idade!");
  } else {
    console.log("Menor de idade!");
  }
}

isAdult();
// teste acessando variavel em escopo local
console.log(age); // Erro: ReferenceError: age is not defined

// Ex: 03 Escopo de bloco

if (true) {
  let email = "teste@gmail.com";
}

console.log(email); // Erro -> ReferenceError: email is not defined

// Ex: 04 variavel local tem prioridade sobre a global

let product = "Mouse";

function puchase() {
  let product = "Teclado";
  console.log(product); // Teclado
}

puchase();

// Function Stack, ou pilha de funções
// LIFO -> Last In , First Out

function createUser() {
  let user = {
    lastName: "Jó",
    firstName: "Fulano",
    email: "joFulano@gmail.com",
    password: "jo66954",
  };

  const isUserValid = isValid(user.email, user.password);

  if (isUserValid) {
    console.log("Usuário criado com sucesso");
  } else {
    console.log("Não foi possivel criar o usuário");
  }
}

// segunda entrar
function isValid(email, password) {
  if (!email.includes("@")) {
    return false;
  }
  if (password.length < 6) {
    return false;
  }

  console.log("Email valido");
  console.log("Senha valida");
  return true;
}

createUser(); // primeira entrar na pilha, como se fosse de livros

// recursion
// Quando a mesma função chama ela mesma!

// Exemplo: 01
function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1); // 5 4 3 2 1
}

console.log(factorial(55));

// Exemplo 02

function test(x) {
  console.log(x);

  if (x > 1) {
    test(x - 1);
  }

  console.log("Fim", x);
}

test(3);

// Exercicio 01 Call Stack

function count(x) {
  if (x > 1) {
    //x = 5 / x = 4, x = 3, x = 2, x = 1
    count(x - 1);
  }
  console.log(x);
}

count(5);

// Exercicio 02

function sum(n) {
  if (n === 1) {
    return 1;
  }

  return n + sum(n - 1);
}

console.log(sum(3));

// Exercicios 03

function reverse(text) {
  if (text.length === 0) {
    return "";
  }

  return reverse(text.slice(1)) + text[0];
}
console.log(reverse("javascript"));

// Closures
// Exemplo: 01

function createCount() {
  let contador = 0;
  return function () {
    contador++;
    console.log(contador);
  };
}

const count = createCount();
count();
count();
count();

// Exemplo 2

function test() {
  let name = "William";
  return function displayName() {
    console.log("Olá", name);
  };
}

const result = test();
result();

// Exemplo 3

function externa() {
  let message = "Hello World";
  function interna() {
    console.log(message);
  }

  return interna;
}

const res = externa();
res();
