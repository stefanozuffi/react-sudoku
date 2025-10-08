import { useEffect, useState } from "react"
import initialBoard from "../data/initialBoard"
import Cell from "./Cell"
import updateCell from "../utils/updateCell"


export default function Board() {
    const [board, setBoard] = useState(initialBoard)
    const [selectedCell, setSelectedCell] = useState(null)

    function handleCellClick(e) {

        const id = e.currentTarget.getAttribute('data-id')
        const thisCell = board.find(cell => cell.id === id)
        
        board.find(cell => cell.id === id) ? setSelectedCell(thisCell) : console.log('Cell not found -- id:', id)
        console.log('you clicked cell:', selectedCell.id)
    }

    useEffect(()=> {
        const handleKeyPress = (e) => {
            if (selectedCell && e.key >= '1' && e.key <= '9')  {
                setBoard(board.map(cell =>
                    cell === selectedCell ? updateCell(selectedCell, parseInt(e.key)) : cell
                ))
            }
            if (selectedCell && e.key === 'Backspace' || e.key === 'Delete') {
                setBoard(board.map(cell => 
                    cell === selectedCell ? updateCell(selectedCell, null) : cell
                ))
            }
        }
        window.addEventListener('keydown', handleKeyPress)
        return () => window.removeEventListener('keydown', handleKeyPress)
    }, [selectedCell, board])

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