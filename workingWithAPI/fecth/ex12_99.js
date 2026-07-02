const commentsData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  if (!response.ok) {
    throw new Error("Erro na requisição:", response.status);
  }
  return response.json();
};

const usersData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Erro na requisição:", response.status);
  }
  return response.json();
};

const getUserPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error(`Erro na requisição: ${response.status}`);
  }
  return await response.json();
};

const getCommentsPostUsers = async () => {
  try {
    const comments = await commentsData();
    const users = await usersData();
    const posts = await getUserPosts();

    const result = users.map((user) => {
      const usersPosts = posts.filter((post) => post.userId === user.id); // filtro quais posts sao de cada usuário

      const postsComents = usersPosts.map((post) => {
        const comment = comments.filter(
          (comment) => comment.postId === post.id
        ); // filtro quais comentários são de cada posts

        const body = comment.map((text) => text.body);

        return { titulo: post.title, comentarios: body };
      });

      return {
        usuario: user.name,
        posts: postsComents,
      };
    });

    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.error(error.message);
  }
};

getCommentsPostUsers();
