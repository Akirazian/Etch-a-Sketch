
createBox(16);

const sizeValue = document.getElementById("size-value");
const slider = document.getElementById("slider");
slider.addEventListener("mouseup", () => createBox(slider.value));
slider.addEventListener("input", () => {
  sizeValue.innerText = `${slider.value} x ${slider.value}`;
});

function getRandomColor() {
  let randomNumber = Math.floor(Math.random()*16777215);
  return randomNumber.toString(16);
}

function createBox(size) {
  let container = document.getElementById("container");
  container.innerHTML = ""

  for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    column.classList.add("column");

    for (let i = 0; i < size; i++) {
      let row = document.createElement("div");
      row.classList.add("row");
      row.addEventListener("mouseenter", () => {
        row.style.backgroundColor = "#" + getRandomColor();
      });
      column.appendChild(row);
    }
    container.appendChild(column);
  }
}
