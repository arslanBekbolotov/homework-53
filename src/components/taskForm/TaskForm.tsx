import React from 'react';

interface ITaskForm extends React.PropsWithChildren {
    task: string;
}
const TaskForm:React.FC<ITaskForm>= (props) => {
    return (
            <form className="taskForm">
                <input type="text" value={props.task}/>
                <button>Add</button>
            </form>
    );
};

export default TaskForm;