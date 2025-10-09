import { useEffect, useState } from "react";
import GeneratorButton from "./GeneratorButton";
import HeaderAccordion from "./HeaderAccordion";

export default function AppHeader(props) {
    const [firstAcc, setFirstAcc] = useState(false)

    function handleClick() {
        setFirstAcc(!firstAcc)
    }

    useEffect(()=> {
        const handleOutAcc = (e) => {
            if (!e.target.closest('#mainAcc')) {
                console.log('closing the accordion..')
                setFirstAcc(false)
            }
        }
        document.addEventListener('click', handleOutAcc)
        return () => document.removeEventListener('click', handleOutAcc)
    },[])
    
    return( 
        <header className="large-cont">
           
            <div className="container header-container">
                 <GeneratorButton/>
                <h1>Sudoku</h1>
                <HeaderAccordion handleAcc={handleClick} state={firstAcc} handleChoice={props.handleChoice}/>
            </div>
            
        </header>
    )
}