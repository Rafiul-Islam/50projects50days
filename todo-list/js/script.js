document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const input = document.querySelector(".todos-input");
  const todoContainer = document.querySelector(".todo-list");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    createTodo(input.value);
    reset();
  });

  function createTodo(txt) {
    const todo = document
      .querySelector("[todo-item-template]")
      .content.children[0].cloneNode(true);
    todo.textContent = txt;
    todo.addEventListener("click", function () {
      todo.classList.toggle("completed");
    });

    todo.addEventListener("contextmenu", function () {
      todo.remove();
    });

    todoContainer.appendChild(todo);
  }

  function reset() {
    input.value = "";
    input.focus();
  }
});
