document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.querySelector(".textarea");
  const tagsContainer = document.querySelector(".tags-container");

  function createTag(tagText) {
    const tagElement = document.createElement("div");
    tagElement.classList.add("tag");
    tagElement.textContent = tagText;

    return tagElement;
  }

  function clearTags() {
    tagsContainer.innerHTML = "";
  }

  function onEnterPress() {
    textarea.value = "";
    findRandom();
  }

  function findRandom() {
    const allTags = document.querySelectorAll(".tag");

    const highlightCount = Math.min(allTags.length, 10);

    for (let i = 0; i < highlightCount; i++) {
      setTimeout(function () {
        removeAllHighlight();
        const randomValue = Math.floor(Math.random() * allTags.length);
        allTags[randomValue].classList.add("highlight");
      }, i * 300);
    }
  }

  function removeAllHighlight() {
    const allTags = document.querySelectorAll(".tag");
    allTags.forEach((tag) => tag.classList.remove("highlight"));
  }

  function handleTextareaInput(event) {
    const text = event.target.value;
    if (text.slice(-1) === "\n") {
      onEnterPress();
      return;
    }
    let tags = text.split(",").filter((t) => t.trim() !== "");

    clearTags();

    tags.forEach((tag) => {
      const tagElement = createTag(tag);
      tagsContainer.appendChild(tagElement);
    });
  }

  textarea.addEventListener("input", handleTextareaInput);
});
