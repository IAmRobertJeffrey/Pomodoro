import { TaskWrapper, TaskContent, WorkingOnButton, CompletedButton, CheckBoxContainer } from "../styles/MyTasks.styled"

const Task = ({task}) => {
    return (
        <TaskWrapper>
            <TaskContent>
                <p>{task.content}</p>
            </TaskContent> 
            <form>
                <CheckBoxContainer>   
                    <p>Current Task?</p>
                    <WorkingOnButton type="checkbox"/>
                </CheckBoxContainer>
                <CheckBoxContainer>  
                    <p>Finished Task?</p>
                    <CompletedButton placeholder="hi" type="checkbox"/>
                </CheckBoxContainer>
           
            </form>
        </TaskWrapper>
    )
}

export default Task
