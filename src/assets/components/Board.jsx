import { useEffect, useState } from "react"
import emptyBoard from "../data/initialBoard"
import { puzzles, thisPuzzle, FromPuzzleToBoard } from "../data/examples"
import Cell from "./Cell"
import updateCell from "../utils/updateCell"

export default function Board() {
    const [board, setBoard] = useState(thisPuzzle)
    const [selectedCellID, setSelectedCellID] = useState(null)

    //to handle cell selection
    function handleCellClick(e) {

        const id = e.currentTarget.getAttribute('data-id')
        setSelectedCellID(id)

    }

    //to type/modify/delete numbers inside the cells
    useEffect(()=> {
        const handleKeyPress = (e) => {
            if (selectedCellID && e.key >= '1' && e.key <= '9')  {
                setBoard(board.map(cell =>
                    cell.id === selectedCellID ? updateCell(cell, parseInt(e.key)) : cell
                ))
            }
            if (selectedCellID && e.key === 'Backspace' || e.key === 'Delete') {
                setBoard(board.map(cell => 
                    cell.id === selectedCellID ? updateCell(cell, null) : cell
                ))
            }
        }
        window.addEventListener('keydown', handleKeyPress)
        return () => window.removeEventListener('keydown', handleKeyPress)
    }, [selectedCellID, board])


    //To de-select: handle clicks outside the board
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest('.board')) {
                setSelectedCellID(null)
            }
        }
        
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [])


    return(
        <div className="board">
            {board.map(cell => 
                <Cell 
                    id={cell.id} 
                    value={cell.value} 
                    isinitial={cell.isInitial} 
                    handleClick={handleCellClick}
                    key={cell.id}/>
                )
            }
        </div>
    )
}