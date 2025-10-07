import { useEffect, useState } from "react"
import initialBoard from "../data/initialBoard"
import Cell from "./Cell"
import updateCell from "../utils/updateCell"

export default function Board() {
    const [board, setBoard] = useState(initialBoard)
    const [selectedCell, setSelectedCell] = useState(null)

    function handleCellClick() {
        
    }

    useEffect(()=> {
        const handleKeyPress = (e) => {
            if (selectedCell && e.key >= '1' && e.key <= '9')  {
                updateCell(selectedCell, parseInt(e.key))
            }
            if (e.key === 'Backspace' || e.key === 'Delete') {
                updateCell(selectedCell, null);
            }
        }
        window.addEventListener('keypress', handleKeyPress)
        return () => window.removeEventListener('keydown', handleKeyPress)
    }, [selectedCell])

    return(
        <div className="board">
            {board.map(cell => 
                <Cell 
                    id={cell.id} 
                    value={cell.value} 
                    isinitial={cell.isInitial} 
                    // onSelectCell={() => setSelectedCell(cell)} 
                    key={cell.id}/>
                )
            }
        </div>
       
    )
}