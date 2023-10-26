document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const slides = document.querySelectorAll(".slide");
  const leftButton = document.querySelector("#left");
  const rightButton = document.querySelector("#right");

  let activeSlide = 0;

  function updateSlide() {
    activeSlide = Math.abs((activeSlide + slides.length) % slides.length);
    slides[activeSlide].classList.add("active");
  }

  function updateBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
  }

  function removeAllActiveClass() {
    slides.forEach((slide) => slide.classList.remove("active"));
  }

  leftButton.addEventListener("click", () => {
    activeSlide--;
    removeAllActiveClass();
    updateSlide();
    updateBgToBody();
  });

  rightButton.addEventListener("click", () => {
    activeSlide++;
    removeAllActiveClass();
    updateSlide();
    updateBgToBody();
  });
});
