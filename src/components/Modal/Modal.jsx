import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css';
import { TodoContext } from '../../TodoContext';

function Modal(props) {

    const { setOpenModal } = React.useContext(TodoContext);
    const text = props.title ? props.title : 'Modal Title';

    return ReactDOM.createPortal(
        <>
            <div className="modalBackground">
            </div>
            <div className="modalSection">
                <div className="modalContainer">
                    <div className="modalHeader">
                        <h3>{text}</h3>
                        <button className="modalCloseButton"
                            onClick={() => { setOpenModal(false) }}>
                            <i className="bi bi-x-lg"></i>
                        </button>
                    </div>
                    <div className="modalBody">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
        ,
        document.getElementById('modal')
    );
}

export { Modal };