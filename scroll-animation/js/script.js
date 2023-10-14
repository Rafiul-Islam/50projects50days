document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".box");

  window.addEventListener("scroll", checkBoxes);

  checkBoxes();

  function checkBoxes() {
    const windowheight = (window.innerHeight / 5) * 4;
    boxes.forEach((box) => {
      const triggerPoint = box.getBoundingClientRect().top;
      if (triggerPoint < windowheight) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }
});
