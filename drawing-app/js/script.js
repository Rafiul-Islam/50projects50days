const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const clear = document.querySelector(".clear");
const incrementLineWidthButton = document.querySelector(".increment");
const decrementLineWidthButton = document.querySelector(".decrement");
const lineWidthValueShowElement = document.querySelector(".value");
const colorPicker = document.querySelector("#color");

const MIN_LINE_WIDTH = 5;
const MAX_LINE_WIDTH = 40;
const INCREMENT_BY = 5;

let x;
let y;
let size = 10;
let color = "#000";
let isPressed = false;

canvas.addEventListener("mousedown", function (e) {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mousemove", function (e) {
  if (isPressed) {
    let x2 = e.offsetX;
    let y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

canvas.addEventListener("mouseup", function () {
  isPressed = false;
  x = undefined;
  y = undefined;
});

decrementLineWidthButton.addEventListener("click", function () {
  size -= INCREMENT_BY;
  if (size < 5) {
    size = 5;
  }
  lineWidthValueShowElement.textContent = size;
});

incrementLineWidthButton.addEventListener("click", function () {
  size += INCREMENT_BY;
  if (size > 40) {
    size = 40;
  }
  lineWidthValueShowElement.textContent = size;
});

colorPicker.addEventListener("change", function (e) {
  color = e.target.value;
});

clear.addEventListener("click", function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  reset();
});

function reset() {
  x = undefined;
  y = undefined;
  size = 10;
  color = "#000";
  isPressed = false;

  lineWidthValueShowElement.textContent = size;
  colorPicker.value = color;
}

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
