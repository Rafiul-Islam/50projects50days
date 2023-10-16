document.addEventListener("DOMContentLoaded", function () {
  const labels = document.querySelectorAll("form label");

  labels.forEach((label) => {
    const labelText = label.textContent;
    const labelTextCharArray = labelText.split("");
    label.innerHTML = "";
    labelTextCharArray.forEach((chr, index) => {
      const span = createSpanTagWithChar(chr, index);
      label.appendChild(span);
    });
  });

  function createSpanTagWithChar(char, index) {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.transitionDelay = `${50 * (index + 1)}ms`;
    return span;
  }
});
