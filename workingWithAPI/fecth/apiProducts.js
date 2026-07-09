const id = 10;
const url = `https://api.com/products/${id}`;

const response = await fetch(url);

if (!response.ok) {
  throw new Error(`Erro na requisição: ${response.status}`);
}

const data = await response.json();
console.log(data);





// const product = {
//   name: "Notebook",
//   price: 3500,
//   stock: 10,
// };

// // const url = "https://jsonplaceholder.typicode.com/posts";

// try {
//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(product),
//   });

//   if (!response.ok) {
//     throw new Error(`Erro na requisição: ${response.status}`);
//   }

//   const data = await response.json();

//   console.log(data);
// } catch (error) {
//   console.error(error.message);
// }

// const updateProduct = {
//   name: "Notebook Gamer",
//   price: 4500,
//   stock: 8,
// };

// const urlPut = "https://api.com/products/5";

// const response = await fetch(urlPut, {
//   method: "PUT",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(updateProduct),
// });

// if (!response.ok) {
//   throw new Error(`Erro na requisição: ${response.status}`);
// }

// const data = await response.json();

// console.log(data);

// // PATCH -> Atualiza parcialmente um produto

// const updatePrice = {
//   preco: 80,
// };

// const urlPatch = "https://api.com/products/10";

// const response = await fetch(urlPatch, {
//   method: "PATCH",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(updatePrice),
// });

// if (!response.ok) {
//   throw new Error(`Erro na requisição: ${response.status}`);
// }

// const data = await response.json();

// console.log(data);

// // DELETE -> remove um produto

// const urlDelete = "https://api.com/products/10";

// const response = await fetch(urlDelete, {
//   method: "DELETE",
// });

// if(!response.ok){
//   throw new Error(`Erro na requisição: ${response.status}`)
// }

// console.log("Produto removido com sucesso!");
