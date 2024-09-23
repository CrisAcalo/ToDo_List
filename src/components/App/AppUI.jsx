import React from 'react';
import './App.css';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { CreateTodoButton } from '../CreateButton/CreateTodoButton';
import { ToDoItem } from '../ToDoItem/ToDoItem'; //Con Ctrl+space se puede autocompletar/importar automaticamente
import { PrincipalTitle } from '../PrincipalTitle/PrincipalTitle';
import { TodosErrors } from '../TodosErrors/TodosErrors';
import { TodoLoadingItem } from '../TodoLoadingItem/TodoLoadingItem';
import { TodoContext } from '../../TodoContext';
import { Modal } from '../Modal/Modal';
import {TodoForm} from '../TodoForm/TodoForm';

function AppUI() {
    const { error,
        loading,
        todosCompleted,
        todosPending,
        completeTodo,
        openModal,
        setOpenModal,
        deleteTodo } = React.useContext(TodoContext);

    return (
        <React.Fragment>

            <div className="principal_container">

                <div className="header_container">

                    <PrincipalTitle text="Todo Machine" />
                    <TodoCounter />
                    <TodoSearch />
                    {/* {(!loading && searchedTodos.length == 0) && <p>Crea tu primer TODO!</p>} */}
                </div>


                <div className="listsContainer">
                    {error && <TodosErrors />}

                    {
                        !loading &&
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
                    }

                    {
                        !loading &&
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
                    }

                    {
                        loading &&
                        <TodoList>
                            <TodoLoadingItem />
                            <TodoLoadingItem />
                            <TodoLoadingItem />
                            <TodoLoadingItem />
                            <TodoLoadingItem />
                        </TodoList>
                    }
                    {
                        loading &&
                        <TodoList>
                            <TodoLoadingItem />
                            <TodoLoadingItem />
                            <TodoLoadingItem />
                            <TodoLoadingItem />
                            <TodoLoadingItem />
                        </TodoList>
                    }
                </div>

                <CreateTodoButton />
            </div>
            {openModal && (
                <Modal title="Create Todo">
                    <TodoForm></TodoForm>
                </Modal>
            )}
        </React.Fragment>
    );
}

export { AppUI };