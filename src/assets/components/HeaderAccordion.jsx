import { useState } from 'react'
import CaretDown from '../../../src/img/caret-down.svg'
import CaretUp from '../../../src/img/caret-up.svg'
import NestedAcc from './NestedAcc'

export default function HeaderAccordion(props) {
    const [ternary, setTernary] = useState(0)

    function handleClick(e) {
        const id = parseInt(e.currentTarget.getAttribute('data-id'))
        if (id === ternary) {
            setTernary(0) 
        } else {
            setTernary(id)
        }
        
    }
    return(
        <div className="accordion" id='mainAcc'>
            <div className="accordion-head" onClick={props.handleAcc}>
                    <h6 id='AccTxt'>Choose difficulty</h6>
                    <img id='mainCaret' className={`caret ${props.state ? 'colored' : ''}`} src={props.state ? CaretUp : CaretDown} alt="caret"/>  
            </div>
            {
                props.state && 
                <NestedAcc handleClick={handleClick} ternary={ternary} handleChoice={props.handleChoice}/>
            }
        </div>
    )
    
}