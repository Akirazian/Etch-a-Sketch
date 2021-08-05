
for (let i = 0; i < 16; i++) {
  let column = document.createElement("div");
  column.id = "column";

  for (let i = 0; i < 16; i++) {
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

