document.addEventListener("DOMContentLoaded", () => {
  const ratingContainer = document.querySelector(".rating-container");
  const panelContainer = document.querySelector(".panel-container");
  const submitReviewButton = document.querySelector(".submit-btn");
  let selectedRating = "Satisfied";

  ratingContainer.addEventListener("click", function (e) {
    if (e.target.parentElement.classList.contains("rating")) {
      removeAllActiveClass();
      e.target.parentElement.classList.add("active");
      selectedRating =
        e.target.parentElement.querySelector(".type").textContent;
    }
  });

  function removeAllActiveClass() {
    document
      .querySelectorAll(".rating")
      .forEach((rating) => rating.classList.remove("active"));
  }

  submitReviewButton.addEventListener("click", function () {
    panelContainer.innerHTML = `
        <i class="fa fa-heart fa-2x"></i>
        <p>Thank You!</p>
        <strong>Feedback: ${selectedRating}</strong> <br/>
        <P>
            We'll use your feedback to improve our <br/> customer support
        </P>
    `;
  });
});
