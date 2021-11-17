import { AddTaskContainer } from "../styles/MyTasks.styled"
import { useState } from "react";


const AddTask = ({setVisible, visible, myTasks, setMyTasks}) => {

    const [input, setInput] = useState()
    let newTask = {
        id: 0,
        content: input,
        complete: false,
        current: false
    }
    let temp = myTasks

    function handleClick()
    {
        if(myTasks.length === 0 )
        {
            temp.push(newTask)
            setMyTasks(temp)
            console.log(myTasks);
            setVisible(false)
        }
        else
        {
            newTask.id = myTasks[myTasks.length - 1].id + 1;
            temp.push(newTask)
            setMyTasks(temp)
            console.log(myTasks);
            setVisible(false)
        }
        
    }


    return (
        <AddTaskContainer visible={visible}>
            
            <input onChange={(e) => setInput(e.target.value)} type="text" placeholder="Add new task here..."/> 
            <button onClick={handleClick}>Submit Task</button>
    
        </AddTaskContainer>
    )
}

export default AddTask
