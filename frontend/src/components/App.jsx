import { AppWrapper } from "../styles/App.styled";
import Header from "./Header";
import Timer from "./Timer";
import { useState, useEffect} from "react";
import TaskContainer from "./TaskContainer";

function App() 
{
  const [rotationCount, setRotationCount] = useState(0);
  const [rotation] = useState([{position: 0, type: "Work", quantity: 4}, {position: 1,type: "Break", quantity: 3}, {position: 2, type: "Work", quantity: 4},  {position: 3,type: "Break", quantity: 3}, {position: 4, type: "Work", quantity: 4}, {position: 5,type: "Break", quantity: 3},{position: 6, type: "Work", quantity: 4}, {position: 7,type: "LongBreak", quantity: 6}]);
  const [position, setPosition] = useState(0)
  const [currentTimer, setCurrentTimer] = useState(rotation[0]);
  const [choose1, setChoose1] = useState(false);
  const [choose2, setChoose2] = useState(false);
  const [choose3, setChoose3] = useState(false);
  const [background, setBackground] = useState("linear-gradient(rgba(75,68,83,1) 0%, rgba(132,94,194,1) 100%)");
  const [bgPosition, setBgPosition] = useState("0px")

  useEffect(()=>{
       
    if(currentTimer === rotation[0] || currentTimer === rotation[2] || currentTimer === rotation[4] || currentTimer === rotation[6])
    {
        setChoose1(true)
        setChoose2(false)
        setChoose3(false)
        console.log("1");
    }
    else if(currentTimer === rotation[1] || currentTimer === rotation[3] || currentTimer === rotation[5])
    {
        setChoose1(false)
        setChoose2(true)
        setChoose3(false)
        console.log("2");
    }
    else if(currentTimer === rotation[7])
    {
        setChoose1(false)
        setChoose2(false)
        setChoose3(true)
        console.log("2");
    }



},[currentTimer, rotation, setChoose1, setChoose2, setChoose3, choose1, choose2, choose3])

  return (
    <AppWrapper bgPosition={bgPosition} background={background}>
      <Header/>
      <Timer setBackground={setBackground} setBgPosition={setBgPosition} choose1={choose1} setChoose1={setChoose1} choose2={choose2} setChoose2={setChoose2} choose3={choose3} setChoose3={setChoose3} position={position} setPosition={setPosition} rotationCount={rotationCount} setRotationCount={setRotationCount} rotation={rotation} currentTimer={currentTimer} setCurrentTimer={setCurrentTimer}/>
      <TaskContainer/>
    </AppWrapper>
  );
}

export default App;
