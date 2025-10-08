export const EnnaCells = []
for (let row=0; row < 9; row = row+3) {
    for (let col=0; col < 9; col = col+3) {
        const ennaCell = []
        for (let k=0; k<3; k++) {
            for (let j=0; j<3; j++) {
                const cell = {
                    row: row+k,
                    col: col+j
                }
                ennaCell.push(cell)
            }
        }
        EnnaCells.push(ennaCell)
    }
}




export function bruteCheck(board) {

    let mistakes = 0

    //Control Loop
    for (let i=0; i<board.length; i++) {

        const cell = board[i]
        const cellRow = board.filter(otherCell => cell.row === otherCell.row)
        const cellCol = board.filter(otherCell => cell.col === otherCell.col)

        const EnnaCellEmpty = EnnaCells.find(ennaCell => 
            ennaCell.some(otherCell => otherCell.row === cell.row && otherCell.col === cell.col))
        const EnnaCell = board.filter(otherCell => EnnaCellEmpty.some(emptyCell => emptyCell.row === otherCell.row && emptyCell.col === otherCell.col))

        if (cell.value) {
            if (
            !cellRow.every(otherCell => cell.col !== otherCell.col ? cell.value !== otherCell.value : true)
            || !cellCol.every(otherCell => cell.row !== otherCell.row ? cell.value !== otherCell.value : true)
            || !EnnaCell.every(otherCell => cell.col !== otherCell.col || cell.row !== otherCell.row ? cell.value !== otherCell.value : true)
            ) {
                mistakes += 1
                console.log('value', board[i].value, 'row', board[i].row)
                console.log('ARRAYSSSSSS')
                console.log(cellRow, cellCol, EnnaCell)
            }
        }
    }

    if (mistakes > 0) {
        alert('There is a mistake!')
        return false
    } else {
        console.log('No Mistake Found')
        if (board.every(cell => cell.value)) {
            console.log('You solved it!')
            return true
        }
    }
}