const getUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: id, nome: "William" });
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
        2: [{ id: 101, produto: "Notebook", preco: 3500 }],
      };

      resolve(ordersDB[userId] || []);
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

      const ordersStatus = status.find(
        (stts) => stts.pedidoId === orderId
      );

      resolve(ordersStatus);
    }, 2000);
  });
};



const result = async () => {
  try {
    const user = await getUser(2);
    const orders = await getUserOrders(user.id);

    const statusId = orders.map((productId) => getOrderStatus(productId.id));

    const promiseOrders = await Promise.all(statusId);
    

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
