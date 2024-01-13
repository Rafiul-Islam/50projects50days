document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    box.addEventListener("mouseover", function () {
      box.style.background = `rgba(${Math.round(
        Math.random() * 255
      )}, ${Math.round(Math.random() * 255)}, ${Math.round(
        Math.random() * 255
      )})`;
    });

    box.addEventListener("mouseout", function () {
      setTimeout(() => {
        box.style.background = "rgb(29, 29, 29)";
      }, 500);
    });
  });
});
