const getUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: id, nome: "William" });
    }, 2000);
  });
};

const getUserOrders = (userId) => {
  return new Promise((resolve, reject) => {
    const ordersDB = {
      1: [
        { id: 101, produto: "Mouse Gamer", preco: 150 },
        { id: 102, produto: "Teclado Mecânico", preco: 300 },
      ],
      2: [{ id: 201, produto: "Notebook", preco: 3500 }],
    };

    resolve(ordersDB[userId] || []);
  });
};

const getOrderStatus = (orderId) => {
  return new Promise((resolve, reject) => {
    const orderStatus = [
      { pedidoId: orderId, status: "Entregue" },
      { pedidoId: orderId, status: "A caminho" },
      { pedidoId: orderId, status: "Preparando envio" },
    ];

    resolve(orderStatus);
  });
};

const result = async () => {
  try {
    const user = await getUser(1);
    const orders = await getUserOrders(user.id);

    const order = orders.map((p) => getOrderStatus(p.id));
    console.log(order)

    const promiseOrders = await Promise.all(order);

    console.log(promiseOrders);



  } catch (error) {
    console.error("Erro no processo", error);
  }
};

result();
