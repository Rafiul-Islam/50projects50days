document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
      navbar.classList.add("sticky-top");
    } else {
      navbar.classList.remove("sticky-top");
    }
  });
});
