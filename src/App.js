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
  { text: 'Actividad 5 aaaaaaaaaaa aaaaaaaaaaaaaaaaaa aaaaaaaaaaaa', completed: true },
  { text: 'Actividad 6', completed: false },
  { text: 'Actividad 7', completed: false },
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


function App() {

  //Todos
  const [todos, setTodos] = React.useState(defaultTodos);

  //TodoSearch Component Status
  const [searchValue, setSearchValue] = React.useState('');

  //TodoCounter Component Status
  const [textTodoCounter, setTextTodoCounter] = React.useState('Felicidades! Has completado todas tus actividades');
  
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      return todoText.includes(searchValue.toLowerCase())
    }
  );

  //Filtar Todos
  const todosCompleted = searchedTodos.filter(todo => todo.completed);
  const todosPending = searchedTodos.filter(todo => !todo.completed);

  //Contar Todos
  const nTodosCompleted = todosCompleted.length;
  const nTodosPending = todosPending.length;

  const completeTodo = (text, actualStatus) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !actualStatus;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <React.Fragment>

      <div className="principal_container">

        <div className="header_container">

          <PrincipalTitle text="¡To Do Organizer!" />
          <TodoCounter
          completed={nTodosCompleted}
          total={nTodosCompleted + nTodosPending}
          textTodoCounter={textTodoCounter}
          setTextTodoCounter={setTextTodoCounter}/>
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
                  todos={todos}
                  setTodos={setTodos}
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
                  todos={todos}
                  setTodos={setTodos}
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

export default App;