import React, { useContext } from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {
  const {
    loading,
    setModalIsActive,
    modalIsActive,
    setInputIsEmpty,
    isModalOpenedFrom,
    setIsModalOpenedFrom,
  } = useContext(TodoContext);

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
