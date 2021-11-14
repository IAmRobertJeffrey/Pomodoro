import { TypeContainer } from "../styles/Timer.styled"
import Type from "./Type"
import { useState } from "react";

const TypeSelector = ({time, setTime, startStop}) => {
    const [choose, setChoose] = useState(false);
    return (
        <TypeContainer>
            <Type choose={choose} setChoose={setChoose} startStop={startStop} time={time} setTime={setTime} first={true}/>
            <Type choose={choose} setChoose={setChoose} startStop={startStop} time={time} setTime={setTime}/>
            <Type choose={choose} setChoose={setChoose} startStop={startStop} time={time} setTime={setTime} last={true}/>
        </TypeContainer>
    )
}

export default TypeSelector
