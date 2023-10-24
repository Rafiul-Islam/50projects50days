document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const incrementBy = Math.ceil(target / 300);

    const updateCounter = () => {
      const counterInnerText = +counter.textContent;

      if (counterInnerText < target) {
        counter.textContent = counterInnerText + incrementBy;
        setTimeout(updateCounter, 1);
      } else counter.textContent = target;
    };

    updateCounter();
  });
});
