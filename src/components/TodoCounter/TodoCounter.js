import './TodoCounter.css';

function TodoCounter(props) {
    return (
        <h2 className="title_h2">Has completado {props.completed} de {props.total} TODOs</h2>
    );
}

export { TodoCounter }; //asi exportamos el componente como objeto