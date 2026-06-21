const input = document.querySelector("input");
const btnAdd = document.querySelector("#addBtn");
const ul = document.querySelector("#taskList");

btnAdd.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (taskText === "") {
    alert("Por favor digite uma tarefa!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  ul.appendChild(li);
  input.value = "";
  input.focus();
});


