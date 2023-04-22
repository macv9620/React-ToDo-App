import React from "react";
import "./TodoList.css";


function TodoList({
  children, 
  loading, 
  error, 
  totalTodos, 
  searchedTodos,
}) {

    return (
      <>
        <p className="noSearchMatches">
          {(loading && totalTodos === 0) && "Loading info..."}
          {error && `An error has occurred, please refresh the page`}
          {(!loading && totalTodos === 0) && 'Hey! You have no tasks created yet, get started!'}
          {(searchedTodos.length === 0 && totalTodos !== 0) && 'Oops, there are no matches for your search'}
        </p>
        <section className="TodoListSection">
          <ul>{!error && children}</ul>
        </section>
        
      </>
    );
  
}

export { TodoList };
