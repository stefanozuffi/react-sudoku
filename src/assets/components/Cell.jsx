export default function Cell(props) {

    return(
        <div className={`cell ${props.isInitial ? 'initial' : 'toFill'} ${props.isSelected ? 'selected' : ''}`} id={props.id} value={props.value} onClick={props.handleClick} data-id={props.id}>
            {props.value ? <span> {props.value} </span> : <span></span>}
        </div>
    )
}