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
        <div className="accordion">
            <div className="accordion-head" onClick={props.handleAcc}>
                    <h6>Choose difficulty</h6>
                    <img className='caret-down' src={props.state ? CaretUp : CaretDown} alt="caret-down"/>  
            </div>
            {
                props.state && 
                <NestedAcc handleClick={handleClick} ternary={ternary}/>
            }
        </div>
    )
    
}