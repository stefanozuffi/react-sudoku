import { useState } from "react"
import initialBoard from "../data/initialBoard"
import Cell from "./Cell"

export default function Board() {
    const [board, setBoard] = useState(initialBoard)

    return(
        <div className="board">
            {board.map(cell => 
                <Cell id={cell.id} value={cell.value} key={cell.id}/>)
                }
        </div>
       
    )
}