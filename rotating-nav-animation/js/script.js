const container = document.querySelector(".container");
const close = document.querySelector("#close");
const open = document.querySelector("#open");

open.addEventListener("click", function () {
  container.classList.add("show-nav");
});

close.addEventListener("click", function () {
  container.classList.remove("show-nav");
});
