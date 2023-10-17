document.addEventListener("DOMContentLoaded", function () {
  const sounds = ["sound1", "sound2", "sound3", "sound4", "sound5", "sound6"];
  const btnContainer = document.querySelector(".btn-container");

  sounds.forEach((sound) => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = sound;
    button.addEventListener("click", function () {
      stopAllSound();
      document.getElementById(sound).play();
    });
    btnContainer.appendChild(button);
  });

  function stopAllSound() {
    sounds.forEach((sound) => {
      const song = document.getElementById(sound);
      song.pause();
      song.currentTime = 0;
    });
  }
});
