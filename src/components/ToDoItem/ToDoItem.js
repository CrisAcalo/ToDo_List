import './ToDoItem.css';
import React from 'react';

function ToDoItem(props) {

    const [classIcon, setClassIcon] = React.useState(props.completed ? 'bi bi-check2 todoActionButton' : 'bi bi-ban todoActionButton');
    const [styleIcon, setStyleIcon] = React.useState(props.completed ? { color: '#99ff99' } : { color: 'red' });

    let styleText = props.completed ? { textDecoration: 'line-through', color: 'var(--secondary-color-light)' } : { textDecoration: 'none' };

    return (
        <li>
            <i className={classIcon} style={styleIcon}
                onMouseOver={
                    () => {
                        setClassIcon(props.completed ? 'bi bi-ban todoActionButton' : 'bi bi-check2 todoActionButton');
                        setStyleIcon(props.completed ? { color: 'red' } : { color: '#99ff99' });
                    }
                }
                onMouseOut={
                    () => {
                        setClassIcon(props.completed ? 'bi bi-check2 todoActionButton' : 'bi bi-ban todoActionButton');
                        setStyleIcon(props.completed ? { color: '#99ff99' } : { color: 'red' });
                    }
                }
                onClick={props.onComplete}
            ></i>

            <p style={styleText}>{props.text}</p>
            <div className="deleteIconContainer">
                <i className="bi bi-trash-fill"
                    onClick={props.onDelete}
                ></i>
            </div>
        </li>
    );
}

export { ToDoItem };