document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");

  for (let i = 0; i < 30; i++) {
    const box = document
      .querySelector("[box-template]")
      .content.children[0].cloneNode(true);
    box.querySelector(
      "[img]"
    ).src = `https://source.unsplash.com/random/30${i}x30${i}`;
    container.appendChild(box);
  }
});
