document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelector(".boxes");
  const button = document.querySelector("#magicButton");

  (function createBox() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.backgroundPosition = `${-125 * j}px ${-125 * i}px`;
        boxes.appendChild(box);
      }
    }
  })();

  button.addEventListener("click", function () {
    boxes.classList.toggle("big");
  });
});
