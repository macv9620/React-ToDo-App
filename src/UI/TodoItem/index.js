import React from "react";
import "./TodoItem.css";


function TodoItem({
  checkUnCheckTodo,
  deleteTodo,
  setModalIsActive,
  setIsModalOpenedFrom,
  todo,
}) {
  
  const updateTodoState = () => {
    checkUnCheckTodo(todo.id);
  };

  const delTodo = () => {
    deleteTodo(todo.id);
  };

  const openEditModal = (id, text) => {
    setModalIsActive(true);
    setIsModalOpenedFrom({
      from: "editButton",
      id: id,
      text: text,
    });
  };

  return (
    <li className={`TodoItem ${todo.completed && "TodoItem--completed"}`}>
      <span
        id="TodoItemCheck"
        className={`material-symbols-outlined TodoItemCheck ${
          todo.completed && "TodoItemCheck--completed"
        }`}
        onClick={() => updateTodoState()}
      >
        check_circle
      </span>

      <p className={`TodoItem-p ${todo.completed && "TodoItem-p--completed"}`}>
        {todo.text}
      </p>

      {!todo.completed && (
        <span
          className="material-symbols-outlined TodoItemEdit"
          onClick={() => openEditModal(todo.id, todo.text)}
        >
          edit
        </span>
      )}

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
