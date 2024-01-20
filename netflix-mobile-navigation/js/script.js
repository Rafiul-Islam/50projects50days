document.addEventListener("DOMContentLoaded", function () {
  const navs = document.querySelectorAll(".nav");
  const navOpenerButton = document.querySelector("#navOpenerButton");
  const navCloserButton = document.querySelector("#navCloserButton");

  navOpenerButton.addEventListener("click", function () {
    navs.forEach((nav) => {
      nav.style.transform = "translateX(0px)";
      setTimeout(() => {
        navs[0].style.transitionDelay = ".4s";
        navs[1].style.transitionDelay = ".2s";
        navs[2].style.transitionDelay = "0s";
      }, 1000);
    });
  });

  navCloserButton.addEventListener("click", function () {
    navs.forEach((nav) => {
      nav.style.transform = "translateX(-385px)";

      setTimeout(() => {
        navs[0].style.transitionDelay = ".0s";
        navs[1].style.transitionDelay = ".2s";
        navs[2].style.transitionDelay = ".4s";
      }, 1000);
    });
  });
});
