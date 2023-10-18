document.addEventListener("DOMContentLoaded", () => {
  const jokeTextSelector = document.querySelector(".joke");
  const btn = document.querySelector(".btn");

  async function getAndSetJoke() {
    const response = await fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    const { joke } = await response.json();
    jokeTextSelector.textContent = joke;
  }
  getAndSetJoke();

  btn.addEventListener("click", getAndSetJoke);
});
