const BOARD_FRAME = document.querySelector(".game-board");

//Main Function
function DrawBoard(size) {
    //check for elements to remove in case of resizing
    while (BOARD_FRAME.firstChild) {
        BOARD_FRAME.removeChild(BOARD_FRAME.lastChild);
    }
    //Draw elements on the board

    let gameBoard = document.createElement("div");
    gameBoard.classList.add("board");
    BOARD_FRAME.appendChild(gameBoard);

    for (i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.style.cssText = "background-color: grey; display:flex; flex-direction: column;"
        gameBoard.appendChild(row);
        for(j = 0; j < size; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.cssText = `width: ${BOARD_FRAME.clientWidth/size}px; height: ${BOARD_FRAME.clientHeight/size}px;`;
            row.appendChild(square);
        }
    }
}


// Initiate board with bigger size as default
DrawBoard(10) 


//function to return HEX color randomly
function randomColor () {
    let color = Math.floor(Math.random()*16777215).toString(16);
    return "#" + color;
}


// change board pixel sizes
let squareSize = document.querySelectorAll(".game-size");
squareSize.forEach(squareSize => {
    squareSize.addEventListener("click", () => {
        DrawBoard(squareSize.value)
    })
})


// set square drawing color
function drawingColor(color) {
    let toColor = document.querySelectorAll(".square");
    if (color === "random") {      
        toColor.forEach(toColor => {
            toColor.addEventListener("mouseover", () => {
                toColor.style.backgroundColor = randomColor();
            })
        })  
    }
    toColor.forEach(toColor => {
        toColor.addEventListener("mouseover", () => {
            toColor.style.backgroundColor = color;
        })
    })
}


// change square color
let squareColor = document.querySelectorAll(".color");
squareColor.forEach(squareColor => {
    squareColor.addEventListener("click", () => {
        drawingColor(squareColor.value)
    })
})