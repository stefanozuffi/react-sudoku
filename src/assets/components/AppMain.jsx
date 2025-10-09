import Board from "./Board";

export default function AppMain(props) {
    return(
        <main>
            <Board board={props.board} setBoard={props.setBoard}/>
        </main>
        )
        
}