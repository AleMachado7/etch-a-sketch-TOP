const board = document.querySelector(".board");

for (i = 1; i <= 32; i++) {
    let row = document.createElement("div");
    row.style.cssText = "background-color: black; display:flex; flex-direction: column; flex:1;";
    board.appendChild(row);
    for(j = 1; j <= 32; j++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.cssText = "width:5px; height: 5px;";
        row.appendChild(square);
    }
}

function changeBoardSize(size) {
    for (i = 1; i <= size; i++) {
        let row = document.createElement("div");
        row.style.cssText = "background-color: white; display:flex; flex-direction: column; flex:1;";
        board.appendChild(row);
        for(j = 1; j <= size; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.cssText = "width:5px; height: 5px;"
            row.appendChild(square)
        }
    }    
}

function randomColor () {
    let color = Math.floor(Math.random()*16777215).toString(16);
    return "#" + color;
}

toColor = document.querySelectorAll(".square");
toColor.forEach(toColor => {
    toColor.addEventListener("mouseover", () => {
        toColor.style.cssText = `width: 5px; height: 5px; background-color: ${randomColor()};`
    })
})