const search = document.querySelector("#search");
const listProducts = document.querySelectorAll(".produto");

search.addEventListener("input", () => {
  console.log(search.value);

  const text = search.value.toLowerCase();

  listProducts.forEach((product) => {
    const nameProduct = product.textContent.toLowerCase();

    if (nameProduct.includes(text)) {
      product.style.display = "";
    } else {
      product.style.display = "none";
    }
  });
});


