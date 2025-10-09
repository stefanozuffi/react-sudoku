export default function CheckResult(props) {

    const handleRestart = (puzzle) => {
        props.handleRestart(puzzle)
    }

    return(
        <div className={`container pop-up-container ${props.checkClicked ? 'show': ''}`}>
            <div className={`pop-up win ${props.showWin ? 'show': ''}`}>
                <h3>Congratulation! You solved the Sudoku</h3>
            </div>
            <div className={`pop-up err ${props.showErr ? 'show': ''}`}>
                <h3>Seems like there is an error...</h3>
            </div>
            <div className={`pop-up neither ${!props.showErr && !props.showWin && props.checkClicked ? 'show': ''}`}>
                <h3>No mistakes..but you are not done either!</h3>
            </div>
            <div className="buttons">
                <button onClick={() => handleRestart()} className="btn btn-secondary restart">Restart</button>
                <button onClick={props.handleResume} className="btn btn-secondary resume">Resume</button>
            </div>
            
        </div>
    )
}