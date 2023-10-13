document.addEventListener("DOMContentLoaded", () => {
  const bg = document.querySelector(".bg");
  const loadText = document.querySelector(".load-text");

  let load = 0;

  let interval = setInterval(blurring, 30);

  function blurring() {
    load++;
    if (load > 100) {
      clearInterval(interval);
    }

    loadText.textContent = scale(load, 0, 100, 100, 0) + "%";
    loadText.style.opacity = scale(load, 0, 100, 1, 0);

    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  }

  // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };
});
