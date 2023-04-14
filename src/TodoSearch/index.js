import React from "react";
import './TodoSearch.css';
import { useContext } from "react";
import { TodoContext } from "../TodoContext";

function TodoSearch(){
const {searchBarValue, setSearchBarValue} = useContext(TodoContext);
    const onChangeSearchValue = (event)=>{
        setSearchBarValue(event.target.value);
    }

    return(
            <input 
            className="TodoSearchBar" 
            placeholder="Search ToDo" 
            value={searchBarValue}
            onChange={onChangeSearchValue}
            />
    )
}

export {TodoSearch};