import React, { useContext } from "react";
import { TodoContext } from "../../TodoContext";

function TodoForm() {
  const { setModalIsActive, insertTodo, inputIsEmpty, setInputIsEmpty } =
    useContext(TodoContext);
  const closeModal = () => {
    setModalIsActive(false);
    setInputIsEmpty(false);

  };
  const getTodoText = () => {
    const text = document.getElementById("createTodoInput");
    if (!text.value) {
      setInputIsEmpty(true);
    } else {
      insertTodo(text.value);
    }
  };
  return (
    <div className="modal-background">
      <div className="modal-form">
        <p className="modal-form--title">¡Create a ToDo!</p>
        <textarea
          placeholder="Type here"
          className="modal-form--textarea"
          rows={1}
          id="createTodoInput"
        ></textarea>
        {inputIsEmpty && (
          <p className="data-checking-message">Your ToDo cannot be empty</p>
        )}
        <div className="modal-form-buttons">
          <button onClick={closeModal}>Cancel</button>
          <button onClick={getTodoText}>Create</button>
        </div>
      </div>
    </div>
  );
}

export { TodoForm };
