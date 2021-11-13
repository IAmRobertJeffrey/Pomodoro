import { TimerContainer } from "../styles/Timer.styled"
import { useState } from "react"
import Digit from "./Digit"


const Timer = () => 
{
    const [time, setTime] = useState(661)
  
    const hours = Math.floor(time / 3600);
    const newTime = time - hours * 3600;
    var minutes = Math.floor(newTime / 60);
    var seconds = newTime - minutes * 60;

    

    const decrement = setInterval(()=> {
        setTime(()=> time - 1)
        clearInterval(decrement);
    }, 1000)

    
  
   
    return (
       <TimerContainer>
           {hours > 0 ? <Digit value={hours}/> : null}{minutes.toString().length === 1 ? <Digit addZero={true} value={minutes}/> : <Digit addZero={false} value={minutes}/>}<h1>:</h1>{seconds.toString().length === 1 ? <Digit addZero={true} value={seconds}/> : <Digit addZero={false} value={seconds}/>}
       </TimerContainer>
    )
}

export default Timer
