import { useState, useEffect } from 'react'

import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"

import './index.css'



function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []);

  useEffect(() => {
    //salvar as tarefas no navegador
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]);

  const addTask = (task) => {
  // id, text, done    
    setTasks([...tasks, { id: Date.now(), text: task, done: false }]);

    localStorage.setItem('tasks', JSON.stringify(tasks))
  };

  
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  const toggleTaskDone = (taskId) => {
    // Usando a função setTasks para atualizar o estado tasks
    setTasks(
      // Usando map para criar um novo array de tarefas
      tasks.map((task) =>
        // Verificando se o ID da tarefa corresponde ao taskId fornecido
        task.id === taskId
          ? 
            // Se corresponder, criamos uma nova tarefa com o done invertido
            { ...task, done: !task.done }
          : 
            // Se não corresponder, mantemos a tarefa inalterada
            task
      )
    );
  };
  


  return (
    <>
      <h1>Lista de Tarefas</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList 
        tasks={tasks} 
        onDeleteTask={deleteTask}
        onToggleTaskDone={toggleTaskDone}
      />
    
    </>
  )
}

export default App
