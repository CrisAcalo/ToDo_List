import React from 'react';
import './App.css';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { CreateTodoButton } from '../CreateButton/CreateTodoButton';
import { ToDoItem } from '../ToDoItem/ToDoItem'; //Con Ctrl+space se puede autocompletar/importar automaticamente
import { PrincipalTitle } from '../PrincipalTitle/PrincipalTitle';

function AppUI({
        nTodosCompleted,
        nTodosPending,
        textTodoCounter,
        setTextTodoCounter,
        searchValue,
        setSearchValue,
        todosCompleted,
        todosPending,
        completeTodo,
        deleteTodo
    }) {
    return (
        <React.Fragment>
            
            <div className="principal_container">

                <div className="header_container">

                    <PrincipalTitle text="¡To Do Organizer!" />
                    <TodoCounter
                        completed={nTodosCompleted}
                        total={nTodosCompleted + nTodosPending}
                        textTodoCounter={textTodoCounter}
                        setTextTodoCounter={setTextTodoCounter} />
                    <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

                </div>

                <div className="listsContainer">

                    <TodoList title="Pendientes">
                        {
                            todosPending.map(todo => (
                                <ToDoItem
                                    key={todo.text}
                                    text={todo.text}
                                    completed={todo.completed}
                                    onComplete={() => completeTodo(todo.text, todo.completed)}
                                    onDelete={() => deleteTodo(todo.text)} />
                            ))
                        }
                    </TodoList>
                    <TodoList title="Completadas">
                        {
                            todosCompleted.map(todo => (
                                <ToDoItem
                                    key={todo.text}
                                    text={todo.text}
                                    completed={todo.completed}
                                    onComplete={() => completeTodo(todo.text, todo.completed)}
                                    onDelete={() => deleteTodo(todo.text)} />
                            ))
                        }
                    </TodoList>

                </div>
                <CreateTodoButton />

            </div>

        </React.Fragment>
    );
}

export { AppUI };