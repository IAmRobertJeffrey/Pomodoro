import { AddTaskContainer } from "../styles/MyTasks.styled"
import { useState } from "react";


const AddTask = ({setVisible, visible, myTasks, setMyTasks}) => 
{

    const [input, setInput] = useState("")
    let newTask = {
        id: 0,
        content: input,
        complete: false,
        current: false
    }
    let temp = []
   
    if(myTasks)
    {
        temp = myTasks;
    }

    function handleClick()
    {
        if(input !== "")
        {
        if(myTasks.length === 0)
        {
            temp.push(newTask)
            console.log(JSON.stringify(temp));
            localStorage.setItem("tasks", JSON.stringify(temp))
            setMyTasks(temp)
            setInput("");
            setVisible(false)
        }
        else
        {
            newTask.id = myTasks[myTasks.length - 1].id + 1;
            temp.push(newTask)
            localStorage.setItem("tasks", JSON.stringify(temp))
            setMyTasks(temp)
            setInput("");
            setVisible(false)
        }
    }
    else
    {
        window.alert("Please enter something into the task box before submitting.")
    }
        
    }


    return (
        <AddTaskContainer visible={visible}>
            
            {visible ? (


                <>
            <input 
            required 
            autoFocus 
            onChange={(e) => setInput(e.target.value)} 
            value={input} 
            type="text" 
            placeholder="Add new task here..." 
            onKeyPress=
            {event => 
                {
                    if (event.key === 'Enter') 
                    {
                        handleClick()
                    }
                }
            }/> 
            <button onClick={handleClick}>Submit Task</button>
                    </>
            ) : null}
           
           
        </AddTaskContainer>
    )
}

export default AddTask
