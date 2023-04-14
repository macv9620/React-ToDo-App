import React from "react";
import "./TodoItem.css";
import { useContext } from "react";
import { TodoContext } from "../TodoContext";

function TodoItem(props) {
  const {checkUnCheckTodo, deleteTodo} = useContext(TodoContext);
  const updateTodoState = () => {
    checkUnCheckTodo(props.id);
  };

  const delTodo = () => {
    deleteTodo(props.id);
  };

  return (
    <li className={`TodoItem ${props.completed && "TodoItem--completed"}`}>
      <span
        id="TodoItemCheck"
        className={`material-symbols-outlined TodoItemCheck ${
          props.completed && "TodoItemCheck--completed"
        }`}
        onClick={() => updateTodoState()}
      >
        check_circle
      </span>

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--completed"}`}>
        {props.text}
      </p>

      <span
        id="TodoItemDelete"
        className="material-symbols-outlined TodoItemDelete"
        onClick={() => delTodo()}
      >
        delete
      </span>
    </li>
  );
}

export { TodoItem };
