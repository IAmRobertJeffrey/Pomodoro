import { MyTasksContainer, TasksHeader, LeftPortion, RightPortion, AddTaskButton} from "../styles/MyTasks.styled";


const MyTasks = () => 
{
    function handleAddClick()
    {
        console.log("hi");
    }


    return (
        <MyTasksContainer>
            <TasksHeader>
            <p>Your Task List</p>
            </TasksHeader>
            <LeftPortion>
           
            </LeftPortion>
            <RightPortion>           
               <AddTaskButton onClick={handleAddClick}>
                   Add Task
               </AddTaskButton>
            </RightPortion>
        </MyTasksContainer>
    )
}

export default MyTasks
