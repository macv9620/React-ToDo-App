function TodoForm({ 
  setModalIsActive, 
  insertTodo, 
  inputIsEmpty, 
  setInputIsEmpty, 
  isModalOpenedFrom, 
  updateTodo,
}) {

  const closeModal = () => {
    setModalIsActive(false);
    setInputIsEmpty(false);
  };
  const getTodoText = () => {
    const text = document.getElementById("createTodoInput");
    if (!text.value) {
      setInputIsEmpty(true);
    } else if(isModalOpenedFrom.from === 'createButton') {
      insertTodo(text.value);
    } else if(isModalOpenedFrom.from === 'editButton'){
      updateTodo(isModalOpenedFrom.id, text.value);
    }
  };

  return (
    <div className="modal-background">
      <div className="modal-form">
        {(isModalOpenedFrom.from === 'createButton')&&(<p className="modal-form--title">¡Create a ToDo!</p>)}
        {(isModalOpenedFrom.from === 'editButton')&&(<p className="modal-form--title">¡Edit a ToDo!</p>)}
        <textarea
          placeholder="Type here"
          className="modal-form--textarea"
          defaultValue={isModalOpenedFrom.text}
          rows={1}
          id="createTodoInput"
        ></textarea>
        {inputIsEmpty && (
          <p className="data-checking-message">Your ToDo cannot be empty</p>
        )}
        <div className="modal-form-buttons">
          <button onClick={closeModal}>Cancel</button>
          <button onClick={getTodoText}>{(isModalOpenedFrom.from === 'editButton'?'Update':'Create')}</button>
        </div>
      </div>
    </div>
  );
}

export { TodoForm };
