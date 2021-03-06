import { MyTasksContainer, TasksHeader, LeftPortion, RightPortion, AddTaskButton, TasksContent, NoTasksMessage} from "../styles/MyTasks.styled";
import { useState, useEffect } from "react";
import AddTask from "./AddTask";
import Task from "./Task";


const MyTasks = () => 
{
    const [myTasks,setMyTasks]= useState([]);
    const [visible, setVisible] = useState(false)
    
    useEffect(() => 
    {
        localStorage.getItem("tasks") ? setMyTasks(JSON.parse(localStorage.getItem("tasks"))) :  setMyTasks([]);
    }, [setMyTasks])


    function handleAddClick()
    {
        visible ? setVisible(false) : setVisible(true);
    }

    return (
        <MyTasksContainer>
            <TasksHeader>
            <p>Your Task List</p> 
            </TasksHeader>
            <LeftPortion>
               
            </LeftPortion>
            <RightPortion>     
                <AddTaskButton onClick={() => handleAddClick()}>
                    Add Task
                </AddTaskButton> 
            </RightPortion>  
            <TasksContent>
                <AddTask myTasks={myTasks} setMyTasks={setMyTasks} visible={visible} setVisible={setVisible}/>
                {myTasks.length === 0 ? <NoTasksMessage>This is your task list, please add a task with the button at the top right of this box!</NoTasksMessage> : myTasks.map((current) => <Task myTasks={myTasks} setMyTasks={setMyTasks} key={current.id} task={current}/>)}

            </TasksContent>
        </MyTasksContainer>
    )
}

export default MyTasks
