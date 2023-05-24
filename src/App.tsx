import React, {useState} from 'react';
import './App.css';
import TaskMessage from "./components/TaskMessage/TaskMessage";
import TaskForm from "./components/taskForm/TaskForm";

function App() {
    const [currentTask,setCurrentTask]= useState('');

    const [tasks,setTasks]=useState([
            {task:'Buy milk', id:'32j'},
            {task:'Walk with dog', id:'3132342'},
            {task:'Buy milk', id:'fd434as'},
    ])

    const addNewTask =(taskText:string)=>{
        const tasksCopy = [...tasks];
        const taskCopy = {task:taskText,id:`${new Date()}${Math.random()}`};
        tasksCopy.push(taskCopy);
        setTasks(tasksCopy);
    };

    const deleteTask= (id:string)=>{
        const tasksCopy = tasks.filter(task => task.id !== id);
        setTasks(tasksCopy);
    }


  return (
    <div className="App">
        <TaskForm
            currentTask={currentTask}
            changeCurrentTask={(event: React.ChangeEvent<HTMLInputElement>)=>
            {setCurrentTask(event.currentTarget.value)}}
            onButtonClick={() => addNewTask(currentTask)}
        />
        {tasks.map(task=>{
          return <TaskMessage
              newTask={task.task}
              key={task.id}
              onClickDeleteElement={()=>{deleteTask(task.id)}}
          />
        })}
    </div>
  );
}

export default App;
