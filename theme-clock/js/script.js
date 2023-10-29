document.addEventListener("DOMContentLoaded", function () {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const moodButton = document.querySelector(".mood-btn");

  const hourHand = document.querySelector(".hour");
  const minuteHand = document.querySelector(".minute");
  const secondHand = document.querySelector(".second");

  const timeText = document.querySelector(".text-container h1");
  const dayText = document.querySelector(".text-container p");
  const dateText = document.querySelector(".text-container p + span");

  setClock();
  setInterval(setClock, 1000);

  moodButton.addEventListener("click", function () {
    const html = document.querySelector("html");
    html.classList.toggle("dark");
    if (html.classList.contains("dark")) {
      this.textContent = "Light Mood";
    } else this.textContent = "Dark Mood";
  });

  function setClock() {
    const currentTime = new Date();
    const second = currentTime.getSeconds();
    const minute = currentTime.getMinutes();
    const hour = currentTime.getHours();

    const secondRatio = second / 60;
    const minuteRatio = (secondRatio + minute) / 60;
    const hourRatio = (minuteRatio + hour) / 12;

    secondHand.style.setProperty("--hand-rotation", secondRatio * 360);
    minuteHand.style.setProperty("--hand-rotation", minuteRatio * 360);
    hourHand.style.setProperty("--hand-rotation", hourRatio * 360);

    const ampm = hour >= 12 ? "PM" : "AM";

    const minuteText = minute < 10 ? `0${minute}` : minute;
    const hourText = hour < 10 ? `0${hour}` : hour;

    const timeFormat = `${hourText == 0 ? "12" : hour}:${minuteText} ${ampm}`;
    const dateFormat = `${daysOfWeek[currentTime.getDay()]}, ${
      monthsOfYear[currentTime.getMonth()]
    }`;

    timeText.textContent = timeFormat;
    dayText.textContent = dateFormat;
    dateText.textContent = currentTime.getDate();
  }
});
