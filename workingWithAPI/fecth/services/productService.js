export async function getProducts() {
  const response = await fetch("https://api.com/products");

  if (!response.ok) {
    throw new Error(`Erro na requisição: ${response.status}`);
  }

  const data = await response.json();
  
  return data;
}
 


