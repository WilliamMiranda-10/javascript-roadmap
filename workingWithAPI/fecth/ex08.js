const url = "https://jsonplaceholder.typicode.com/posts";

const getUserPosts = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Erro na requisição: ${response.status}`);
  }
  return await response.json();
};

getUserPosts(url);

// Ex: 08, mostrar titulos de todos os posts:

const getTitlePosts = async (url) => {
  try {
    const posts = await getUserPosts(url);

    const titlePosts = posts.map((post) => ({ titulo: post.title }));
    console.log(titlePosts);
  } catch (error) {
    console.error(error.message);
  }
};

getTitlePosts(url);

// Ex: 09, pegar somente usuario com id 3

const getUserId = async (url) => {
  try {
    const posts = await getUserPosts(url);

    const userId = posts.find((user) => user.userId === 3);
    console.log(userId);
  } catch (error) {
    console.error(error.message);
  }
};

getUserId(url);

// Ex: 10 Conte quantos posts cada usuário possui.

const urlUsers = "https://jsonplaceholder.typicode.com/users";
const urlPosts = "https://jsonplaceholder.typicode.com/posts";

const usersData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Erro na requisição:", response.status);
  }
  return response.json();
};

const getPostsUserCount = async (url, urlUsers) => {
  try {
    const users = await usersData(urlUsers);
    const posts = await getUserPosts(url);

    users.forEach((user) => {
      const totalPosts = posts.filter((post) => post.userId === user.id).length;

      console.log(`${user.name} -> ${totalPosts} posts`);
    });
  } catch (error) {
    console.error(error.message);
  }
};

getPostsUserCount(url, urlUsers);
