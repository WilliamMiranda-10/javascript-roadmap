const data = [
  { name: "Matheus", age: 31, sallary: 2000, driverLicense: true },
  { name: "João", age: 18, sallary: 1500, driverLicense: false },
  { name: "Mariana", age: 22, sallary: 4000, driverLicense: true },
  { name: "Pedro", age: 50, sallary: 7200, driverLicense: true },
  { name: "Érica", age: 16, sallary: 0, driverLicense: false },
];

// Reverse

const reverseData = data.reverse(); //inverte a lista de array
console.log(reverseData);

//find
const highSalary = 5000;

const highestSallary = data.find((user) => user.sallary > highSalary); //retorna o usuario que tem o salario maior que 5000, neste caso pedro
console.log(highestSallary); // {name: 'Pedro', age: 50, sallary: 7200, driverLicense: true}

//findIndex

const lowerSallary = data.findIndex(
  (user) => user.sallary > 0 && user.sallary < 2000 //pegamos o indice do usuario que tem o salario entre 1 e 1999, neste caso o João
);
//com o indice dele demos um aumento de 1000 reais no salario
//antes { name: "João", age: 18, sallary: 1500, driverLicense: false },
//depois {name: 'João', age: 18, sallary: 2500, driverLicense: false }
data[lowerSallary].sallary += 1000;
console.log(data);

// map

data.map((user) => (user.name === "Pedro" ? (user.newlsLetter = true) : user)); //adicionamos uma propriedade somente ao pedro

console.log(data); //

// filter

const drivers = data.filter((user) => user.driverLicense); // filtra e retorna todos os usuarios que tem driverLicense
console.log(drivers);

// reduce

const sallarySum = data.reduce(
  (totalSallary, user) => (totalSallary += user.sallary), // retorna a soma de todos os salarios
  0
);
console.log(sallarySum);

// forEach
const showUsersNames = (users) => {
  users.forEach((user) => {
    // com forEach, percorre a lista de usuário e retorna o nome de cada usuário
    console.log(`Olá ${user.name}`);
  });
};

showUsersNames(data);

// some

const ofAge = data.some((user) => user.age >= 20); //verifica se tem pelo menos um usuário com idade maior ou igual a 20, retorna um boolean
console.log("some:", ofAge); //true

// every

const everyUserHasGoodSallary = data.every((user) => {
  //com every verifica se todos os usuario tem salário maior que 3000
  return user.sallary > 3000;
});
console.log(everyUserHasGoodSallary); // neste caso false

// push

const newUser = {
  name: "Davi",
  age: 16,
  sallary: 2890,
  driverLicense: true,
  newlsLetter: true,
};

data.push(newUser); //push adiciona um novo usuario ao array de usuários
console.log(data);

// pop

const removeUser = data.pop(); //remove o ultimo usuario do array
console.log(data);

//splice

const times = [
  "Flamengo",
  "Vasco",
  "Curitiba",
  "Athletico Mineiro",
  "Cruzeiro",
  "Remo",
  "Santos",
];
console.log(times);

const removeUserIndex = times.splice(5, 2);
// com splice  modifica o array original, neste caso removendo indice 5 de inicio ate fim 2
console.log(times);
console.log(removeUserIndex);

//slice

const newTimes = times.slice(0, 3);
//slice seleciona uma parte do array e retorna um novo array, porem não altera o array original

console.log(newTimes);

//join

const separator = times.join("-"); //transforma o array em string e ultiliza um separador neste caso um -> (-)
console.log(separator);

// shift
const numbers = [6, 3, 2, 1, 5, 22, 15, 88];

const firstElement = numbers.shift(); //pega o primeiro elemento no array
console.log(firstElement); // 6
console.log(numbers); //[3, 2, 1, 5, 22, 15, 88] o 6 foi retirado

// unshift
const listNumbers = [45, 2, 0, 15, 3, 56];
console.log(listNumbers.unshift(10)); //8 , adiciona o valor (10) no inicio do array e retorna quantidade elementos
console.log(listNumbers); //[10, 45, 2, 0, 15, 3, 56]

// includes

const hasFour = listNumbers.includes(56); //verifica se tem numero 56 na lista de numeros (listNumbers)
console.log(hasFour); //true
