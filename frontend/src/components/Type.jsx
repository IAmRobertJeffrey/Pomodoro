import { TypeOption } from "../styles/Timer.styled"
import { useState } from "react";

const Type = ({first, last, time, setTime, startStop, setChoose, choose}) => 
{
    
    function changeMode(timeQuantity)
    {
        
        if(startStop === "Start")
        {
            setChoose(true)
            setTime(timeQuantity)
        }
      
    }

    return (
        <>
       {first === true ?
       
       <TypeOption onClick={()=> changeMode(1500)} style={{borderTopLeftRadius:"1rem"}}>
        <p>Work</p>
       </TypeOption> : null}

       {last === true ?
       
        <TypeOption onClick={()=> changeMode(600)} style={{borderTopRightRadius:"1rem"}}>
            <p>Long Break</p>
        </TypeOption> : null}

        {!last && !first ?
       
       <TypeOption onClick={()=> changeMode(300)}><p>Break</p></TypeOption> : null}
        </>
    )
}

export default Type
