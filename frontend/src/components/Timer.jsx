import { DigitContainer, TimerContainer } from "../styles/Timer.styled"
import { useEffect, useState } from "react"
import Digit from "./Digit"
import TypeSelector from "./TypeSelector"
import ToggleTimerButton from "./ToggleTimerButton"
import useSound from 'use-sound';
import finished from '../sound/completeSession.wav'

const Timer = () => 
{
    const [time, setTime] = useState(5)
    const [startStop, setStartStop] = useState("Start")
    const [btnBackground, setBtnBackground] = useState("#08aeea");
    const [playFinished] = useSound(finished, { volume: 0.05 });
    
  
    const hours = Math.floor(time / 3600);
    const newTime = time - hours * 3600;
    var minutes = Math.floor(newTime / 60);
    var seconds = newTime - minutes * 60;

        
    useEffect(() => {
        if(startStop === "Pause")
        {
          if(time > 0)
          {
            const interval = setInterval(() => 
            {
              setTime(() => time - 1)
            }, 1000);
            return () => clearInterval(interval);
          }
          else
          {
            playFinished();
            setStartStop("Start")
            setTime(1500)
          }
        }
        
        
      },[startStop, time, playFinished]);
   
   
    return (
       <TimerContainer>
           <TypeSelector startStop={startStop} time={time} setTime={setTime}/>
           <DigitContainer>
           {hours > 0 ? <Digit value={hours}/> : null}{minutes.toString().length === 1 ? <Digit addZero={true} value={minutes}/> : <Digit addZero={false} value={minutes}/>}<h1>:</h1>{seconds.toString().length === 1 ? <Digit addZero={true} value={seconds}/> : <Digit addZero={false} value={seconds}/>}
            </DigitContainer>
            <ToggleTimerButton btnBackground={btnBackground} setBtnBackground={setBtnBackground} startStop={startStop} setStartStop={setStartStop}/>
       </TimerContainer>
    )
}

export default Timer
