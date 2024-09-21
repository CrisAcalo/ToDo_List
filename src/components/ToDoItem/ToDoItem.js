import './ToDoItem.css';
import React from 'react';
import { BsCheck2 } from "react-icons/bs";
import { BsBan } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";

function ToDoItem(props) {

    const [classIcon, setClassIcon] = React.useState(props.completed ? <BsCheck2 color='#99ff99' size={30} /> : <BsBan color='red' size={25} />);

    let styleText = props.completed ? { textDecoration: 'line-through', color: 'var(--secondary-color-light)' } : { textDecoration: 'none' };

    return (
        <li>
            <div className="todoActionButton"
                onMouseOver={
                    () => {
                        setClassIcon(props.completed ? <BsBan color='red' size={25} /> : <BsCheck2 color='#99ff99' size={30} />);
                    }
                }
                onMouseOut={
                    () => {
                        setClassIcon(props.completed ? <BsCheck2 color='#99ff99' size={30} /> : <BsBan color='red' size={25} />);
                    }
                }
                onClick={props.onComplete}
            >
                {classIcon}
            </div>
            <p style={styleText}>{props.text}</p>
            <div className="deleteIconContainer">
                <BsTrashFill onClick={props.onDelete}/>
            </div>
        </li>
    );
}

export { ToDoItem };