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

// function allSpacesfilled() {
//     if (discs.length.classList === "player1" || "player2") {
//         console.log("works")
//     }
// }


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
    return 



}

function checkForHorizontal() {
    for (let i =0; i< discs.length; i++){

    }

}


const messageDiv = document.getElementById("turn-message")
// console.log(discs)
let playerCounter = 1

function addDisc(event) {
    // console.log(event.target)
    emptySpaceMessage.innerHTML = ""

    // checkforColumn()
    if (playerCounter % 2 === 1) {
        let yPosition = event.target.dataset.y
        let emptySpot = findLastEmptySpot(yPosition)
        emptySpot.classList.add("player1")
        playerCounter++
        messageDiv.innerHTML = "Player 2's turn"
    }
    else if (playerCounter % 2 === 0) {
        let yPosition = event.target.dataset.y
        let emptySpot = findLastEmptySpot(yPosition)
        emptySpot.classList.add("player2")
        playerCounter--
        messageDiv.innerHTML = "Player 1's turn"
    }
    // allSpacesfilled()
}





connEl.addEventListener('click', addDisc)
