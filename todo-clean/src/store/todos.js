import store from "./store.js";

export function addTodo(todo) {
  const { todos } = store.getState();

  store.setState({
    todos: [...todos, todo],
  });
}

export function removeTodo(todo) {
  const { todos } = store.getState();

  const index = todos.indexOf(todo);
  const newTodos = [...todos.slice(0, index), ...todos.slice(index + 1)];

  store.setState({
    todos: newTodos,
  });
}
