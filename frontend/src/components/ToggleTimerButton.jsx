import { TimerButton } from "../styles/Timer.styled"
import '../styles/button.css';
import useSound from 'use-sound';
import high from '../sound/highBeat.wav'
import low from '../sound/lowBeat.wav'
import { useEffect } from "react";

const ToggleTimerButton = ({startStop, setStartStop, btnBackground, setBtnBackground, rotation, rotationCount, setRotationCount, setBackground, setBgPosition}) => {

    const [playHigh] = useSound(high, { volume: 0.05 });
    const [playLow] = useSound(low, { volume: 0.05 });
 
    useEffect(()=> {
        if(startStop === "Start")
        {
            setBtnBackground("#08aeea")
                
        }
        else if(startStop === "Pause")
        {
            setBtnBackground("#833232")
            
                
        } 
    }, [startStop, setStartStop, setBtnBackground])
   

    function handleClick()
    {   
        
        if(startStop === "Start")
        {
            setBtnBackground("#833232")
            setStartStop("Pause")
            setBackground("linear-gradient(rgba(52, 47, 58, 1) 0%,rgba(95, 67, 141, 1) 100%)")
           
            
        }
        else if(startStop === "Pause")
        {
            setBtnBackground("#08aeea")
            setStartStop("Start")
            setBackground("linear-gradient(rgba(75,68,83,1) 0%, rgba(132,94,194,1) 100%)")
           
        } 
    }

    function checkFirst()
    {
        if(startStop === "Start")
        {
            playLow()
        }
        else if(startStop === "Pause")
        {
            
            playHigh()
        }
    }
    function checkSecond()
    {
         if(startStop === "Start")
        {
            playHigh()
        }
        else if(startStop === "Pause")
        {
            playLow()
           
        }
    }

    return (
        <TimerButton className="btn btn--beta" startStop={startStop} btnBackground={btnBackground} onMouseDown={checkFirst} onMouseUp={checkSecond} onClick={handleClick}><span>{startStop}</span></TimerButton>
    )
}

export default ToggleTimerButton
