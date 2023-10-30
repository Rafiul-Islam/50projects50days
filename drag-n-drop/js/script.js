document.addEventListener("DOMContentLoaded", () => {
  const filled = document.querySelector(".fill");
  const empties = document.querySelectorAll(".empty");

  filled.addEventListener("dragstart", dragStart);
  filled.addEventListener("dragend", dragEnd);

  empties.forEach((empty) => {
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", drop);
  });

  function drag() {}
  function dragStart() {
    this.className += " hold";
    setTimeout(() => {
      this.className = "invisibale";
    }, 0);
  }

  function dragEnd() {
    this.className = "fill";
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    e.preventDefault();
    this.className += " hovered";
  }

  function dragLeave() {
    this.className = "empty";
  }

  function drop() {
    this.className = "empty";
    this.append(filled);
  }
});
