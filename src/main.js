const map =
 ["EEEEEEE",
 "EEEEEEE",
 "EEEEEEE",
 "EEEEEEE",
 "EEEEEEE",
 "EEEEEEE",
 
]

let x=5
let y=7





const connEl = document.getElementById('game')


const createBoard = function (blueprint) {


    for (let rowNum = 0; rowNum < blueprint.length; rowNum++) {
        const rowString = blueprint[rowNum]
        let blockDivs = ''
        for (let colNum = 0; colNum < rowString.length; colNum++) {
            const blockType = rowString[colNum]
           

            if (blockType === 'E') {
                blockDivs += `<div class ="disc" data-x = "${rowNum}"data-y = "${colNum}" data></div> `
               
            }


        }
        connEl.innerHTML += '<div class="row">' + blockDivs + '</div>'

    }

}

createBoard(map);


let discs = document.querySelectorAll(".disc")

function addDisc(event){
    console.log(event.target)
    // for(let i = )
}





connEl.addEventListener('click', addDisc)
