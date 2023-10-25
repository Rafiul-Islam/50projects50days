document.addEventListener("DOMContentLoaded", () => {
  const movieContainer = document.querySelector(".movie-container");
  const movieTemplate = document.querySelector("[movie-template]");
  const form = document.querySelector("#form");
  const searchInput = document.querySelector("input");

  const apiEndPoint =
    "https://api.themoviedb.org/3/discover/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
  const searchBaseUrl =
    "https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=";
  const posterBaseUrl = "https://image.tmdb.org/t/p/w1280";
  const defaultPoster =
    "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1925&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let movies = [];

  async function fetchDate(url) {
    const { data } = await axios(url);

    movies = [...data.results];
    console.log(movies);
    generateMovie();
  }

  function generateMovie() {
    movieContainer.innerHTML = "";

    if (movies.length === 0) {
      movieContainer.innerHTML =
        "<h1 class='not-found-text'>No Movie Found</h1>";
    }

    movies.forEach((movie) => {
      const { poster_path, title, overview, vote_average } = movie;

      const movieNode = movieTemplate.content.cloneNode(true).children[0];

      const poster = movieNode.querySelector(".header img");
      poster.setAttribute("alt", title);
      if (poster_path) {
        poster.src = posterBaseUrl + poster_path;
      } else {
        poster.src = defaultPoster;
      }

      const movieTitle = movieNode.querySelector(".body .movie-info h3");
      movieTitle.textContent = title;

      const rating = movieNode.querySelector(".body .movie-info .rating");
      rating.textContent = vote_average.toFixed(1);
      setRatingTagColor(rating, vote_average);

      const movieOverview = movieNode.querySelector(".body .overview span");
      movieOverview.textContent = overview;

      movieContainer.appendChild(movieNode);
    });
  }

  function setRatingTagColor(element, rating) {
    if (rating < 5) {
      element.classList.add("bad");
    } else if (5 < rating && rating < 8) {
      element.classList.add("avg");
    } else element.classList.add("good");
  }

  fetchDate(apiEndPoint);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchDate(`${searchBaseUrl}${searchInput.value}`);
    form.reset();
  });
});
