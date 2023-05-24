import React from 'react';

interface ITaskMessage{
    newTask:string;
    onClickDeleteElement:React.MouseEventHandler;
}
const TaskMessage:React.FC<ITaskMessage>= (props) => {
    return (
        <div className="taskMessage">
                <p>{props.newTask}</p>
            <div className="taskMessageButtons">
                <div className="checkbox">
                    <label htmlFor="Done">Done</label>
                    <input id="Done" type="checkbox"/>
                </div>
                <button onClick={props.onClickDeleteElement}>Delete</button>
            </div>

        </div>
    );
};

export default TaskMessage;