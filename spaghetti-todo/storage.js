export function setTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

export function getTodos() {
  return JSON.parse(localStorage.getItem("todos")) || [];
}
