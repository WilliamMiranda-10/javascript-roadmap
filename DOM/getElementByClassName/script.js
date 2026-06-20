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

const btnId = document.getElementById("btnLampada");
const lampada = document.getElementById("lampada");

btnId.addEventListener("click", () => {
  lampada.classList.toggle("ligado");
  if (lampada.classList.contains("ligado")) {
    btnId.innerText = "Desligar";
  } else {
    btnId.innerText = "Ligar";
  }
});
