import React, { useContext } from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {
  const { loading, setModalIsActive, modalIsActive, setInputIsEmpty } = useContext(TodoContext);
  const openCreateTodoModal = () => {
    modalIsActive? setModalIsActive(false): setModalIsActive(true) 
    setInputIsEmpty(false);
  };
    return (
      <button className={'TodoButton' + (modalIsActive?' TodoButton--close':'')} onClick={openCreateTodoModal}>
        +
      </button>
    );
  }


export { CreateTodoButton };
