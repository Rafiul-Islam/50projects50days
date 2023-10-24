document.addEventListener("DOMContentLoaded", () => {
  const bigJar = document.querySelector(".big-jar");
  const bigJarsEmptySection = bigJar.querySelector(".empty");
  const bigJarsEmptySectionText = bigJarsEmptySection.querySelector("strong");
  const bigJarsFilledSection = bigJar.querySelector(".filled");
  const bigJarsFilledSectionText = bigJarsFilledSection.querySelector("h3");
  const smallJars = document.querySelectorAll(".small-jar");

  const haveToDrink = 2;
  const smallJarSize = 0.25;

  smallJars.forEach((smallJar) => {
    smallJar.addEventListener("click", function () {
      smallJar.classList.toggle("filled");
      const filledSamllJarsAmount =
        document.querySelectorAll(".small-jar.filled").length;
      const havedDrinkedYet = smallJarSize * filledSamllJarsAmount;
      const nowHavedToDrink = haveToDrink - havedDrinkedYet;

      const bigJarsFilledSectionHeight = (havedDrinkedYet * 100) / 2;
      bigJarsFilledSection.style.height = bigJarsFilledSectionHeight + "%";

      const bigJarsEmptySectionHeight = 100 - bigJarsFilledSectionHeight;
      bigJarsEmptySection.style.height = bigJarsEmptySectionHeight + "%";

      bigJarsEmptySectionText.textContent = nowHavedToDrink + "L";
      bigJarsFilledSectionText.textContent = bigJarsFilledSectionHeight + "%";
    });
  });
});
