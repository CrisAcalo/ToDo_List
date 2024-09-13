import React, { useState } from 'react';

const CreateTodoButton = () => {
    const [rippleStyle, setRippleStyle] = useState(null);

    const handleClick = (event) => {
        const button = event.currentTarget;
        const buttonRect = button.getBoundingClientRect();
        const rippleSize = Math.max(buttonRect.width, buttonRect.height) * 2;
        const rippleX = event.clientX - buttonRect.left - rippleSize / 2;
        const rippleY = event.clientY - buttonRect.top - rippleSize / 2;

        setRippleStyle({
            left: rippleX + 'px',
            top: rippleY + 'px',
            width: rippleSize + 'px',
            height: rippleSize + 'px',
        });

        setTimeout(() => {
            setRippleStyle(null);
        }, 300);
    };

    return (
        <button className="primaryButton" onClick={handleClick}>
            <i className="bi bi-plus-lg"></i>
            {rippleStyle && <span className="ripple" style={rippleStyle}></span>}
        </button>
    );
};

export { CreateTodoButton };
