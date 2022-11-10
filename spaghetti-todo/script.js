import { todos, addTodo, removeTodo } from "./todos.js";

const todoFormEl = document.getElementById("todoForm");
const todoListEl = document.getElementById("todoList");

function createTodoEl(todo) {
  const listEl = document.createElement("li");
  listEl.innerHTML = todo;

  const removeButtonEl = document.createElement("button");
  removeButtonEl.innerHTML = "x";

  removeButtonEl.onclick = function () {
    removeTodo(todo);
    listEl.remove();
  };

  listEl.append(removeButtonEl);

  todoListEl.append(listEl);
}

for (let todo of todos) {
  createTodoEl(todo);
}

todoFormEl.onsubmit = function (event) {
  event.preventDefault();

  const todoInputEl = todoFormEl.elements.todo;
  const value = todoInputEl.value;

  createTodoEl(value);
  addTodo(value);

  todoInputEl.value = "";
};
