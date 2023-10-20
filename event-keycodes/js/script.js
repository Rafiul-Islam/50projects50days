document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("keydown", (e) => {
    const { key, keyCode, code } = e;

    const boxes = document.querySelectorAll(".key");
    boxes.forEach((box, index) => {
      if (index === boxes.length - 1) {
        box.style.display = "none";
      } else {
        box.style.display = "inline-block";
      }
    });
    boxes[0].querySelector("span").textContent = key === " " ? "Space" : key;
    boxes[1].querySelector("span").textContent = keyCode;
    boxes[2].querySelector("span").textContent = code;
  });
});
