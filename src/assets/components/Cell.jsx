export default function Cell(props) {

    return(
        <div className="cell" id={props.id} value={props.value} onClick={props.handleClick}>
            {props.value ? <span> {props.value} </span> : <span></span>}
        </div>
    )
}