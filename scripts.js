const board = document.querySelector(".board");

for (i = 1; i <= 16; i++) {
    let row = document.createElement("div");
    row.style.cssText = "background-color: rgb(0, 0, 0);";
    board.appendChild(row);
    for(j = 1; j <= 16; j++) {
        let square = document.createElement("div");
        square.textContent = `${i}`;
        row.appendChild(square)
    }
}

