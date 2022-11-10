import { addTodo } from "../store/todos.js";

export default class TodoForm {
  constructor(el) {
    this.el = el;

    el.onsubmit = this.handleSubmit;
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const input = this.el.elements.todo;

    addTodo(input.value);

    input.value = "";
  };
}
