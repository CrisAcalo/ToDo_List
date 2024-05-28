import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';
import { ToDoItem } from './components/ToDoItem'; //Con Ctrl+space se puede autocompletar/importar automaticamente
import React from 'react';


const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Actividad 3', completed: false },
  { text: 'Actividad 4' }];


function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={20} />
      <TodoCounter completed={4} total={23} />
      <TodoCounter completed={1} total={223} />
      <TodoCounter completed={7} total={10} />

      <TodoSearch />

      <TodoList>

        {
          defaultTodos.map(todo => (
            <ToDoItem text={todo.text} completed={todo.completed} />
          ))
        }

      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;