const checkComplete = (id) => {

  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon');
  i.addEventListener('click', (event) => completeTask(event, id));
  return i;
};
// Immediately invoked function expression IIFE
const completeTask = (event, id) => {
  const element = event.target;
  element.classList.toggle('fas');
  element.classList.toggle('completeIcon');
  element.classList.toggle('far');

  //obtendremos los tasks de local storage para editar su id y su check
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const index = tasks.findIndex(item => item.id === id);
  tasks[index]["complete"] = !tasks[index]["complete"];
  //guardamos el estado del check
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export default checkComplete;
