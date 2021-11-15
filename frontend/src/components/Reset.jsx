import {ResetButton} from '../styles/Reset.styled'

const Reset = ({setTime, currentTimer}) => {

    function handleReset()
    {
        setTime(currentTimer.quantity)
    }

    return (
        <ResetButton onClick={handleReset}>
            Reset
        </ResetButton>
    )
}

export default Reset
