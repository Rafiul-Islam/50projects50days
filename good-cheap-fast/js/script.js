document.addEventListener("DOMContentLoaded", () => {
  const togglers = document.querySelectorAll(".toggler");
  const good = document.querySelector("#good");
  const cheap = document.querySelector("#cheap");
  const fast = document.querySelector("#fast");

  togglers.forEach((toggler) => {
    toggler.addEventListener("change", function () {
      this.checked = true;
      this.parentElement.querySelector(".label").classList.toggle("active");
    });
  });

  good.addEventListener("change", function () {
    if (this.checked && cheap.checked) {
      fast.checked = false;
      fast.parentElement.querySelector(".label").classList.remove("active");
    }
  });
  cheap.addEventListener("change", function () {
    if (this.checked && fast.checked) {
      good.checked = false;
      good.parentElement.querySelector(".label").classList.remove("active");
    }
  });

  fast.addEventListener("change", function () {
    if (this.checked && good.checked) {
      cheap.checked = false;
      cheap.parentElement.querySelector(".label").classList.remove("active");
    }
  });
});
