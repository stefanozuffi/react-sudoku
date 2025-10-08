import { EnnaCells,bruteCheck } from "../utils/isSolution"

export default function CheckSolution(props) {

    return(
        <button className="btn btn-primary" onClick={props.handleCheck}>Check for Mistakes</button>
    )
}