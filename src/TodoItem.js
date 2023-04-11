import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const finishTodo = ()=>{
    alert(`Has finalizado la tarea: ${props.text}`)
  }

  const deleteTodo = ()=> {
    alert(`Has eliminado la tarea: ${props.text}`)
  }

  return (
    <li className={`TodoItem ${props.completed && 'TodoItem--completed'}`}>
      <span 
      id='TodoItemCheck' 
      className={`material-symbols-outlined TodoItemCheck ${props.completed && 'TodoItemCheck--completed'}`}
      onClick={()=> finishTodo()}
      >
      check_circle
      </span>

      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>{props.text}</p>

      <span 
      id='TodoItemDelete' 
      className="material-symbols-outlined TodoItemDelete"
      onClick={()=> deleteTodo()}
      >
      delete
      </span>
    </li>
  );
}

export { TodoItem };
