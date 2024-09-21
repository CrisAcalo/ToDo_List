import React from 'react';
import './CreateTodoButton.css';

const CreateTodoButton = () => {

    return (
        <button className="primaryButton addTodoButton" onClick={(event)=>{
            console.log('aaaaa');
            console.log(event);
            console.log(event.target)}}>
            <i className="bi bi-plus-lg"></i>
        </button>
    );
};

export { CreateTodoButton };
