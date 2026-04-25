// Ex: Sistema de Login com Bloqueio

let user = {
  name: "William",
  email: "teste@gmail.com",
  password: "123456",
  attemps: 0,
  blocked: false,
};

function login(user, email, password) {
  if (user.blocked) {
    console.log("Conta bloqueada");
    return;
  }
  if (email === user.email && password === user.password) {
    console.log("Bem vindo", user.name);
    user.attemps = 0;
  } else {
    user.attemps++;
    console.log("Dados inválidos");
    if (user.attemps >= 3) {
      user.blocked = true;
      console.log("Conta bloqueada por excesso de tentativas");
    }
  }
}

login(user, "teste@gmail.com", "12346");
login(user, "teste@gmail.com", "12346");
login(user, "teste@gmail.com", "12356");
login(user, "teste@gmail.com", "123456");
