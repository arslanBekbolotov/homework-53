import React from 'react';

interface ITaskForm extends React.PropsWithChildren {
    currentTask: string;
    changeCurrentTask: React.ChangeEventHandler<HTMLInputElement>;
    onButtonClick:React.MouseEventHandler;
    onSubmitForm: React.FormEventHandler<HTMLFormElement>;
}
const TaskForm:React.FC<ITaskForm>= (props) => {
    return (
        <form onSubmit={props.onSubmitForm}>
            <div className="taskForm">
                <input type="text" value={props.currentTask} onChange={props.changeCurrentTask}/>
                <button onClick={props.onButtonClick}>Add</button>
            </div>
         </form>
    );
};

export default TaskForm;