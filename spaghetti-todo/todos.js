import { getTodos, setTodos } from "./storage.js";

export let todos = getTodos();

export function addTodo(todo) {
  todos.push(todo);
  setTodos(todos);
}

export function removeTodo(todo) {
  const index = todos.indexOf(todo);
  todos.splice(index, 1);
  setTodos(todos);
}
