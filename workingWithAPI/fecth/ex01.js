const url = "https://jsonplaceholder.typicode.com/users";

// const response = await fetch(url);
// console.log("response =>", response);
// const data = await response.json();
// console.log("data=>", data);

// // Ex 01:
const getUsersData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const users = data.map((user) => {
    return { name: user.name, email: user.email, telefone: user.phone };
  });
  console.log(users);
};

// getUsersData(url);

//Ex 02:
const getProfileData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const users = data.map((user) => {
    return {
      nome: user.name,
      cidade: user.address.city,
      empresa: user.company,
    };
  });

  console.log(users);
};

getProfileData(url);

// Ex: 03

const getUserCount=async (url)=>{
    const response = await fetch(url)
    const data = await response.json()
    console.log('Total de usuários:', data.length)
}

getUserCount(url)