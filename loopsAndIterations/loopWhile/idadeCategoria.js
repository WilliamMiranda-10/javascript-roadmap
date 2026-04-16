// ex: 5 retorna apenas os usuarios que tem idade maior que 18

const users = [
  { name: "Ana", age: 17 },
  { name: "Carlos", age: 22 },
  { name: "João", age: 19 },
];

let index = 0;

while (index < users.length) {
  if (users[index].age >= 18) {
    console.log(users[index].name); //Carlos João
  }
  index++;
}
