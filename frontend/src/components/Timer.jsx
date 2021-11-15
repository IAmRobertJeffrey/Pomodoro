import { TimerContainer, StopResetContainer } from "../styles/Timer.styled"
import { useEffect, useState } from "react"
import TypeSelector from "./TypeSelector"
import ToggleTimerButton from "./ToggleTimerButton"
import useSound from 'use-sound';
import finished from '../sound/completeSession.wav'
import Stop from "./Stop";
import Reset from "./Reset";

const Timer = ({title, setTitle, currentTimer, setCurrentTimer, rotation, rotationCount, setRotationCount, position, setPosition, choose1, choose2, choose3, setChoose1, setChoose2, setChoose3, setBackground}) => 
{
    const [time, setTime] = useState(currentTimer.quantity)
    const [startStop, setStartStop] = useState("Start")
    const [btnBackground, setBtnBackground] = useState("#08aeea");
    const [playFinished] = useSound(finished, { volume: 0.05 });
    
  
   
    var minutes = Math.floor(time / 60);
    var seconds = time - minutes * 60;

    useEffect(()=>{
      if(startStop === "Pause")
      {
        let zeroNeeded = false;
        minutes.toString().length === 1 ? zeroNeeded = true : zeroNeeded = false;
        const newMinutes = zeroNeeded ? `0${minutes}` : `${minutes}`;
        seconds.toString().length === 1 ? setTitle(`${currentTimer.type}: ${newMinutes}:0${seconds}`) : setTitle(`${currentTimer.type}: ${newMinutes}:${seconds}`);
      }
    }, [setTitle, minutes, seconds, startStop, title, currentTimer.type])

     

        
    useEffect(() => 
    {
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
            setBackground("linear-gradient(rgba(75,68,83,1) 0%, rgba(132,94,194,1) 100%)");
            if(currentTimer.position === rotation.length - 1)
            {
              setPosition(0)
              setCurrentTimer(rotation[0])
              playFinished();
              setStartStop("Start")
              setTime(rotation[0].quantity)
              setTitle("Long Break Session Finished!")
            }
            else
            {
             
              if(position === 7)
              {
                setTime(rotation[0].quantity)
                setPosition(0)
                setCurrentTimer(rotation[0])
                playFinished();
                setStartStop("Start")
                setTitle("Long Break Session Finished!")
              }
              else
              {
               

                setTime(rotation[position + 1].quantity)
                setPosition(position + 1)
                setCurrentTimer(rotation[position + 1])
                playFinished();
                setTitle(`${currentTimer.type} Session Finished!`)
                setStartStop("Start")
              }
            }
           
          }
        }
        
        
      },[startStop, time, playFinished, currentTimer, position, rotation, setCurrentTimer, setPosition, setBackground, minutes, seconds, setTitle]);
   
   
    return (
       <TimerContainer>
           <TypeSelector title={title} setTitle={setTitle} position={position} setPosition={setPosition} choose1={choose1} choose2={choose2} choose3={choose3} setChoose1={setChoose1} setChoose2={setChoose2} setChoose3={setChoose3} rotation={rotation} rotationCount={rotationCount} setRotationCount={setRotationCount} currentTimer={currentTimer} setCurrentTimer={setCurrentTimer} startStop={startStop} time={time} setTime={setTime}/>
              <h1>{minutes.toString().length === 1 ? `0${minutes}` : minutes}:{seconds.toString().length === 1 ? `0${seconds}` : seconds}</h1>
              <StopResetContainer>
                <Stop/>
                <Reset currentTimer={currentTimer} setTime={setTime}/>
              </StopResetContainer>
            <ToggleTimerButton setBackground={setBackground} rotation={rotation} rotationCount={rotationCount} setRotationCount={setRotationCount} btnBackground={btnBackground} setBtnBackground={setBtnBackground} startStop={startStop} setStartStop={setStartStop}/>
       </TimerContainer>
    )
}

export default Timer
