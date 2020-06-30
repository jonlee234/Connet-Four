const map =
    ["EEEEEEE",
        "EEEEEEE",
        "EEEEEEE",
        "EEEEEEE",
        "EEEEEEE",
        "EEEEEEE",

    ]

let x = 5
let y = 7





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


function findLastEmptySpot(positionOfY) {
    for (let i = 0; i < discs.length; i++) {
        if (discs[i].dataset.y === positionOfY) {
            for (let k = 0; k < 6; k++) {
                console.log(discs[i].classList.contains("player1"))
                if (discs[i].classList.contains("player1") === false && discs[i].classList.contains("player2") === false) {
                    console.log(discs[i])
                    return discs[i]
                }

            }
        }
    }
    return console.log("no empty spaces")



}

// console.log(discs)
let playerCounter = 1
function addDisc(event) {
    console.log(event.target)
    if (playerCounter % 2 === 1) {
        let yPosition = event.target.dataset.y
        let emptySpot = findLastEmptySpot(yPosition)
        emptySpot.classList.add("player1")
        playerCounter++
    }
    else if (playerCounter % 2 === 0) {
        let yPosition = event.target.dataset.y
        let emptySpot = findLastEmptySpot(yPosition)
        emptySpot.classList.add("player2")
        playerCounter++

    }
}





connEl.addEventListener('click', addDisc)
