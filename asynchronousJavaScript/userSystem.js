//buscar usuário
const usersDB = [
  {
    id: 1,
    nome: "William",
    email: "Willianteste@gmail.com",
    password: "123456",
  },
  {
    id: 2,
    nome: "Bruna",
    email: "bteste@gmail.com",
    password: "123456",
  },
];
const getUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isLogged = usersDB.find((user) => {
        return user.id === id;
      });

      if (!isLogged) {
        reject(new Error("Usuário não encontrado!"));
        return;
      }

      resolve(isLogged);
    }, 500);
  });
};

// buscar post do usuário
const getUserPost = (userId) => {
  return new Promise((resolve, reject) => {
    const post = {
      1: [
        { id: 1, post: "Aprendedo javascript" },
        { id: 2, post: "Criando um projeto de controle financeiro" },
      ],
      2: { id: 1, post: "Praticando array/objects" },
    };

    setTimeout(() => {
      if (!post[userId]) {
        reject(new Error("Post não encontrado."));
        return;
      }

      resolve(post[userId]);
    }, 500);
  });
};

// buscar os comentarios do usuario
const getPostComments = (postId) => {
  return new Promise((resolve, reject) => {
    const commentsUsers = {
      1: [
        { idComments: 1, comments: "Parabéns continue assim!" },
        { idComments: 2, comments: "Top mano, isso ai foco" },
        { idComments: 3, comments: "Nossa legal" },
        { idComments: 4, comments: "Parabéns continue assim!" },
      ],
      2: [
        { idComments: 1, comments: "Eita que massa" },
        { idComments: 2, comments: "Faz um projeto para mim" },
        { idComments: 3, comments: "Da hora, show" },
      ],
      3: [
        { idComments: 1, comments: "Precisar de uma ajuda mano so falar" },
        {
          idComments: 2,
          comments: "Foca nesses tópicos por que isso e fundamental no backend",
        },
      ],
    };

    setTimeout(() => {
      if (!commentsUsers[postId]) {
        reject(new Error("Este usuário não possui nenhum comentário"));
      }

      resolve(commentsUsers[postId]);
    }, 500);
  });
};

const result = async () => {
  try {
    const user = await getUser(1);
    const posts = await getUserPost(user.id);

    const commentsPromise = posts.map((post) => {
      return getPostComments(post.id);
    });

    const comments = await Promise.all(commentsPromise);

    const resul = comments.map((commentArray, index) => {  
      const commentsPost = commentArray.map(comment => comment.comments)

      return {
        nome: user.nome,
        post: posts[index].post,
        comentarios: commentsPost,
        qtdeComentarios: commentsPost.length,
      };
    });

    console.log("Resultado final:", resul);
  } catch (error) {
    console.error("Erro ao executar o processo:", error.message);
  }
};

result();
