import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../../TodoContext';

function TodoForm() {

    const { setOpenModal,
        addTodo
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        addTodo(newTodoValue)
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form className="newTodoForm">
            <label htmlFor="newTodo">Type a new Todo</label>
            <textarea id="newTodo"
            className="newTodoInput"
            placeholder="Do EDO's homework" 
            value={newTodoValue}
            onChange={onChange}/>

            <div className="buttonContainer">
                <button type="button" className="addButton" onClick={onSubmit}>Add</button>
                <button type="button" className="cancelButton" onClick={() => {setOpenModal(false);}}>Cancel</button>
            </div>
        </form>
    );
}

export { TodoForm };