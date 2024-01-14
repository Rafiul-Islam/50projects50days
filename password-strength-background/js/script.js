document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.querySelector(".overlay");
  const password = document.querySelector("#password");

  password.addEventListener("input", function () {
    const blurAmount = 12 - this.value.length;
    console.log(blurAmount);
    overlay.style.filter = `blur(${blurAmount}px)`;
  });
});
