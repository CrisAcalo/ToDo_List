function ToDoItem(props) {
    let completed = '';
    completed = props.completed ? (<i class="bi bi-check2"></i>) : (<i class="bi bi-ban"></i>);
    return (
        <li>
            <p>{props.text}</p>
            {completed}
        </li>
    );
}

export { ToDoItem };