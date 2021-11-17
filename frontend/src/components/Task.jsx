import { TaskWrapper, TaskContent, WorkingOnButton, CompletedButton, CheckBoxContainer, DeleteButton } from "../styles/MyTasks.styled"

const Task = ({task, myTasks, setMyTasks}) => {

    function handleDelete(e, taskId)
    {
        e.preventDefault()

        let currentTasks = JSON.parse(localStorage.getItem("tasks"));
        let tasksWithoutDeleted = currentTasks.filter((current) => current.id !== taskId)
        

        setMyTasks(tasksWithoutDeleted)
        localStorage.setItem("tasks", JSON.stringify(tasksWithoutDeleted))
    }
    
    function handleCheckBoxes(type)
    {

        const taskCorrected = 
        {
            id: task.id,
            content:task.content,
            complete: task.complete,
            current: task.current
        }
        type === "current" ? taskCorrected.current = !task.current : taskCorrected.current = task.current;
        type === "complete" ? taskCorrected.complete = !task.complete : taskCorrected.complete = task.complete;

        let taskListWithoutTask = myTasks.filter((current) => current.id !== task.id ? current : null)

        taskListWithoutTask.push(taskCorrected);
        taskListWithoutTask.sort((a, b) => a.id - b.id)
        localStorage.setItem("tasks", JSON.stringify(taskListWithoutTask))
        setMyTasks(taskListWithoutTask)
        console.log(localStorage.getItem("tasks"));
    }
    
    return (
        <TaskWrapper>
            <TaskContent>
                <p>{task.content}</p>
            </TaskContent> 
            <form>
                <CheckBoxContainer>   
                    <p>Current Task?</p>
                    <WorkingOnButton checked={task.current} onChange={(e) => handleCheckBoxes("current")} type="checkbox"/>
                </CheckBoxContainer>
                <CheckBoxContainer>  
                    <p>Finished Task?</p>
                    <CompletedButton checked={task.complete} onChange={(e) => handleCheckBoxes("complete")} placeholder="hi" type="checkbox"/>
                </CheckBoxContainer>
                <CheckBoxContainer>  
                <DeleteButton onClick={(e) => handleDelete(e, task.id)}>
                    Delete
                </DeleteButton>
                </CheckBoxContainer>
            </form>
        </TaskWrapper>
    )
}

export default Task
