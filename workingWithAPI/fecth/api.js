// fetch("https://viacep.com.br/ws/76890000/json/")
//   .then((messageSussess) => {

//     if(!messageSussess.ok){
//         throw new Error('Erro ao fazer requisição', messageSussess.status)
//     }
//     return messageSussess.json();
//   })
//   .then((dado) => {
//     console.log(dado);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// const url = "https://viacep.com.br/ws/76890000/json/";

// const response = await fetch(url);
// console.log('response:',response)
// const data = await response.json();

// console.log('Data:',data);


const response1 = await fetch('https://jsonplaceholder.typicode.com/users')

const data = await response1.json()


console.log('=>>>>>',response1)
console.log('=>>>>>>>>>>>>',data[0].name)