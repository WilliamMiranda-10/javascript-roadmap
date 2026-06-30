const url = "https://jsonplaceholder.typicode.com/users";

// const response = await fetch(url);
// console.log("response =>", response);
// const data = await response.json();
// console.log("data=>", data);

// // // Ex 01:
// const getUsersData = async (url) => {
//   const response = await fetch(url);
//   const data = await response.json();
//   const users = data.map((user) => {
//     return { name: user.name, email: user.email, telefone: user.phone };
//   });
//   console.log(users);
// };

// // getUsersData(url);

// //Ex 02:
// const getProfileData = async (url) => {
//   const response = await fetch(url);
//   const data = await response.json();
//   const users = data.map((user) => {
//     return {
//       nome: user.name,
//       cidade: user.address.city,
//       empresa: user.company,
//     };
//   });

//   console.log(users);
// };

// getProfileData(url);

// // Ex: 03

// const getUserCount=async (url)=>{
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log('Total de usuários:', data.length)
// }

// getUserCount(url)

// Ex: 04

// const getUserId=async()=>{
//     const response = await fetch(url)
//     const data = await response.json()
//     const userId = data.find((user)=>{return user.id === 5})
//     console.log(userId)

// }

// getUserId(url)

// Ex: 05

// const createUser = async (url) => {
//   const response = await fetch(url);
//   const data = await response.json();
//   const dataUsers = data.map((users) => {
//     return {
//       nome: users.name,
//       email: users.email,
//     };
//   });

//   console.log(dataUsers);
// };

// createUser(url);

// // Ex: 06

// const getUserCity = async (url) => {
//   const response = await fetch(url);
//   const data = await response.json();
//   const dataUsers = data.filter((user) => {
//     return user.address.city === "South Christy";
//   });
//   console.log(dataUsers);
// };

// getUserCity(url);

const sortUsersByName = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
    
  



};
