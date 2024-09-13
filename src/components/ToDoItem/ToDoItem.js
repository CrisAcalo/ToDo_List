import './ToDoItem.css';

function ToDoItem(props) {
    let completed = '';
    completed = props.completed ? (<i className="bi bi-check2" style={{color:'#99ff99'}}></i>) : (<i className="bi bi-ban" style={{color:'red'}}></i>);
    return (
        <li>
            <p>{props.text}</p>
            <div>
                {completed}
            </div>
        </li>
    );
}

export { ToDoItem };