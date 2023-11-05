document.addEventListener("DOMContentLoaded", () => {
  const sliderContainer = document.querySelector(".slider-container");
  const slideLeft = document.querySelector(".left-slide");
  const slideRight = document.querySelector(".right-slide");
  const buttonUp = document.querySelector(".up-button");
  const buttonDown = document.querySelector(".down-button");
  const slidesLength = slideLeft.querySelectorAll("div").length;

  slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

  buttonUp.addEventListener("click", () => slideSwitcher("up"));
  buttonDown.addEventListener("click", () => slideSwitcher("down"));

  let activeSlide = 0;

  function slideSwitcher(direction) {
    const slideHeight = sliderContainer.clientHeight;

    if (direction === "up") {
      activeSlide++;
      if (activeSlide > slidesLength - 1) {
        activeSlide = 0;
      }
    } else if (direction === "down") {
      activeSlide--;
      if (activeSlide < 0) {
        activeSlide = slidesLength - 1;
      }
    }

    slideRight.style.transform = `translateY(-${activeSlide * slideHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlide * slideHeight}px)`;
  }
});
