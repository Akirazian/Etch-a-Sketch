
createBox(16);

const changeButton = document.getElementById("change-button");
changeButton.addEventListener("click", changeSize);

function getRandomColor() {
  let randomNumber = Math.floor(Math.random()*16777215);
  return randomNumber.toString(16);
}

function createBox(size) {
  if (size > 64) return alert("Over 64 is too big! Try again.");

  let container = document.getElementById("container");
  container.innerHTML = ""


  for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    column.id = "column";
  
    for (let i = 0; i < size; i++) {
      let row = document.createElement("div");
      row.classList.add("row");
      row.addEventListener("mouseenter", () => {
        row.style.backgroundColor = "#" + getRandomColor();
      });
      column.appendChild(row);
    }
    let container = document.getElementById("container");
    container.appendChild(column);
  }
}

function changeSize() {
  let newSize = prompt("Number of squares per side?")
  createBox(newSize);
} 
