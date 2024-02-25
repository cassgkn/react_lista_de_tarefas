import Task from "./Task";


const TaskList = ({ tasks, onDeleteTask, onToggleTaskDone }) => {
    return (
        <div>
            {tasks && tasks.length > 0 ? (
                <ul>
                    {tasks.map((task) => (
                        <Task
                            key={task.id}  
                            task={task}
                            onDelete={() => onDeleteTask(task.id)}
                            onToggleDone={() => onToggleTaskDone(task.id)}
                        />
                    ))}
                </ul>
            ) : (
                <p>Não existe nenhuma lista de tarefas</p>
            )}
        </div>
    )
}

export default TaskList;