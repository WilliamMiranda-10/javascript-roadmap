const cards = [...document.querySelectorAll(".card")];
const btn = document.querySelector("button");

console.log(cards);

btn.addEventListener("click", () => {
  cards.forEach((el) => {
    el.classList.add("destacado");
    console.log(el);
  });
});
