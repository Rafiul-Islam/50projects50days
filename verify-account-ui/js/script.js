document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".code");

  inputs[0].focus();

  inputs.forEach((code, indx) => {
    code.addEventListener("keydown", function (e) {
      if (e.key >= 0 && e.key < 10) {
        inputs[indx].value = "";
        setTimeout(() => {
          inputs[indx + 1].focus();
        }, 10);
      } else if (e.key === "Backspace") {
        setTimeout(() => {
          inputs[indx - 1].focus();
        }, 10);
      }
    });
  });
});
