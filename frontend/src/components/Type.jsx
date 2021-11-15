import { TypeOption } from "../styles/Timer.styled"

const Type = ({first, last, setTime, startStop, currentTimer, setCurrentTimer, rotation, change,  setChoice, choose1, choose2, choose3, setChoose1, setChoose2, setChoose3, position, setPosition}) => 
{

   

    function changeMode(selectRotation)
    {
        if(startStop === "Start")
        {
            if(selectRotation.type === "Work")
            {
                setCurrentTimer(rotation[0].type)   
                setPosition(0)
                setChoose1(true) 
                setChoose2(false)     
                setChoose3(false)   
               
            }
            else if(selectRotation.type === "Break")
            {
                setCurrentTimer(rotation[1].type)    
                setPosition(-1) 
                setChoose1(false) 
                setChoose2(true)    
                setChoose3(false)   
              
            }
            else if(selectRotation.type === "LongBreak")
            {
                setCurrentTimer(rotation[7].type)
                setPosition(7)
                setChoose1(false) 
                setChoose2(false)    
                setChoose3(true)   
               
            }
            
            setTime(selectRotation.quantity)
        }
      
    }

    return (
        <>
       {first === true ?
       
       <TypeOption choose1={choose1} change={change} className="Work" onClick={()=> changeMode(rotation[0])} style={{borderTopLeftRadius:"1rem"}}>
        <p>Work</p>
       </TypeOption> : null}

       {last === true ?
        
        <TypeOption choose2={choose3}  change={change} className="LongBreak" onClick={()=> changeMode(rotation[7])} style={{borderTopRightRadius:"1rem"}}>
            <p>Long Break</p>
        </TypeOption> : null}

        {!last && !first ?
       
       <TypeOption choose3={choose2} change={change} className="Break" onClick={()=> changeMode(rotation[1])}><p>Break</p></TypeOption> : null}
        </>
    )
}

export default Type
