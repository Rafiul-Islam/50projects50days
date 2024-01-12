document.addEventListener("DOMContentLoaded", function () {
  const initialSection = document.querySelector(".initial");
  const replayButton = document.querySelector("#replayBtn");
  const countAreaWrapper = document.querySelector(".count-area-wrapper");

  const countStartFrom = 3;
  const countArea = document.querySelector(".count-area");

  for (let i = countStartFrom; i >= 0; i--) {
    const countTag = createEelemnt(i);
    countArea.appendChild(countTag);
  }

  function createEelemnt(text) {
    const p = document.createElement("p");
    p.textContent = text;
    return p;
  }

  const allCountTags = document.querySelectorAll(".count-area > p");
  countInAndOutStart();

  function countInAndOutStart() {
    for (let i = 0; i <= countStartFrom; i++) {
      setTimeout(() => {
        countInAndOut(i);
      }, 2000 * i);
    }
  }

  function countInAndOut(i) {
    allCountTags[i].style.display = "block";
    allCountTags[i].classList.add("in");

    setTimeout(() => {
      allCountTags[i].classList.add("out");
      hide(i);
    }, 1500);
  }

  function hide(i) {
    setTimeout(() => {
      allCountTags[i].style.display = "none";
      allCountTags[i].classList.remove("in");
      allCountTags[i].classList.remove("out");

      if (i === countStartFrom) {
        showInitialSection();
      }
    }, 500);
  }

  function showInitialSection() {
    countAreaWrapper.style.display = "none";
    initialSection.classList.add("show");
  }

  replayButton.addEventListener("click", () => {
    initialSection.classList.remove("show");

    setTimeout(() => {
      countAreaWrapper.style.display = "block";
      countInAndOutStart();
    }, 500);
  });
});
