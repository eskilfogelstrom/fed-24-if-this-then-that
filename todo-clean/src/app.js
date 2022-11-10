import store from "./store/store.js";
import { getTodos, setTodos } from "./storage.js";

import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList.js";

store.init({ todos: getTodos() });
store.subscribe((state) => setTodos(state.todos));

new TodoForm(document.getElementById("todoForm"));
new TodoList(document.getElementById("todoList"));
