import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../../TodoContext';

const CreateTodoButton = () => {
    const {setOpenModal} = React.useContext(TodoContext);

    return (
        <button className="primaryButton addTodoButton" onClick={()=>{setOpenModal(true)}}>
            <i className="bi bi-plus-lg"></i>
        </button>
    );
};

export { CreateTodoButton };
