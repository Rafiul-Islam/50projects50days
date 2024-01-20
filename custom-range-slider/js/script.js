document.addEventListener("DOMContentLoaded", function () {
  const range = document.querySelector("#range");
  const label = document.querySelector("label");

  let rangeWidth;
  let labelWidth = label.offsetWidth;

  range.addEventListener("input", function (e) {
    const value = e.target.value;
    label.textContent = value;

    rangeWidth = getComputedStyle(e.target).getPropertyValue("width");
    rangeWidth = +rangeWidth.replace("px", "");

    const labelPosition = `${calculateLabelPosition(value)}px`;
    label.style.left = labelPosition;
  });

  function calculateLabelPosition(value) {
    const min = range.getAttribute("min");
    const max = range.getAttribute("max");

    const position =
      (rangeWidth * value) / 100 -
      labelWidth / 2 +
      scale(value, min, max, 10, -10);
    return position;
  }

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };
});
