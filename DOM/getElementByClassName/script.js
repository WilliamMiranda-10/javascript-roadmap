const cursos = [...document.getElementsByClassName("curso")];
const cursosC1 = [...document.getElementsByClassName("curso c1")];
const cursosC2 = [...document.getElementsByClassName("curso c2")];

console.log(cursos);
console.log(cursosC1);
console.log(cursosC2);

cursos.map((el) => {
  el.classList.add("destaque");
});

// Exercício : 01
const id = document.getElementById("btn");

id.addEventListener("click", () => {
  cursos.map((el) => {
    el.classList.toggle("destaque");

    if (el.classList.contains("destaque")) {
      id.innerText = "Desalterar";
    } else {
      id.innerText = "Alterar";
    }
  });
});

// // Exercício 02

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

// Exercício 03:

const idButton = document.getElementById("btnMostrar");
const message = document.getElementById("message");

idButton.addEventListener("click", () => {
  if (message.classList.contains("escondido")) {
    message.classList.remove("escondido"), message.classList.add("mostrar");
  } else {
    message.classList.remove("mostrar");
    message.classList.add("escondido");
  }
});

// Exercício 4

const li = [...document.getElementsByTagName("li")];

li.map((el) => {
  el.className = "destacado";
});
