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
  { id: 1, text: "Cortar cebolla", completed: false },
  { id: 2, text: "Tomar el curso 7", completed: false },
  { id: 3, text: "Ir al gym", completed: false },
  { id: 4, text: "Hacer tarea", completed: false },
  { id: 5, text: "Junta directiva", completed: false },
  { id: 6, text: "Proyecto", completed: false },
  { id: 7, text: "Reunion amigos", completed: false },
  { id: 8, text: "Jugar fulbol", completed: false },
  { id: 9, text: "Correr", completed: false },
  { id: 10, text: "Ir al hospital", completed: false },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchBarValue, setSearchBarValue] = useState("");
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchBarValue.toLocaleLowerCase())
  );

  const checkUnCheckTodo = (id) => {
    const getTodoIndex = defaultTodos.findIndex((todo) => todo.id === id);

    if (defaultTodos[getTodoIndex].completed) {
      defaultTodos[getTodoIndex].completed = false;
    } else {
      defaultTodos[getTodoIndex].completed = true;
    }

    const newDefaultTodos = [...defaultTodos];
    setTodos(newDefaultTodos);
  };

  const deleteTodo = (id) => {
    const getTodoIndex = defaultTodos.findIndex((todo) => todo.id === id);
    defaultTodos.splice(getTodoIndex, 1);
    const newDefaultTodos = [...defaultTodos];
    setTodos(newDefaultTodos);
  };

  return (
    <React.Fragment>
      <TodoTitle />

      <TodoCounter total={totalTodos} completed={completedTodos} />

      <TodoProgressBar total={totalTodos} completed={completedTodos} />

      <TodoSearch
        searchBarValue={searchBarValue}
        setSearchBarValue={setSearchBarValue}
      />

      <TodoList 
      matches={searchedTodos.length}
      total={totalTodos}
      >
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            checkUnCheckTodo={checkUnCheckTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
