document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      deactiveAllTabs();
      this.classList.add("active");

      const target = this.getAttribute("data-target");
      document.querySelector(`#${target}`).classList.add("active");
    });
  });

  function deactiveAllTabs() {
    tabButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    tabContents.forEach((tab) => {
      tab.classList.remove("active");
    });
  }
});
