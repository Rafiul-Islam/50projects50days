document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector("#prevBtn");
  const nextButton = document.querySelector("#nextBtn");
  const carousel = document.querySelector(".image-carousel");
  const allSlides = document.querySelectorAll(".image-carousel img");

  let activeSlide = 0;
  const slideChangingTime = 3000;

  setInterval(() => {
    activeSlide++;
    if (activeSlide >= allSlides.length) {
      activeSlide = 0;
    }
    updateSlide();
  }, slideChangingTime);

  function updateSlide() {
    carousel.style.transform = `translateX(-${activeSlide * 400}px)`;
  }

  prevButton.addEventListener("click", () => {
    activeSlide--;
    updateSlide();
  });

  nextButton.addEventListener("click", () => {
    activeSlide++;
    updateSlide();
  });
});
