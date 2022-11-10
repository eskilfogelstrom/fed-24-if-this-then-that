import store from "../store/store.js";
import { removeTodo } from "../store/todos.js";

export default class TodoList {
  constructor(el) {
    this.el = el;

    store.subscribe((state) => {
      this.render(state);
    });
  }

  handleRemove(todo) {
    removeTodo(todo);
  }

  render = ({ todos }) => {
    this.el.innerHTML = "";

    for (let todo of todos) {
      const liEl = document.createElement("li");
      liEl.innerHTML = todo;

      const removeButton = document.createElement("button");
      removeButton.innerHTML = "x";
      removeButton.onclick = () => this.handleRemove(todo);

      liEl.append(removeButton);

      this.el.append(liEl);
    }
  };
}
