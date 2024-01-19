document.addEventListener("DOMContentLoaded", () => {
  const search = document.querySelector(".search-field");
  const usersContainer = document.querySelector(".users-section");
  const loadingText = document.querySelector(".loading-text");

  (async function fetchUsers() {
    let response = await fetch("https://randomuser.me/api?results=50");
    response = await response.json();
    const users = response.results;

    loadingText.classList.add("hide");
    processData(users);
  })();

  function processData(users) {
    users.forEach((user) => {
      const { name, location, picture } = user;

      const { first, last } = name;
      const fullName = `${first} ${last}`;

      const { city, country } = location;
      const address = `${city}, ${country}`;

      const { thumbnail } = picture;

      creareCard(fullName, address, thumbnail);
    });
  }

  function creareCard(name, location, picture) {
    const card = document
      .querySelector("[card-template]")
      .content.children[0].cloneNode(true);

    card.querySelector("[picture]").src = picture;
    card.querySelector("[name]").textContent = name;
    card.querySelector("[address]").textContent = location;

    usersContainer.appendChild(card);
  }

  search.addEventListener("input", function (e) {
    const searchText = e.target.value;
    filterUser(searchText);
  });

  function filterUser(searchText) {
    const users = document.querySelectorAll(".card");

    users.forEach((user) => {
      const username = user.querySelector("[name]").textContent.toLowerCase();
      const userAddress = user
        .querySelector("[address]")
        .textContent.toLowerCase();

      if (!username.includes(searchText) && !userAddress.includes(searchText)) {
        user.classList.add("hide");
      } else {
        if (user.classList.contains("hide")) {
          user.classList.remove("hide");
        }
      }
    });
  }
});
