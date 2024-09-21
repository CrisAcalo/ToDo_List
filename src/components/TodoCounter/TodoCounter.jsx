import './TodoCounter.css';

function TodoCounter(props) {
    
    if (props.completed < props.total) {
        props.setTextTodoCounter('Has completado ' + props.completed + ' de ' + props.total + ' TODOs');
    }else{
        props.setTextTodoCounter('Felicidades! Has completado todas tus actividades :D');
    }

    return (
        <h2 className="title_h2">{props.textTodoCounter}</h2>
    );
}

export { TodoCounter }; //asi exportamos el componente como objeto