import { TypeContainer } from "../styles/Timer.styled"
import Type from "./Type"

const TypeSelector = ({time, setTime, startStop, currentTimer, setCurrentTimer, rotation, rotationCount, setRotationCount, choose1, choose2, choose3, setChoose1, setChoose2, setChoose3, position, setPosition}) => {
   

  



    return (
        <TypeContainer>
            <Type position={position} setPosition={setPosition} choose1={choose1} setChoose1={setChoose1} choose2={choose2} setChoose2={setChoose2} choose3={choose3} setChoose3={setChoose3} rotationCount={rotationCount} setRotationCount={setRotationCount} rotation={rotation} currentTimer={currentTimer} setCurrentTimer={setCurrentTimer} startStop={startStop} time={time} setTime={setTime} first={true}/>
            <Type position={position} setPosition={setPosition} choose1={choose1} setChoose1={setChoose1} choose2={choose2} setChoose2={setChoose2} choose3={choose3} setChoose3={setChoose3} rotationCount={rotationCount} setRotationCount={setRotationCount} rotation={rotation} currentTimer={currentTimer} setCurrentTimer={setCurrentTimer} startStop={startStop} time={time} setTime={setTime}/>
            <Type position={position} setPosition={setPosition} choose1={choose1} setChoose1={setChoose1} choose2={choose2} setChoose2={setChoose2} choose3={choose3} setChoose3={setChoose3} rotationCount={rotationCount} setRotationCount={setRotationCount} rotation={rotation} currentTimer={currentTimer} setCurrentTimer={setCurrentTimer} startStop={startStop} time={time} setTime={setTime} last={true}/>
        </TypeContainer>
    )
}

export default TypeSelector
