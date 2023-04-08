import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className={`TodoItem ${props.completed && 'TodoItem--completed'}`}>
      <span id='TodoItemCheck' className={`material-symbols-outlined TodoItemCheck ${props.completed && 'TodoItemCheck--completed'}`}>check_circle</span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>{props.text}</p>
      <span id='TodoItemDelete' className="material-symbols-outlined TodoItemDelete">delete</span>
    </li>
  );
}

export { TodoItem };
