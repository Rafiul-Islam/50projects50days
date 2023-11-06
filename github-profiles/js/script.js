document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form");
  const search = document.querySelector("#search");

  const infoCardNotFound = document.querySelector(".info-card-not-found");

  const infoCard = document.querySelector(".info-card");
  const userImage = infoCard.querySelector(".user-image");
  const name = infoCard.querySelector("#name");
  const bio = infoCard.querySelector("#bio");
  const followers = infoCard.querySelector(".followers span");
  const following = infoCard.querySelector(".following span");
  const repos = infoCard.querySelector(".repos span");
  const reposListContainer = infoCard.querySelector(".repos-list");

  const BASE_API = "https://api.github.com/users";

  let username = "";

  form.addEventListener("submit", handleSearch);

  function handleSearch(e) {
    e.preventDefault();
    username = search.value;
    populateUserInfo();
    populateUserRepos();
    this.reset();
  }

  async function populateUserInfo() {
    try {
      const { data } = await axios(`${BASE_API}/${username}`);
      const {
        name: nameText,
        avatar_url,
        bio: bioText,
        followers: followersCouunt,
        following: followingCount,
        public_repos,
      } = data;

      name.textContent = nameText;
      userImage.src = avatar_url;
      bio.textContent = bioText;
      followers.textContent = followersCouunt;
      following.textContent = followingCount;
      repos.textContent = public_repos;
    } catch (error) {
      userNotFound();
    }
  }

  async function populateUserRepos() {
    try {
      const { data } = await axios(
        `${BASE_API}/${username}/repos?sort=created`
      );
      const reposLength = data.length >= 5 ? 5 : data.length;

      let topRepos = [];
      if (reposLength === 5) {
        topRepos = [...data.splice(0, 5)];
      } else {
        topRepos = [...data];
      }

      reposListContainer.innerHTML = "";
      topRepos.forEach((repoObj) => {
        const repo = createRepoTag(repoObj);
        reposListContainer.appendChild(repo);
      });

      infoCard.classList.remove("hide");
      infoCardNotFound.classList.add("hide");
    } catch (error) {
      userNotFound();
    }
  }

  function createRepoTag(repoObj) {
    const { name: repoName, html_url } = repoObj;

    const a = document.createElement("a");
    a.textContent = repoName;
    a.setAttribute("href", html_url);
    a.setAttribute("target", "_blank");
    a.classList.add("repo");

    return a;
  }

  function userNotFound() {
    infoCardNotFound.classList.remove("hide");
    infoCard.classList.add("hide");
  }
});
