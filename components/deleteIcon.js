import { displayTasks } from "./readTasks.js";

const deleteIcon = (id) => {
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', () => deleteTask(id));
  return i;
};

const deleteTask = (id) => {
  const li = document.querySelector("[data-list]");
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const index = tasks.findIndex( (item) => item.id === id);
  //con splice borramos un elemento de un array
  //sus valores son el indice del elemento a borrar hasta
  //el el elemento final a borrar, en este caso 1 para que
  //solo elimine un elemento
  const newTasks = tasks.splice(index, 1);
  li.innerHTML = ""
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks()
};

export default deleteIcon;
