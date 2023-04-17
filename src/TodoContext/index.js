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

  const [modalIsActive, setModalIsActive] =  useState(false);
  const [inputIsEmpty, setInputIsEmpty] = useState(false);
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

  const calculateNextId = ()=>{
    const areThereTodos = JSON.parse(localStorage.getItem('TODOS_V1'));
    if(!areThereTodos.length){
      return 0;
    } else {
      const lastElement = areThereTodos[areThereTodos.length-1];
      let lastElementId = Number(lastElement.id);
      const newId = ++lastElementId;
      return newId;
    }
  }

  const insertTodo = (text)=>{
    const newId = calculateNextId();
    const updatedTodos = [...todos];
    updatedTodos.push({
      id: newId,
      text: text,
      completed: false,
    });
    saveTodos(updatedTodos);
    setModalIsActive(false);
  }

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
      modalIsActive, 
      setModalIsActive,
      saveTodos,
      insertTodo,
      inputIsEmpty, 
      setInputIsEmpty,
    }}>
        {props.children}
    </TodoContext.Provider>
  );
}


export {TodoProvider, TodoContext}