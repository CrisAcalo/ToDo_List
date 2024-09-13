import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { CreateTodoButton } from './components/CreateButton/CreateTodoButton';
import { ToDoItem } from './components/ToDoItem/ToDoItem'; //Con Ctrl+space se puede autocompletar/importar automaticamente
import { PrincipalTitle } from './components/PrincipalTitle/PrincipalTitle';
import React from 'react';


const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Actividad 3', completed: false },
  { text: 'Actividad 4', completed: false },
  { text: 'Actividad 5', completed: true },
  { text: 'Actividad 6', completed: false },
  { text: 'Actividad 7 aaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaaa', completed: false },
  { text: 'Actividad 8', completed: true },
  { text: 'Actividad 9', completed: false },
  { text: 'Actividad 10', completed: false },
  { text: 'Actividad 11', completed: true },
  { text: 'Actividad 12', completed: true },
  { text: 'Actividad 13', completed: false },
  { text: 'Actividad 14', completed: true },
  { text: 'Actividad 15', completed: true },
  { text: 'Actividad 16', completed: false },
  { text: 'Actividad 17', completed: false },
  { text: 'Actividad 18', completed: false },
  { text: 'Actividad 19', completed: true },
  { text: 'Actividad 20', completed: false },
];

let todosCompleted = defaultTodos.filter(todo => todo.completed);
let todosPending = defaultTodos.filter(todo => !todo.completed);

function App() {
  return (
    <React.Fragment>
      <div className="principal_container">
        <div className="header_container">
          <PrincipalTitle text="¡To Do Organizer!" />
          <TodoCounter completed={16} total={20} />
          <TodoSearch />
        </div>

        <div className="listsContainer">

          <TodoList title="Completadas">
            {
              todosCompleted.map(todo => (
                <ToDoItem text={todo.text} completed={todo.completed} />
              ))
            }
          </TodoList>


          <TodoList title="Pendientes">
            {
              todosPending.map(todo => (
                <ToDoItem text={todo.text} completed={todo.completed} />
              ))
            }
          </TodoList>


        </div>
        <CreateTodoButton />
      </div>

    </React.Fragment>
  );
}

export default App;