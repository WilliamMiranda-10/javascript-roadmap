const cursos = [...document.getElementsByClassName("curso")];
const cursosC1 = [...document.getElementsByClassName("curso c1")];
const cursosC2 = [...document.getElementsByClassName("curso c2")];

console.log(cursos);
console.log(cursosC1);
console.log(cursosC2);

// cursos.map((el)=>{
//     el.classList.add('destaque')
// })

const id = document.getElementById("btn");

id.addEventListener("click", () => {
  cursos.map((el) => {
    el.classList.add("destaque");
  });
  id.innerText = "Alterado";
});
