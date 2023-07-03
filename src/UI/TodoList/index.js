import React from "react";
import "./TodoList.css";

function TodoList({
  onLoading,
  onError,
  onEmpty,
  onNoMatches,
  render,
  loading, 
  error, 
  totalTodos, 
  searchedTodos,
  searchBarValue,
}) {


    return (
      <>
        <section className="noSearchMatches">
          {(loading) && onLoading()}
          {error && onError()}
          {(!loading && totalTodos === 0) && onEmpty()}
          {(searchedTodos.length === 0 && totalTodos !== 0) && onNoMatches(searchBarValue)}
        </section>
        <section className="TodoListSection">
          <ul>
            {(!error && !loading) && render(searchedTodos)}
          </ul>
        </section>
        
      </>
    );
  
}

export { TodoList };
