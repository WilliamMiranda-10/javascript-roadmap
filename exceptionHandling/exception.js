//1: ex try/catch/finally

try {
  let value = undefined;
  console.log(value.toUpperCase());
} catch (error) {
  console.log("Error:", error.message); //Error: Cannot read properties of undefined (reading 'toUpperCase')
} finally {
  console.log("finalizado");
}

// 2: ex error object

try {
  let name = undefined;
  if (!name) {
    throw new Error("O nome é obrigatório");
  }
  console.log(name);
} catch (error) {
  console.log("Menssagem:", error.message);
}

// 3 throw (Validação)

function dividir(a, b) {
  if (b === 0) {
    throw new Error("Não pode dividir por zero");
  }
  return a / b;
}

try {
  console.log("resultado:", dividir(10, 60));
} catch (error) {
  console.log("Mensagem:", error.message);
}

//Ex: 1

function showName(name) {
  try {
    if (typeof name !== "string") {
      throw new Error("O Nome precisa ser uma string");
    }
    console.log(name.toUpperCase());
  } catch (error) {
    console.log("Mensagem:", error.message);
  }
}

showName("William");

// Ex: 2;
let balance = 1503;

function withdraw(balance, amount) {
  if (amount <= 0) {
    throw new Error("Valor inválido");
  }

  if (amount > balance) {
    throw new Error("Saldo insuficiente");
  }

  return balance - amount;
}

try {
  balance = withdraw(balance, 955);
  console.log("Saque realizado com sucesso!");
} catch (error) {
  console.log("Erro:", error.message);
} finally {
  console.log(`Saldo atual: R$ ${balance.toFixed(2)}`);
}

// // Ex: 3

let usersList = [
  { name: "Ana", age: 25, email: "ana@email.com" },
  { name: "", age: 30, email: "erro@email.com" },
  { name: "Jó", age: 48, email: "jo@gmail.com" },
  { name: "Carlos", age: 15, email: "carlos@email.com" },
];

let validUsers = [];

function createUsers(user) {
  if (!user.name) {
    throw new Error("Nome obrigatório");
  }
  if (user.age < 18) {
    throw new Error("Usuário menor de idade!");
  }
  if (!user.email.includes("@")) {
    throw new Error("Email inválido");
  }

  return user;
}

for (const user of usersList) {
  try {
    const newUser = createUsers(user);
    validUsers.push(newUser);
    console.log("Usuário válido:", newUser);
  } catch (error) {
    console.log("Erro no usuário:", user.name || "sem nome");
    console.log("Motivo:", error.message);
  }
}

console.log("Usuários válidos:", validUsers);
