document.addEventListener("DOMContentLoaded", function () {
  const textSelector = document.querySelector("#text");
  const speedMeter = document.querySelector("#speedMeter");
  let text = "I love My Country";
  let speed = 300 / speedMeter.value;
  let indx = 1;

  (function autoTextShowHandler() {
    textSelector.textContent = text.slice(0, indx);
    indx++;
    if (indx > text.length) {
      indx = 0;
    }
    setTimeout(autoTextShowHandler, speed);
  })();

  speedMeter.addEventListener("change", function (e) {
    speed = 300 / e.target.value;
  });
});
