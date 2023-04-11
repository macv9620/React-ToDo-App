import React from "react";
import { useState } from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoTitle } from "./TodoTitle";
import { TodoProgressBar } from "./TodoProgressBar";

const defaultTodos = [
  { id: 1, text: "Cortar cebolla", completed: true },
  { id: 2, text: "Tomar el curso 7", completed: false },
  { id: 3, text: "Ir al gym", completed: true },
  { id: 4, text: "Hacer tarea", completed: true },
  { id: 5, text: "Junta directiva", completed: false },
  { id: 6, text: "Proyecto", completed: false },
  { id: 7, text: "Reunion amigos", completed: true },
  { id: 8, text: "Jugar fulbol", completed: true },
  { id: 9, text: "Correr", completed: true },
  { id: 10, text: "Ir al hospital", completed: true }
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchBarValue, setSearchBarValue] = useState('');

  const completedTodos = todos.filter((todo)=> todo.completed).length;
  const totalTodos = todos.length;

  
  const searchedTodos = todos.filter((todo)=> todo.text.toLowerCase().includes(searchBarValue.toLocaleLowerCase()))

  console.log(todos.filter((todo)=> todo.text.toLowerCase().includes(searchBarValue.toLocaleLowerCase())));

  return (
    <React.Fragment>
      <TodoTitle />

      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />

      <TodoProgressBar
        total={totalTodos}
        completed={completedTodos}
      />

      <TodoSearch
        searchBarValue={searchBarValue}
        setSearchBarValue={setSearchBarValue}
      />

      <TodoList
        matches = {searchedTodos.length}
      >
        {searchedTodos.map((todo) => (
          <TodoItem key={todo.id} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
