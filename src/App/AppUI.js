import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoTitle } from "../TodoTitle";
import { TodoProgressBar } from "../TodoProgressBar";
import { useContext } from "react";
import { TodoContext } from "../TodoContext";

function AppUI() {
  const {searchedTodos} = useContext(TodoContext)
  return (
    <React.Fragment>
      <TodoTitle />
      <TodoCounter/>
      <TodoProgressBar/>
      <TodoSearch/>
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
