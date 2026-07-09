const product = {
  name: "Notebook",
  price: 3500,
  stock: 10,
};

const url = "https://jsonplaceholder.typicode.com/posts";

try {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error(`Erro na requisição: ${response.status}`);
  }

  const data = await response.json();

  console.log(data);
} catch (error) {
  console.error(error.message);
}

