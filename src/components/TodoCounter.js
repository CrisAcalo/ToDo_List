function TodoCounter(props) {
    return (
        <h2>Has completado {props.completed} de {props.total} TODOs</h2>
    );
}

export { TodoCounter }; //asi exportamos el componente como objeto