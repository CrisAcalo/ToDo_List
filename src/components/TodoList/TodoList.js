import './TodoList.css';

const TodoList = (props) => {
    let title = '';
    if (props.title) {
        title = <h3>{props.title}</h3>;
    }
    return (
        <div className="listContainer">
            {title}
            <ul>
                {props.children}
            </ul>
        </div>
    );
};

export { TodoList };