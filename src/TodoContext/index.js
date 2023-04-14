import React, { Children } from "react";
import { createContext } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useState } from "react";

//Se crea el contexto global para la aplicación
const TodoContext = createContext();

//Este componente se encargará de retornar dentro de un context provider el árbol hijo al cual se le enviaran las props
function TodoProvider(props) {

//Se trae toda la lógica de creación de las variables para poder enviarlas en la propiedad value del provider y que puedan ser accedidas
  const { todos, saveTodos, loading, error, setError } = useLocalStorage(
    "TODOS_V1",
    []
  );

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
    <TodoContext.Provider value={{
      totalTodos,
      completedTodos,
      setSearchBarValue,
      searchBarValue,
      searchedTodos,
      checkUnCheckTodo,
      deleteTodo,
      loading,
      error,
    }}>
        {props.children}
    </TodoContext.Provider>
  );
}


export {TodoProvider, TodoContext}