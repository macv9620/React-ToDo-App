import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoTitle } from "../TodoTitle";
import { TodoProgressBar } from "../TodoProgressBar";
import { useContext } from "react";
import { TodoContext } from "./useTodos";
import { Modal } from "../Modal";
import { TodoForm } from "../Modal/TodoForm";
import { TodoFilter } from "../TodoFilter/TodoFilter";
import { TodoHeader } from "../TodoHeader/TodoHeader";
import { useTodos } from "./useTodos";

function AppUI() {
  const {
    searchedTodos,
    modalIsActive,
    loading,
    totalTodos,
    completedTodos,
    filterTodosBy,
    setFilterTodosBy,
    searchBarValue,
    setSearchBarValue,
    error,
    checkUnCheckTodo,
    deleteTodo,
    setModalIsActive,
    setIsModalOpenedFrom,
    setInputIsEmpty,
    insertTodo,
    inputIsEmpty,
    isModalOpenedFrom,
    updateTodo,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoTitle />

        <TodoCounter 
        totalTodos={totalTodos} 
        completedTodos={completedTodos} 

        />

        <TodoProgressBar
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />

        {!loading && (
          <TodoFilter
            filterTodosBy={filterTodosBy}
            setFilterTodosBy={setFilterTodosBy}
          />
        )}

        <TodoSearch
          searchBarValue={searchBarValue}
          setSearchBarValue={setSearchBarValue}
        />
      </TodoHeader>

      <TodoList
        loading={loading}
        error={error}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
      >
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            checkUnCheckTodo={checkUnCheckTodo}
            deleteTodo={deleteTodo}
            setModalIsActive={setModalIsActive}
            setIsModalOpenedFrom={setIsModalOpenedFrom}
          />
        ))}
      </TodoList>

      {!loading && <CreateTodoButton 
          setModalIsActive={setModalIsActive}
          modalIsActive={modalIsActive}
          setInputIsEmpty={setInputIsEmpty}
          setIsModalOpenedFrom={setIsModalOpenedFrom}
      />}

      {modalIsActive && (
        <Modal>
          <TodoForm 
              setModalIsActive={setModalIsActive}
              insertTodo={insertTodo}
              inputIsEmpty={inputIsEmpty}
              setInputIsEmpty={setInputIsEmpty}
              isModalOpenedFrom={isModalOpenedFrom}
              updateTodo={updateTodo}
          />
        </Modal>
      )}


    </React.Fragment>
  );
}

export { AppUI };
