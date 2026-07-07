// async function getData() {
//   try {
//     const [users, posts, comments] = await Promise.all([
//       fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
//         response.json()
//       ),
//       fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
//         response.json()
//       ),
//       fetch("https://jsonplaceholder.typicode.com/comments").then((response) =>
//         response.json()
//       ),
//     ]);

//     console.log("usuarios:", users);
//     console.log("posts", posts);
//     console.log("comentarios:", comments);

//     return { users, posts, comments };
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// getData();



const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data
};

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

const getComments = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();
  return data;
};

const result = async () => {
  try {
    const [users, posts, comments] = await Promise.all([
      getUsers(),
      getPosts(),
      getComments(),
    ]);

    console.log(users)
    console.log(posts)
    console.log(comments)

  } catch (error) {}
};

result();
