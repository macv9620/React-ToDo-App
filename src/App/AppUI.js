import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoTitle } from "../TodoTitle";
import { TodoProgressBar } from "../TodoProgressBar";

function AppUI({
  totalTodos,
  completedTodos,
  setSearchBarValue,
  searchBarValue,
  searchedTodos,
  checkUnCheckTodo,
  deleteTodo,
}) {
  return (
    <React.Fragment>
      <TodoTitle />

      <TodoCounter total={totalTodos} completed={completedTodos} />

      <TodoProgressBar total={totalTodos} completed={completedTodos} />

      <TodoSearch
        searchBarValue={searchBarValue}
        setSearchBarValue={setSearchBarValue}
      />

      <TodoList matches={searchedTodos.length} total={totalTodos}>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            checkUnCheckTodo={checkUnCheckTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
