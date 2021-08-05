
createBox(16);

const changeButton = document.getElementById("change-button");
changeButton.addEventListener("click", changeSize);

function createBox(size) {
  if (size > 100) return alert("Over 100 is too big! Try again.");

  let container = document.getElementById("container");
  container.innerHTML = ""

  for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    column.id = "column";
  
    for (let i = 0; i < size; i++) {
      let row = document.createElement("div");
      row.id = "row";
      
      row.addEventListener("mouseenter", () => {
        row.classList.add("color");
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
