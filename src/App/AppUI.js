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
import { Modal } from "../Modal";
import { TodoForm } from "../Modal/TodoForm";

function AppUI() {
  const { searchedTodos, modalIsActive, loading } = useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoTitle />
      <TodoCounter />
      <TodoProgressBar />
      <TodoSearch />
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

      {modalIsActive && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}

      {!loading && (
        <CreateTodoButton />
      )}
    </React.Fragment>
  );
}

export { AppUI };
