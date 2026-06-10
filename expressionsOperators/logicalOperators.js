// // Ex: Sistema de Login com Bloqueio

// let user = {
//   name: "William",
//   email: "teste@gmail.com",
//   password: "123456",
//   attemps: 0,
//   blocked: false,
// };

// function login(user, email, password) {
//   if (user.blocked) {
//     console.log("Conta bloqueada");
//     return;
//   }

//   if (email === user.email && password === user.password) {
//     console.log("Bem vindo Sr. ", user.name);
//     user.attemps = 0;
//   } else {
//     user.attemps++; // + 1
//     console.log("Dados invalidos");

//     if (user.attemps >= 3) {
//       user.blocked = true;
//       console.log("Conta bloqueada por excesso de tentativa");
//     }
//   }
// }

// login(user, "teste@gmail.com", "12346");
// login(user, "teste@gmail.com", "12346");
// login(user, "teste@gmail.com", "12346");
// login(user, "teste@gmail.com", "123456");

// Ex: Sistema de Compra com Cupom

let user = {
  nameProduct: "Iphone 17",
  price: 13999.85,
  amount: 2,
  coupon: {
    isvalid: true,
    DESCONTO10: 10,
    DESCONTO20: 20,
  },
};

function purchaseIphone(user) {
  const valueTotals = user.price * user.amount;

  if(!user.coupon.isvalid){
    console.log("Cupom inválido!")
  }
  if(user.coupon.isvalid && valueTotals > 10000){
    const valueDiscount = valueTotals * (user.coupon.DESCONTO10 /1000)
    return valueTotals - valueDiscount
  }

  
}

console.log(purchaseIphone(user));

console.log(user.coupon.isvalid)



