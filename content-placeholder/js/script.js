document.addEventListener("DOMContentLoaded", function () {
  const headerImage = document.querySelector("#header");
  const cardTitle = document.querySelector("#cardTitle");
  const cardExcerpt = document.querySelector("#cardExcerpt");
  const authorImage = document.querySelector("#authorImage");
  const authorName = document.querySelector("#name");
  const publishDate = document.querySelector("#date");

  const animated_bgs = document.querySelectorAll(".animated-bg");
  const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

  const blog = {
    headerImage:
      '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />',
    title: "Lorem ipsum dolor sit amet",
    cardExcerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, rerum.",
    authorImage:
      '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />',
    authorName: "John Doe",
    publishDate: "Oct 10, 2023",
  };

  setTimeout(showContent, 3000);

  function showContent() {
    headerImage.innerHTML = blog.headerImage;
    cardTitle.textContent = blog.title;
    cardExcerpt.textContent = blog.cardExcerpt;
    authorImage.innerHTML = blog.authorImage;
    authorName.textContent = blog.authorName;
    publishDate.textContent = blog.publishDate;

    animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
    animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
  }
});
