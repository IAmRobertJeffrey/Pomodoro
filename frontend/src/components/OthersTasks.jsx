import { OthersTasksContainer, TasksHeader, TasksContent } from "../styles/OthersTasks.styled"


const OthersTasks = () => {
    return (
        <OthersTasksContainer>
             <TasksHeader>
                <p>Other's Tasks</p>
             </TasksHeader>
             <TasksContent>
                <p>No one else is currently engaged in a task :(</p>

            </TasksContent>
        </OthersTasksContainer>
        
        
    )
}

export default OthersTasks
