document.addEventListener("DOMContentLoaded", () => {
  const toasts = document.querySelector(".toasts");
  const button = document.querySelector("#button");

  const messages = [
    "Notification One",
    "Notification Two",
    "Notification Three",
    "Notification Four",
  ];

  const notificationType = ["success", "error", "info", "normal", "warrning"];

  button.addEventListener("click", createNotification);

  function createNotification() {
    const notify = document.createElement("div");
    notify.classList.add("toast", getToastType());
    notify.textContent = getNotificationText();

    toasts.appendChild(notify);

    setTimeout(() => notify.remove(), 4000);
  }

  function getNotificationText() {
    return messages[Math.floor(Math.random() * messages.length)];
  }

  function getToastType() {
    return notificationType[
      Math.floor(Math.random() * notificationType.length)
    ];
  }
});
