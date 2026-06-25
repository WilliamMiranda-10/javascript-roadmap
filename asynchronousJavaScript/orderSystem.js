const getUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = {
        1: { id: 1, nome: "William" },
        2: { id: 2, nome: "José" },
        3: { id: 3, nome: "Bruna" },
      };
      if (!users[id]) {
        reject(new Error("Usuário inexistente"));
        return;
      }

      resolve(users[id]);
    }, 2000);
  });
};

const getUserOrders = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ordersDB = {
        1: [
          { id: 101, produto: "Mouse Gamer", preco: 150 },
          { id: 103, produto: "Teclado Mecânico", preco: 300 },
        ],
        2: [{ id: 999, produto: "Notebook", preco: 3500 }],
        3: [
          { id: 103, produto: "Iphone 17", preco: 7912 },
          { id: 102, produto: "Sansung S24", preco: 2960 },
        ],
      };

      if (!ordersDB[userId]) {
        reject(new Error("Usuário não encontrado!"));
        return;
      }

      resolve(ordersDB[userId]);
    }, 2000);
  });
};

const getOrderStatus = (orderId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const status = [
        { pedidoId: 101, status: "Entregue" },
        { pedidoId: 102, status: "A caminho" },
        { pedidoId: 103, status: "Preparando envio" },
      ];

      const ordersStatus = status.find((stts) => stts.pedidoId === orderId);

      if (!ordersStatus) {
        reject(new Error("Status do pedido não encontrado!"));
        return;
      }

      resolve(ordersStatus);
    }, 2000);
  });
};

const result = async () => {
  try {
    const user = await getUser(2); // retorna o usuário com id 2
    const orders = await getUserOrders(user.id); // pedidos do usuário 2

    const statusPromises = orders.map((productId) =>
      getOrderStatus(productId.id)   // aqui passamos o id do pedido do produto para retorna o status de cada produto 
    );

    const promiseOrders = await Promise.all(statusPromises);

    const resOrders = orders.map((pedido) => {
      const statusPedido = promiseOrders.find(
        (status) => status.pedidoId === pedido.id
      );

      return {
        usuario: user.nome,
        pedido: pedido.produto,
        preco: pedido.preco,
        status: statusPedido.status,
      };
    });

    console.log(resOrders);
  } catch (error) {
    console.error("Erro no processo", error);
  }
};

result();
