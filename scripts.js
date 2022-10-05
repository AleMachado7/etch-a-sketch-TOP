function DrawBoard(size) {
    let boardFrame = document.createElement("div").classList.add("board");
    let gameBoard = document.querySelector(".game-board")
    gameBoard.appendChild(boardFrame)
}

let boardFrame = document.createElement("div");
boardFrame.classList.add("board")
let gameBoard = document.querySelector(".game-board")
gameBoard.appendChild(boardFrame)


const board = document.querySelector(".board");

for (i = 0; i < board.clientHeight/10; i++) {
    let row = document.createElement("div");
    row.style.cssText = "background-color: black; display:flex; flex-direction: column;"
    board.appendChild(row);
    for(j = 0; j <= board.clientWidth/10; j++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.cssText = "width: 10px; height: 10px;";
        row.appendChild(square);
    }
}

function DrawBoard(size) {
    board.style.height = `${size}px`;
    board.style.width = `${size}px`;
    gameBoard.removeChild(boardFrame)
    gameBoard.appendChild(boardFrame)

    for (i = 0; i < board.clientHeight/10; i++) {
        let row = document.createElement("div");
        row.style.cssText = "background-color: black; display:flex; flex-direction: column;"
        board.appendChild(row);
        for(j = 1; j <= board.clientWidth/10; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.cssText = "width: 10px; height: 10px;";
            row.appendChild(square);
        }
    }
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
        toColor.style.cssText = `width: 10px; height: 10px; background-color: ${randomColor()};`
    })
})