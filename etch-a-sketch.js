const container = document.getElementById("container");
const sizeValue = document.getElementById("size-value");
const slider = document.getElementById("slider");
const blackButton = document.getElementById("black-button");
const rainbowButton = document.getElementById("rainbow-button");
const eraserButton = document.getElementById("eraser-button");
const clearButton = document.getElementById("clear-button");
const colorPicker = document.getElementById("color-picker");

let color = "black";

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
      row.addEventListener("mouseenter", (event) => {
        console.log(event);
        if (drawMode == false) return;
        if (color === "rainbow") {
          row.style.backgroundColor = "#" + getRandomColor();
        } else { row.style.backgroundColor = color;
        }
      });
      column.appendChild(row);
    }
    container.appendChild(column);
 
  }
}

let drawMode = true;
container.addEventListener("click", () =>{
  if (drawMode === false) { 
    drawMode = true;
    } else {
    drawMode = false;
    }
});

//Event listeners
slider.addEventListener("change", () => createBox(slider.value));
slider.addEventListener("input", () => {sizeValue.innerText = `${slider.value} x ${slider.value}`});
blackButton.addEventListener("click", () => color = "black");
rainbowButton.addEventListener("click", () => color = "rainbow");
eraserButton.addEventListener("click", () => color = "white");
clearButton.addEventListener("click", () => createBox(slider.value));
colorPicker.addEventListener("change", () => color = colorPicker.value);
colorPicker.addEventListener("mouseup", () => color = colorPicker.value); //just in case the user switches back to their chosen color, but doesn't change it!


createBox(16); // start with default size