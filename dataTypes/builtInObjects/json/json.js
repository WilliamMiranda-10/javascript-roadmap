const users = [
  {
    name: "william",
    age: 30,
    city: "jaru",
    hobbies: ["Jogar bola", "Assistir Filme", "Viajar"],
  },
  {
    name: "joao",
    age: 35,
    city: "Osasco",
    hobbies: ["Jogar bola", "Correr", "Ir a igreja"],
  },
];

const usersJson = JSON.stringify(users);//Aqui pegamos o Objeto users transformamos em um Json 

console.log(usersJson);

const usersObject = JSON.parse(usersJson); // ja aqui faz o contrário, transforma o Json em Objeto novamente

console.log(usersObject);
