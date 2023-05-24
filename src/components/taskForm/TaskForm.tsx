import React from 'react';

interface ITaskForm extends React.PropsWithChildren {
    currentTask: string;
    changeCurrentTask: React.ChangeEventHandler<HTMLInputElement>;
    onButtonClick:React.MouseEventHandler;
}
const TaskForm:React.FC<ITaskForm>= (props) => {
    return (
            <div className="taskForm">
                <input type="text" value={props.currentTask} onChange={props.changeCurrentTask}/>
                <button onClick={props.onButtonClick}>Add</button>
            </div>
    );
};

export default TaskForm;