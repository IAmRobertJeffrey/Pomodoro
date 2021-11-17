import { OthersTasksContainer, TasksHeader, TasksContent } from "../styles/OthersTasks.styled"
import {NoTasksMessage} from "../styles/MyTasks.styled";


const OthersTasks = () => {
    return (
        <OthersTasksContainer>
             <TasksHeader>
                <p>Other's Tasks</p>
             </TasksHeader>
             <TasksContent>
                <NoTasksMessage>No one else is currently engaged in a task :(</NoTasksMessage>

            </TasksContent>
        </OthersTasksContainer>
        
        
    )
}

export default OthersTasks
