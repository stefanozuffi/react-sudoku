export default function CheckResult(props) {
    return(
        <div className={`pop-up ${props.checkClicked ? 'show': ''}`}>
            <div className={`pop-up win ${props.showWin ? 'show': ''}`}>
                <h3>Congratulation! You solved the Sudoku</h3>
            </div>
            <div className={`pop-up err ${props.showErr ? 'show': ''}`}>
                <h3>Seems like there is an error...</h3>
            </div>
            <div className={`pop-up neither ${!props.showErr && !props.showWin ? 'show': ''}`}>
                <h3>No mistakes..but you are not done either!</h3>
            </div>
        </div>
    )
}