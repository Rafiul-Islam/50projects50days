document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".btn");
  const nav = document.querySelector(".nav");

  button.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});
