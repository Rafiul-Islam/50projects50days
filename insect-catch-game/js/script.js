document.addEventListener("DOMContentLoaded", function () {
  const gameStartingButton = document.querySelector("#gameStartingButton");

  const screen2 = document.querySelector("#screen2");
  const screen3 = document.querySelector("#screen3");

  const boxes = document.querySelectorAll(".box");

  let selectedInsectedImage = "";

  let score = 0;
  let time = 0;

  const insectShape = 100;

  const insectContainer = document.querySelector("#insectContainer");
  const insectContainerHeight = insectContainer.offsetHeight;
  const insectContainerWidth = insectContainer.offsetWidth;

  const timeContainer = document.querySelector("#time");
  const scoreContainer = document.querySelector("#score");

  const alert = document.querySelector(".alert");

  gameStartingButton.addEventListener("click", function () {
    screen2.scrollIntoView();
  });

  boxes.forEach((box) => {
    box.addEventListener("click", function () {
      selectedInsectedImage = box.querySelector("img").getAttribute("src");
      screen3.scrollIntoView();

      setTimeout(() => {
        generateInsectImage();
        timeHandler();
      }, 1000);
    });
  });

  function getRandomPosition() {
    const position = {
      x: +Math.random() * (insectContainerWidth - insectShape),
      y: +Math.random() * (insectContainerHeight - insectShape),
    };

    return position;
  }

  function timeHandler() {
    setInterval(() => {
      time++;

      const hour = parseInt(time / 3600);
      const minite = parseInt(time / 60);
      const second = time % 60;

      if (hour > 0) {
        timeContainer.textContent = `${hour < 10 ? "0" + hour : hour}:${
          minite < 10 ? "0" + minite : minite
        }:${second < 10 ? "0" + second : second}`;
      } else {
        timeContainer.textContent = `${minite < 10 ? "0" + minite : minite}:${
          second < 10 ? "0" + second : second
        }`;
      }
    }, 1000);
  }

  function scoreHandler() {
    scoreContainer.textContent = score;

    if (score === 20) {
      console.log();
      alert.classList.add("visible");
    }
  }

  function generateInsectImage() {
    const img = document.createElement("img");
    img.classList.add("insect");
    img.src = selectedInsectedImage;
    img.style.transform = `rotate(${+Math.random() * 360}deg)`;

    const { x, y } = getRandomPosition();
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    img.addEventListener("click", function () {
      score++;
      this.style.animation = "remove 0.5s ease-in";
      setTimeout(() => {
        this.remove();
      }, 450);
      scoreHandler();

      setTimeout(() => {
        generateInsectImage();
      }, 1000);

      setTimeout(() => {
        generateInsectImage();
      }, 1500);
    });

    insectContainer.append(img);
  }
});
