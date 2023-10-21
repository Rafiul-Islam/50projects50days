document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      button.parentElement.classList.toggle("active");
    });
  });
});
