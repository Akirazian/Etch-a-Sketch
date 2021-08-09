const container = document.getElementById("container");
const sizeValue = document.getElementById("size-value");
const slider = document.getElementById("slider");
const rainbowButton = document.getElementById("rainbow-button");
const eraserButton = document.getElementById("eraser-button");
const clearButton = document.getElementById("clear-button");
const penColorInput = document.getElementById("pen-color");
const penStatus = document.getElementById("pen-status");
const backgroundColorInput = document.getElementById("background-color")
const toggleGridButton = document.getElementById("toggle-grid");

let color = "#333333";

function getRandomColor() {
  let randomNumber = Math.floor(Math.random()*16777215);
  return randomNumber.toString(16);
}

function createBox(size) {
  container.innerHTML = ""
  for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    column.classList.add("column");

    for (let i = 0; i < size; i++) {
      let row = document.createElement("div");
      row.classList.add("row");
      row.style.backgroundColor = backgroundColorInput.value;
      if (gridMode === false) row.classList.add("gridOff");
      row.addEventListener("mouseenter", () => {
        if (drawMode === false) return;
        if (color === "rainbow") {
          row.style.backgroundColor = "#" + getRandomColor();
        } else row.style.backgroundColor = color;
        row.classList.add("colored");
        if (color === backgroundColorInput.value) { row.classList.remove("colored");}
      });
      column.appendChild(row);
    }
    container.appendChild(column);
  }
}

let eraserMode = false;

function draw() {
  eraserMode = false;
  color = penColorInput.value
}

function changeBackground() { //change background
  let grid = document.querySelectorAll(".row");
  grid.forEach((row) => {
    if (row.classList.contains("colored")) return;
    row.style.backgroundColor = backgroundColorInput.value;
    });
  if (eraserMode == true) color = backgroundColorInput.value; //if eraser was being used, change the eraser color so it matches new background
}

function toggleEraser () { 
  eraserMode = true; 
  color = backgroundColorInput.value;
};

let drawMode = true; //Toggle pen
  container.addEventListener("click", () =>{
  if (drawMode === false) { 
    drawMode = true;
    penStatus.innerHTML = "Pen: <strong>ON</strong>"
    } else {
    drawMode = false;
    penStatus.innerHTML = "Pen: <strong>OFF</strong>"
    }
});

let gridMode = false; //Toggle grid
function toggleGrid() {
  let grid = document.querySelectorAll(".row");
  if (gridMode === true) {
    grid.forEach((row) => row.classList.add("gridOff"));
  } else {
    grid.forEach((row) => row.classList.remove("gridOff"));
  }
  if (gridMode === false) gridMode = true;
  else gridMode = false;
}

//Event listeners
slider.addEventListener("change", () => createBox(slider.value));
slider.addEventListener("input", () => {sizeValue.innerText = `${slider.value} x ${slider.value}`});
rainbowButton.addEventListener("click", () => {
eraserMode = false;
color = "rainbow";
});
eraserButton.addEventListener("click", toggleEraser);
clearButton.addEventListener("click", () => createBox(slider.value));
penColorInput.addEventListener("change", draw);
penColorInput.addEventListener("mouseup", draw); //check for mouse up, just in case the user switches back to their chosen color, but doesn't change it!
backgroundColorInput.addEventListener("input", changeBackground); 
toggleGridButton.addEventListener("click", toggleGrid);

createBox(16); // start with default size
