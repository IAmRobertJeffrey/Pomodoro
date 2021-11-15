import { TaskContainerWrapper } from "../styles/TaskContainer.styles"
import MyTasks from "./MyTasks";
import OthersTasks from "./OthersTasks";

const TaskContainer = () => {
    return (
        <TaskContainerWrapper>
            <MyTasks/>
            <OthersTasks/>
        </TaskContainerWrapper>
    )
}

export default TaskContainer
