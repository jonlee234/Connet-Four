const map =
    ["EEEEEEE",
        "EEEEEEE",
        "EEEEEEE",
        "EEEEEEE",
        "EEEEEEE",
        "EEEEEEE",

    ]





const connEl = document.getElementById('game')


const createBoard = function (blueprint) {


    for (let rowNum = 0; rowNum < blueprint.length; rowNum++) {
        const rowString = blueprint[rowNum]
        let blockDivs = ''
        for (let colNum = 0; colNum < rowString.length; colNum++) {
            const blockType = rowString[colNum]


            if (blockType === 'E') {
                blockDivs += `<div class ="disc" data-x = "${rowNum}"data-y = "${colNum}"></div> `

            }


        }
        connEl.innerHTML += '<div class="row">' + blockDivs + '</div>'

    }

}

createBoard(map);


let discs = document.querySelectorAll(".disc")
let emptySpaceMessage = document.getElementById("space-message")


function findLastEmptySpot(positionOfY) {
    for (let i = 0; i < discs.length; i++) {
        if (discs[i].dataset.y === positionOfY) {
            for (let k = 0; k < map.length; k++) {
                // console.log(discs[i].classList.contains("player1"))
                if (discs[i].classList.contains("player1") === false && discs[i].classList.contains("player2") === false) {
                    // console.log(discs[i])
                    return discs[i]
                }

            }
        }
    }
    emptySpaceMessage.innerHTML = "There are no empty spaces in that column"
    return false



}

function findDiscWithPositonOf(yPosition, xPosition) {
    for (let i = 0; i < discs.length; i++) {
        if (discs[i].dataset.y === yPosition.toString() && discs[i].dataset.x === xPosition.toString()) {
            return discs[i]
        }
    }
    return false
}

function checkForHorizontal() {
    for (let i = 0; i < discs.length; i++) {
        let currentYposition = Number(discs[i].dataset.y)
        let currentXposition = Number(discs[i].dataset.x)
        if (findDiscWithPositonOf(currentYposition + 3, currentXposition) !== false && findDiscWithPositonOf(currentYposition, currentXposition).classList.contains("player1") && findDiscWithPositonOf(currentYposition + 1, currentXposition).classList.contains("player1")
            && findDiscWithPositonOf(currentYposition + 2, currentXposition).classList.contains("player1") && findDiscWithPositonOf(currentYposition + 3, currentXposition).classList.contains("player1")) {
            console.log("player 1 wins")
            return "Player 1"
        } else if (findDiscWithPositonOf(currentYposition + 3, currentXposition) !== false && findDiscWithPositonOf(currentYposition, currentXposition).classList.contains("player2") && findDiscWithPositonOf(currentYposition + 1, currentXposition).classList.contains("player2")
            && findDiscWithPositonOf(currentYposition + 2, currentXposition).classList.contains("player2") && findDiscWithPositonOf(currentYposition + 3, currentXposition).classList.contains("player2")) {
            console.log("player 2 wins")
            return "Player 2"
        }

    }
    return false

}

function checkForVertical() {
    for (let i = 0; i < discs.length; i++) {
        let currentYposition = Number(discs[i].dataset.y)
        let currentXposition = Number(discs[i].dataset.x)
        if (findDiscWithPositonOf(currentYposition, currentXposition + 3) !== false && findDiscWithPositonOf(currentYposition, currentXposition).classList.contains("player1") && findDiscWithPositonOf(currentYposition, currentXposition + 1).classList.contains("player1")
            && findDiscWithPositonOf(currentYposition, currentXposition + 2).classList.contains("player1") && findDiscWithPositonOf(currentYposition, currentXposition + 3).classList.contains("player1")) {
            console.log("player 1 wins")
            return "Player 1"
        } else if (findDiscWithPositonOf(currentYposition, currentXposition + 3) !== false && findDiscWithPositonOf(currentYposition, currentXposition).classList.contains("player2") && findDiscWithPositonOf(currentYposition, currentXposition + 1).classList.contains("player2")
            && findDiscWithPositonOf(currentYposition, currentXposition + 2).classList.contains("player2") && findDiscWithPositonOf(currentYposition, currentXposition + 3).classList.contains("player2")) {
            console.log("player 2 wins")
            return "Player 2"
        }
    }
    return false
}

function checkForDiagonallyDownAndRight() {
    for (let i = 0; i < discs.length; i++) {
        let currentYposition = Number(discs[i].dataset.y)
        let currentXposition = Number(discs[i].dataset.x)
        if (findDiscWithPositonOf(currentYposition + 3, currentXposition - 3) !== false && findDiscWithPositonOf(currentYposition, currentXposition).classList.contains("player1") && findDiscWithPositonOf(currentYposition + 1, currentXposition - 1).classList.contains("player1")
            && findDiscWithPositonOf(currentYposition + 2, currentXposition - 2).classList.contains("player1") && findDiscWithPositonOf(currentYposition + 3, currentXposition - 3).classList.contains("player1")) {
            console.log("player 1 wins")
            return "Player 1"
        } else if (findDiscWithPositonOf(currentYposition + 3, currentXposition - 3) !== false && findDiscWithPositonOf(currentYposition, currentXposition).classList.contains("player2") && findDiscWithPositonOf(currentYposition + 1, currentXposition - 1).classList.contains("player2")
            && findDiscWithPositonOf(currentYposition + 2, currentXposition - 2).classList.contains("player2") && findDiscWithPositonOf(currentYposition + 3, currentXposition - 3).classList.contains("player2")) {
            console.log("player 2 wins")
            return "Player 2"
        }
    }
    return false
}

function checkForDiagonallyDownAndLeft() {
    for (let i = 0; i < discs.length; i++) {
        let currentYposition = Number(discs[i].dataset.y)
        let currentXposition = Number(discs[i].dataset.x)
        if (findDiscWithPositonOf(currentYposition - 3, currentXposition - 3) !== false && findDiscWithPositonOf(currentYposition, currentXposition).classList.contains("player1") && findDiscWithPositonOf(currentYposition - 1, currentXposition - 1).classList.contains("player1")
            && findDiscWithPositonOf(currentYposition - 2, currentXposition - 2).classList.contains("player1") && findDiscWithPositonOf(currentYposition - 3, currentXposition - 3).classList.contains("player1")) {
            console.log("player 1 wins")
            return "Player 1"
        } else if (findDiscWithPositonOf(currentYposition - 3, currentXposition - 3) !== false && findDiscWithPositonOf(currentYposition, currentXposition).classList.contains("player2") && findDiscWithPositonOf(currentYposition - 1, currentXposition - 1).classList.contains("player2")
            && findDiscWithPositonOf(currentYposition - 2, currentXposition - 2).classList.contains("player2") && findDiscWithPositonOf(currentYposition - 3, currentXposition - 3).classList.contains("player2")) {
            console.log("player 2 wins")
            return "Player 2"
        }
    }
    return false

}

function displayWinningMessage(player) {
    messageDiv.style.display = "none"
    let endMessageContainer = document.getElementById('end-message')
    endMessageContainer.innerHTML = `<h1>Congratulations! ${player} Has Won The Game!!</h1>`
}

function displayTieMessage() {
    messageDiv.style.display = "none"
    let message = document.getElementById("end-message")
    message.innerHTML = "<h1>The game is a Tie</h1>"
    console.log("tie")
}


const messageDiv = document.getElementById("turn-message")
// console.log(discs)
let playerCounter = 1
let discCount = 0

let finishedGame = false

let restart = document.getElementById("restartButton")
// restart.onclick = createBoard(map)
function restartBoard() {
    location.reload()
}

restart.addEventListener("click", restartBoard)

function addDisc(event) {
    // console.log(event.target)
    emptySpaceMessage.innerHTML = ""
    if (finishedGame) {
        return
    }
    // checkforColumn()
    if (playerCounter % 2 === 1) {
        let yPosition = event.target.dataset.y
        let emptySpot = findLastEmptySpot(yPosition)
        if (emptySpot === false) {
            return console.log("no more spaces")
        }
        emptySpot.classList.add("player1")
        playerCounter++
        messageDiv.innerHTML = "Player 2's turn"
        discCount++

    }
    else if (playerCounter % 2 === 0) {
        let yPosition = event.target.dataset.y
        let emptySpot = findLastEmptySpot(yPosition)
        if (emptySpot === false) {
            return console.log("no more spaces")
        }
        emptySpot.classList.add("player2")
        playerCounter--
        messageDiv.innerHTML = "Player 1's turn"
        discCount++
    }

    if (checkForHorizontal() === "Player 1") {
        displayWinningMessage("Player 1")


        finishedGame = true
    } else if (checkForHorizontal() === "Player 2") {
        displayWinningMessage("Player 2")


        finishedGame = true
    }

    if (checkForVertical() === "Player 1") {
        displayWinningMessage("Player 1")
        finishedGame = true
    } else if (checkForVertical() === "Player 2") {
        displayWinningMessage("Player 2")
        finishedGame = true
    }

    if (checkForDiagonallyDownAndRight() === "Player 1") {
        displayWinningMessage("Player 1")
        finishedGame = true
    } else if (checkForDiagonallyDownAndRight() === "Player 2") {
        displayWinningMessage("Player 2")
        finishedGame = true
    }

    if (checkForDiagonallyDownAndLeft() === "Player 1") {
        displayWinningMessage("Player 1")
        finishedGame = true
    } else if (checkForDiagonallyDownAndLeft() === "Player 2") {
        displayWinningMessage("Player 2")
        finishedGame = true
    }

    if (discCount === 42) {
        displayTieMessage()
    }



}







connEl.addEventListener('click', addDisc)
