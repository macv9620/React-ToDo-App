import React from "react";
import "./TodoItem.css";


function TodoItem({
  checkUnCheckTodo,
  deleteTodo,
  setModalIsActive,
  setIsModalOpenedFrom,
  id,
  completed,
  text,
}) {
  
  const updateTodoState = () => {
    checkUnCheckTodo(id);
  };

  const delTodo = () => {
    deleteTodo(id);
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
    <li className={`TodoItem ${completed && "TodoItem--completed"}`}>
      <span
        id="TodoItemCheck"
        className={`material-symbols-outlined TodoItemCheck ${
          completed && "TodoItemCheck--completed"
        }`}
        onClick={() => updateTodoState()}
      >
        check_circle
      </span>

      <p className={`TodoItem-p ${completed && "TodoItem-p--completed"}`}>
        {text}
      </p>

      {!completed && (
        <span
          className="material-symbols-outlined TodoItemEdit"
          onClick={() => openEditModal(id, text)}
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
