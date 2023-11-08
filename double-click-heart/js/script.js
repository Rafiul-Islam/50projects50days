document.addEventListener("DOMContentLoaded", function () {
  const loveMeBox = document.querySelector("#loveMe");
  const times = document.querySelector("#times");
  let lovedCount = 0;

  loveMeBox.addEventListener("dblclick", function (e) {
    const x = e.clientX - this.offsetLeft;
    const y = e.clientY - this.offsetTop;

    const heart = document.createElement("i");
    heart.classList.add("fas", "fa-heart");
    heart.style.top = y + "px";
    heart.style.left = x + "px";

    loveMeBox.appendChild(heart);

    lovedCount++;
    times.textContent = lovedCount;
  });
});
