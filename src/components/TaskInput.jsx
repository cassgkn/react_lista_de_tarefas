import { useState } from "react";


const TaskInput = ({onAddTask}) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault()

        if(input.trim()) {
            onAddTask(input)
            setInput("")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="taskInput"> Digite uma nova tarefa:</label>
            <input
                type="text" 
                placeholder="Digite uma nova tarefa"
                value={input}
                onChange={(e) => setInput(e.target.value)} 
            />
            <button type="submit">Enviar</button>
        </form>
    )
}

export default TaskInput;