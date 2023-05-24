import React from 'react';
import './App.css';
import TaskMessage from "./components/TaskMessage/TaskMessage";
import TaskForm from "./components/taskForm/TaskForm";

function App() {
  return (
    <div className="App">
        <TaskForm task="add new task"/>
        <TaskMessage newTask="new task"/>
    </div>
  );
}

export default App;
