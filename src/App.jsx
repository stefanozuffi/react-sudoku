import { useState } from "react"
import AppFooter from "./assets/components/AppFooter"
import AppHeader from "./assets/components/AppHeader"
import AppMain from "./assets/components/AppMain"
import { puzzles,FromPuzzleToBoard } from "./assets/data/examples"


function App() {
  const [board, setBoard] = useState(FromPuzzleToBoard('facile1'))
  const [currentPuzzle, setCurrentPuzzle] = useState('facile1')

  function handleGenerateNew() {
  }

  const handleChoice = (puzzle) => {
    setCurrentPuzzle(puzzle)
    setBoard(FromPuzzleToBoard(puzzle))
  }

  return (
    <>
      <AppHeader 
        onGenerateNew={handleGenerateNew}
        currentPuzzle={currentPuzzle}
        handleChoice={handleChoice}
      />
      <AppMain 
        board={board}
        setBoard={setBoard}
        currentPuzzle={currentPuzzle}
      />
      <AppFooter/>
    </>
  )
}

export default App
