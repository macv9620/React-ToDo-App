import React from "react";
import "./TodoFilter.css";

function TodoFilter({ filterTodosBy, setFilterTodosBy }) {
  const changeFilter = (buttonFilterClicked)=>{
    setFilterTodosBy(buttonFilterClicked);
  }
  return (
    <div className="filterButtons">
      <p className="filterButtons-text">Filter by: </p>
      <span
        className={`material-symbols-outlined checkedTodos ${
          filterTodosBy === "checked" ? "checkedTodos--selected" : ""
        }`}
        onClick={() => changeFilter("checked")}
      >
        check_circle
      </span>
      <span
        className={`material-symbols-outlined unCheckedTodos ${
          filterTodosBy === "unChecked" ? "unCheckedTodos--selected" : ""
        }`}
        onClick={() => changeFilter("unChecked")}
      >
        check_circle
      </span>
      <p
        className={`allTodos ${
          filterTodosBy === "all" ? "allTodos--selected" : ""
        }`}
        onClick={() => changeFilter("all")}
      >
        all
      </p>
    </div>
  );
}

export { TodoFilter };
