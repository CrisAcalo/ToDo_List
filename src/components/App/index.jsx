import React from 'react';
import { useLocalStorage } from '../../Hooks/useLocalStorage';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de intro a React', completed: false },
//   { text: 'Actividad 3', completed: false },
//   { text: 'Actividad 4', completed: false },
//   { text: 'Actividad 5', completed: true },
//   { text: 'Actividad 6', completed: false },
//   { text: 'Actividad 7', completed: false },
//   { text: 'Actividad 8', completed: true },
//   { text: 'Actividad 9', completed: false },
//   { text: 'Actividad 10', completed: false },
//   { text: 'Actividad 11', completed: true },
//   { text: 'Actividad 12', completed: true },
//   { text: 'Actividad 13', completed: false },
//   { text: 'Actividad 14', completed: true },
//   { text: 'Actividad 15', completed: true },
//   { text: 'Actividad 16', completed: false },
//   { text: 'Actividad 17', completed: false },
//   { text: 'Actividad 18', completed: false },
//   { text: 'Actividad 19', completed: true },
//   { text: 'Actividad 20', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
//localStorage.removeItem('TODOS_V1');


function App() {
  //Todos
  const [todos, setTodos] = useLocalStorage('TODOS_V1', []);

  //TodoSearch Component Status
  const [searchValue, setSearchValue] = React.useState('');

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

  //TodoCounter Component Status
  const [textTodoCounter, setTextTodoCounter] = React.useState('');
  return (
    <AppUI
      nTodosCompleted={nTodosCompleted}
      nTodosPending={nTodosPending}
      textTodoCounter={textTodoCounter}
      setTextTodoCounter={setTextTodoCounter}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      todosCompleted={todosCompleted}
      todosPending={todosPending}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;