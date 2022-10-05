const board = document.querySelector(".board");

for (i = 0; i < board.clientHeight/5; i++) {
    let row = document.createElement("div");
    row.style.cssText = "background-color: black; display:flex; flex-direction: column;"
    board.appendChild(row);
    for(j = 0; j < board.clientWidth/5; j+=5) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.cssText = "width: 10px; height: 10px;";
        row.appendChild(square);
    }
}

function changeBoardSize(size) {
    board.style.height = `${size}px`;
    board.style.width = `${size}px`;
    return ;
}

function randomColor () {
    let color = Math.floor(Math.random()*16777215).toString(16);
    return "#" + color;
}

let gameSize = document.querySelectorAll(".game-size");

gameSize.forEach(gameSize => {
    
})


let toColor = document.querySelectorAll(".square");
toColor.forEach(toColor => {
    toColor.addEventListener("mouseover", () => {
        toColor.style.backgroundColor = `${randomColor()};`
    })
})