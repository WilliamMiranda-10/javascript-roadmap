import fetchApi from "./exercicio13.js";

const getCountPostsCommentsUsers = async () => {
  const users = await fetchApi.usersData();
  const usersPosts = await fetchApi.getUserPosts();
  const postComments = await fetchApi.commentsData();

  const result = users.map((user) => {
    const posts = usersPosts.filter((post) => post.userId === user.id);

    const postsComments = posts.map((post) => {
      const comments = postComments.filter(
        (comment) => comment.postId === post.id
      );

      return comments.length;
    });

    const qtdeComments = postsComments.reduce((acc, item) => acc + item, 0);

    return {
      nome: user.name,
      qtdePosts: posts.length,
      qtdeComentarios: qtdeComments,
    };
  });

  console.log(result);
};

getCountPostsCommentsUsers();
