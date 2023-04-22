import { useLocalStorage } from "../useLocalStorage/useLocalStorage";
import { useState } from "react";

function useTodos() {
  const { todos, saveTodos, loading, error } = useLocalStorage("TODOS_V1", []);

  const [modalIsActive, setModalIsActive] = useState(false);
  const [inputIsEmpty, setInputIsEmpty] = useState(false);
  const [searchBarValue, setSearchBarValue] = useState("");
  const [isModalOpenedFrom, setIsModalOpenedFrom] = useState("");
  const [isEditEnabled, setIsEditEnabled] = useState(true);
  const [filterTodosBy, setFilterTodosBy] = useState("all");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  function searchesTodosReturn() {
    if (filterTodosBy === "all") {
      const todoSearchedCoincidence = todos.filter((todo) =>
        todo.text.toLowerCase().includes(searchBarValue.toLocaleLowerCase())
      );
      return todoSearchedCoincidence;
    } else if (filterTodosBy === "checked") {
      const todoSearchedCoincidence = todos.filter((todo) =>
        todo.text.toLowerCase().includes(searchBarValue.toLocaleLowerCase())
      );
      return todoSearchedCoincidence.filter((todo) => todo.completed === true);
    } else if (filterTodosBy === "unChecked") {
      const todoSearchedCoincidence = todos.filter((todo) =>
        todo.text.toLowerCase().includes(searchBarValue.toLocaleLowerCase())
      );
      return todoSearchedCoincidence.filter((todo) => todo.completed === false);
    }
  }

  const searchedTodos = searchesTodosReturn();

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

  const calculateNextId = () => {
    const areThereTodos = JSON.parse(localStorage.getItem("TODOS_V1"));
    if (!areThereTodos.length) {
      return 0;
    } else {
      const lastElement = areThereTodos[areThereTodos.length - 1];
      let lastElementId = Number(lastElement.id);
      const newId = ++lastElementId;
      return newId;
    }
  };

  const insertTodo = (text) => {
    const newId = calculateNextId();
    const updatedTodos = [...todos];
    updatedTodos.push({
      id: newId,
      text: text,
      completed: false,
    });
    saveTodos(updatedTodos);
    setModalIsActive(false);
  };

  function updateTodo (id, text)  {
    console.log("id: " + id);
    console.log("text: " + text);
    console.log(todos);
    const updatedTodos = [...todos];
    const todoIndex = updatedTodos.findIndex((todo) => todo.id === id);
    console.log(updatedTodos[todoIndex].text);
    console.log(text);
    updatedTodos[todoIndex].text = text;
    saveTodos(updatedTodos);
    setModalIsActive(false);
  };

  return {
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
    isModalOpenedFrom,
    setIsModalOpenedFrom,
    updateTodo,
    isEditEnabled,
    setIsEditEnabled,
    filterTodosBy,
    setFilterTodosBy,
  };
}

export {useTodos}
