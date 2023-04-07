import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span id='TodoItemCheck' className="material-symbols-outlined">check_circle</span>
      <p>{props.text}</p>
      <span id='TodoItemDelete' className="material-symbols-outlined">delete</span>
    </li>
  );
}

export { TodoItem };
