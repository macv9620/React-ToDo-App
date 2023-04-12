import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(){

    const openCreateTodoModal = () =>{
        alert('Acá se debería abrir el modal');
    }
    return(
        <button
         className='TodoButton'
         onClick={openCreateTodoModal}
         >
        <span className="material-symbols-outlined">
        add
        </span>
        </button>
    )
}

export {CreateTodoButton}