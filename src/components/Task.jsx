
const Task = ({ task, onDelete, onToggleDone }) => {

    
    return (
        <>
            <li>
                <span 
                    onClick={onToggleDone}  
                    style={{textDecoration: task.done ? 'line-through' : 'done'}}
                >
                    {task.text}
                </span>
            </li>
            <button onClick={onDelete}>Remover</button>
        </>
    )
}

export default Task;
