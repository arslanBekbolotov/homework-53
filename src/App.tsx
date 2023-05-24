import React, {useState} from 'react';
import './App.css';
import TaskMessage from "./components/TaskMessage/TaskMessage";
import TaskForm from "./components/taskForm/TaskForm";

const App = () => {
    const [currentTask,setCurrentTask]= useState('');

    const [tasks,setTasks]= useState([
            {task:'Buy milk', id:`${new Date()}${Math.random()}`},
            {task:'Walk with dog', id:`${new Date()}${Math.random()}`},
            {task:'Do homework', id:`${new Date()}${Math.random()}`},
    ]);

    const addNewTask =()=>{
        if(currentTask){
            const tasksCopy = [...tasks];
            const taskCopy = {task:currentTask,id:`${new Date()}${Math.random()}`};
            tasksCopy.push(taskCopy);
            setTasks(tasksCopy);
            setCurrentTask('');
        }else{
            alert('Что то пошло не так')
        }
    };

    const deleteTask= (id:string)=>{
        const tasksCopy = tasks.filter(task => task.id !== id);
        setTasks(tasksCopy);
    };

    const doneTask = (event: React.MouseEvent) => {
        const targetElement = event.currentTarget;

        if (targetElement instanceof HTMLLabelElement) {
            const parentElement = (event.target as Element).closest('.taskMessage');

            if (parentElement) {
                parentElement.classList.add('done');
                event.currentTarget.className = 'doneLabel' ;
            }
        }
    };

    const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

  return (
    <div className="App">
        <TaskForm
            onSubmitForm = {handleClick}
            currentTask={currentTask}
            changeCurrentTask={(event: React.ChangeEvent<HTMLInputElement>)=>
            {setCurrentTask(event.currentTarget.value)}}
            onButtonClick={() => addNewTask()}
        />

        {tasks.map(task=>{
          return <TaskMessage
              newTask={task.task}
              key={task.id}
              onClickDeleteElement={()=>{deleteTask(task.id)}}
              onClickDoneTask={event=>{ doneTask(event)}}
          />
        })}
    </div>
  );
};

export default App;
