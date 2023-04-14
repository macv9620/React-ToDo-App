import React from "react";
import './TodoCounter.css';
import { TodoContext } from "../TodoContext";
import { useContext } from "react";

function TodoCounter() {
  const {totalTodos, completedTodos} = useContext(TodoContext);
  return <h2 className = 'TodoCounter'>Completed Tasks: {completedTodos} / {totalTodos}</h2>;
}

export { TodoCounter };
