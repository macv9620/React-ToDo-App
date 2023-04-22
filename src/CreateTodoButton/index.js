import "./CreateTodoButton.css";

function CreateTodoButton({
  setModalIsActive,
  modalIsActive,
  setInputIsEmpty,
  setIsModalOpenedFrom,
}) {

  const openCreateTodoModal = () => {
    if (modalIsActive) {
      setModalIsActive(false);
    } else {
      setModalIsActive(true)
      setIsModalOpenedFrom({
        from: "createButton",
        id: "",
        text: "",
      });
    }

    setInputIsEmpty(false);
  };
  return (
    <button
      className={"TodoButton" + (modalIsActive ? " TodoButton--close" : "")}
      onClick={openCreateTodoModal}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
