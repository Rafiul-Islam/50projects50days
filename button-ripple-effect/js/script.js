document.addEventListener("DOMContentLoaded", () => {
  const rippleButton = document.querySelector(".ripple-button");
  rippleButton.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInsideButton = x - buttonLeft;
    const yInsideButton = y - buttonTop;

    const rippleCircle = document.createElement("span");
    rippleCircle.classList.add("circle");
    rippleCircle.style.top = yInsideButton + "px";
    rippleCircle.style.left = xInsideButton + "px";

    this.append(rippleCircle);
    setInterval(() => {
      rippleCircle.remove();
    }, 700);
  });
});
