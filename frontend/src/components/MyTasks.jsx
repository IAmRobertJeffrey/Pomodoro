import { MyTasksContainer, TasksHeader, LeftPortion, RightPortion, AddTaskButton, TasksContent} from "../styles/MyTasks.styled";

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
                <AddTaskButton onClick={() => handleAddClick()}>
                    Add Task
                </AddTaskButton> 
            </RightPortion>  
            <TasksContent>
              <p>Hello there</p>

            </TasksContent>
        </MyTasksContainer>
    )
}

export default MyTasks
