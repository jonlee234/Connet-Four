const map =
 ["EEEEEEE",
 "EEEEEEE",
 "EEEEEEE",
 "EEEEEEE",
 "EEEEEEE",
 "EEEEEEE",
 
]





const connEl = document.getElementById('game')


const createMaze = function (blueprint) {


    for (let rowNum = 0; rowNum < blueprint.length; rowNum++) {
        const rowString = blueprint[rowNum]
        let blockDivs = ''
        for (let colNum = 0; colNum < rowString.length; colNum++) {
            const blockType = rowString[colNum]
           

            if (blockType === 'E') {
                blockDivs += `<div id="${rowNum},${colNum}" class ="game"></div>`
               
            }


        }
        connEl.innerHTML += '<div class="row">' + blockDivs + '</div>'

    }

}

createMaze(map);
