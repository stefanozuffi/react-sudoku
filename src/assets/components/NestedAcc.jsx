import CaretDown from '../../../src/img/caret-down.svg'
import CaretUp from '../../../src/img/caret-up.svg'
import { puzzles } from '../data/examples'


export default function NestedAcc(props) {

    const handlePuzzleClick = (puzzlename) => {
        props.handleChoice(puzzlename)
    }

    return(
        <div className="nested-accordion accordion">
             <div className="accordion easy-accordion">
                <div className="accordion-head" onClick={props.handleClick} data-id={1}>
                    <h6>Easy</h6>
                    <img className='caret-down' src={props.ternary===1 ? CaretUp : CaretDown} alt="caret-down"/> 
                </div>
                {props.ternary===1 &&
                    <ul>
                        {Object.keys(puzzles).map(puzzle => {
                            if (puzzles[puzzle].difficulty === 'facile') {
                                return (<li key={Object.keys(puzzles).indexOf(puzzle)}> <h6 onClick={()=>handlePuzzleClick(puzzle)}>{puzzle}</h6> </li>)
                            }
                            return null
                        })
                    }  
                    </ul>
                }
             </div>
                
             <div className="accordion medium-accordion">
                <div className="accordion-head" onClick={props.handleClick} data-id={2}>
                    <h6>Medium</h6>
                    <img className='caret-down' src={props.ternary===2 ? CaretUp : CaretDown} alt="caret-down"/> 
                </div>
                {props.ternary===2 &&
                    <ul>
                        {Object.keys(puzzles).map(puzzle => {
                            if (puzzles[puzzle].difficulty === 'medio') {
                                return (<li key={Object.keys(puzzles).indexOf(puzzle)}> <h6 onClick={()=>handlePuzzleClick(puzzle)}>{puzzle}</h6> </li>)
                            }
                            return null
                        })
                    } 
                    </ul>
                }
             </div>
             <div className="accordion difficult-accordion" onClick={props.handleClick} data-id={3}>
                <div className="accordion-head">
                    <h6>Difficult</h6>
                    <img className='caret-down' src={props.ternary===3 ? CaretUp : CaretDown} alt="caret-down"/> 
                </div>
                {props.ternary===3 &&
                    <ul>
                        {Object.keys(puzzles).map(puzzle => {
                            if (puzzles[puzzle].difficulty === 'difficile') {
                                return (<li key={Object.keys(puzzles).indexOf(puzzle)}> <h6 onClick={() => handlePuzzleClick(puzzle)}>{puzzle}</h6> </li>)
                            }
                            return null
                        })
                    } 
                    </ul>
                }
             </div>
        </div>
    )
}