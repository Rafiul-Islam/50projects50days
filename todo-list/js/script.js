document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const input = document.querySelector(".todos-input");
  const todoContainer = document.querySelector(".todo-list");

  let todos = [];

  if (localStorage.getItem("todos")) {
    console.log(localStorage.getItem("todos"));
    todos = JSON.parse(localStorage.getItem("todos"));

    todos.forEach(({ todo, completed }) => createTodo(todo, completed));
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    createTodo(input.value);
    setToLocalStorage(input.value);
    reset();
  });

  function createTodo(txt, status = false) {
    const template = document
      .querySelector("[todo-item-template]")
      .content.children[0].cloneNode(true);
    template.textContent = txt;

    if (status) {
      template.classList.add("completed");
    }

    template.addEventListener("click", function () {
      template.classList.toggle("completed");

      todos.forEach((item) => {
        if (item.todo === txt && item.completed === status) {
          item.completed = !item.completed;
        }
      });
      localStorage.setItem("todos", JSON.stringify(todos));
    });

    template.addEventListener("contextmenu", function () {
      todos = todos.filter((item) => {
        if (item.todo !== txt && item.completed !== status) {
          return item;
        }
      });

      localStorage.setItem("todos", JSON.stringify(todos));

      template.remove();
    });

    todoContainer.appendChild(template);
  }

  function setToLocalStorage(todo) {
    todos.push({
      todo: todo,
      completed: false,
    });
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function reset() {
    input.value = "";
    input.focus();
  }
});
