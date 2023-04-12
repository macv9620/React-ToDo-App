import React from "react";
import { useState } from "react";
import { AppUI } from "./AppUI";

// const todos = [
//   { id: 1, text: "Cortar cebolla", completed: false },
//   { id: 2, text: "Tomar el curso 7", completed: false },
//   { id: 3, text: "Ir al gym", completed: false },
//   { id: 4, text: "Hacer tarea", completed: false },
//   { id: 5, text: "Junta directiva", completed: false },
//   { id: 6, text: "Proyecto", completed: false },
//   { id: 7, text: "Reunion amigos", completed: false },
//   { id: 8, text: "Jugar fulbol", completed: false },
//   { id: 9, text: "Correr", completed: false },
//   { id: 10, text: "Ir al hospital", completed: false },
// ];

//Custom Hook
function useLocalStorage(localStorageProp, initialItemValue) {
  const localStoragedItem = localStorage.getItem(localStorageProp);

  let defaultItem;

  if (!localStoragedItem) {
    defaultItem = initialItemValue;
  } else {
    defaultItem = JSON.parse(localStoragedItem);
  }

  const [todos, setTodos] = useState(defaultItem);

  const saveTodos = (todosToUpdate) => {
    const stringifiedTodos = JSON.stringify(todosToUpdate);
    localStorage.setItem(localStorageProp, stringifiedTodos);
    setTodos(todosToUpdate);
  };

  return [todos, saveTodos];
}

function App() {

  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);

  const [searchBarValue, setSearchBarValue] = useState("");
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchBarValue.toLocaleLowerCase())
  );

  const checkUnCheckTodo = (id) => {
    const getTodoIndex = todos.findIndex((todo) => todo.id === id);

    if (todos[getTodoIndex].completed) {
      todos[getTodoIndex].completed = false;
    } else {
      todos[getTodoIndex].completed = true;
    }
    const newDefaultTodos = [...todos];
    saveTodos(newDefaultTodos);
  };

  const deleteTodo = (id) => {
    const getTodoIndex = todos.findIndex((todo) => todo.id === id);
    todos.splice(getTodoIndex, 1);
    const newDefaultTodos = [...todos];
    saveTodos(newDefaultTodos);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      setSearchBarValue={setSearchBarValue}
      searchBarValue={searchBarValue}
      searchedTodos={searchedTodos}
      checkUnCheckTodo={checkUnCheckTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
