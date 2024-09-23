import './TodoCounter.css';
import React from 'react';
import { TodoContext } from '../../TodoContext';

function TodoCounter() {

    const {
        nTodosCompleted,
        nTodosPending,
        textTodoCounter,
        setTextTodoCounter } = React.useContext(TodoContext);

    React.useEffect(
        () => {
            if ((nTodosCompleted + nTodosPending) === 0) {
                setTextTodoCounter('Ingresa una tarea nwn');
            }
            else if (nTodosCompleted < (nTodosCompleted + nTodosPending)) {
                setTextTodoCounter('Has completado ' + nTodosCompleted + ' de ' + (nTodosCompleted + nTodosPending) + ' TODOs');
            } else {
                setTextTodoCounter('Felicidades! Has completado todas tus actividades :D');
            }
        }, [nTodosCompleted, nTodosPending]
    );

    return (
        <h2 className="title_h2">{textTodoCounter}</h2>
    );
}

export { TodoCounter }; //asi exportamos el componente como objeto