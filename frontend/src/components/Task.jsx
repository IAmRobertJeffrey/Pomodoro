import { TaskWrapper, TaskContent } from "../styles/MyTasks.styled"

const Task = ({task}) => {
    return (
        <TaskWrapper>
            <TaskContent>
                <p>{task.content}</p>
            </TaskContent>
        </TaskWrapper>
    )
}

export default Task
