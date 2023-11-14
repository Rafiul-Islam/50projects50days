document.addEventListener("DOMContentLoaded", function () {
  const addNoteButton = document.querySelector("#addButton");
  const notesContainer = document.querySelector(".notes-container");
  let notes = [];

  if (localStorage.getItem("notes")) {
    notes = [...JSON.parse(localStorage.getItem("notes"))];
    notes.forEach((note, index) => addNote(note, index + 1));
  }

  addNoteButton.addEventListener("click", () => addNote());

  function addNote(text = "", indx = notes.length + 1) {
    const noteCard = document
      .querySelector("[note-template]")
      .content.cloneNode(true).children[0];
    noteCard.setAttribute("id", `note-${indx}`);

    const textarea = noteCard.querySelector(".textarea");
    const main = noteCard.querySelector(".main");

    if (text.length > 0) {
      textarea.classList.add("hidden");
      main.classList.remove("hidden");
    }

    textarea.value = text;
    main.innerHTML = marked.parse(text);

    noteCard.querySelector("#editButton").addEventListener("click", () => {
      textarea.classList.toggle("hidden");
      main.classList.toggle("hidden");
    });

    noteCard.querySelector("#deleteButton").addEventListener("click", () => {
      deleteFromStorage(noteCard.getAttribute("id"));
      noteCard.remove();
    });

    textarea.addEventListener("input", (e) => {
      const { value } = e.target;
      main.innerHTML = marked.parse(value);
      updateStorage(noteCard.getAttribute("id"), value);
    });

    notesContainer.appendChild(noteCard);
  }

  function updateStorage(cardId, value) {
    localStorage.removeItem("notes");
    notes[parseInt(cardId.replace("note-", "")) - 1] = value;
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  function deleteFromStorage(cardId) {
    cardId = parseInt(cardId.replace("note-", "")) - 1;
    notes.splice(cardId, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
  }
});
