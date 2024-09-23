import React from 'react';
import './TodoLoadingList.css';

function TodoLoadingList(props) {
    return (
        <div className="TodoLoadingList">
            <ul>
                {props.children}
            </ul>
        </div>
    );
}

export { TodoLoadingList };