import {StopButton} from '../styles/Stop.styled'

const Stop = ({position, setPosition, setStartStop, rotation, currentTimer, setCurrentTimer, setTime}) => {

    function handleClick()
    {
        setStartStop("Start")
        setCurrentTimer(rotation[position + 1])
        setPosition(position + 1)
        if(position === 7)
        {
            setTime(rotation[0].quantity)
            setPosition(0)
            setCurrentTimer(rotation[0])           
        }
        else
        {
            setTime(rotation[position + 1].quantity)
        }
    }

    return (
        <StopButton onClick={() => handleClick()}>
            Stop
        </StopButton>
    )
}

export default Stop
