import { TimerButton } from "../styles/Timer.styled"
import '../styles/button.css';
import useSound from 'use-sound';
import high from '../sound/highBeat.wav'
import low from '../sound/lowBeat.wav'
import { useEffect } from "react";

const ToggleTimerButton = ({startStop, setStartStop, btnBackground, setBtnBackground}) => {

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
           
            
        }
        else if(startStop === "Pause")
        {
            setBtnBackground("#08aeea")
            setStartStop("Start")
           
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
