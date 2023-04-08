import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(){
    return(
        <button className='TodoButton'><span className="material-symbols-outlined">
        add
        </span></button>
    )
}

export {CreateTodoButton}