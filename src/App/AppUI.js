import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoTitle } from "../TodoTitle";
import { TodoProgressBar } from "../TodoProgressBar";
import { Modal } from "../Modal";
import { TodoForm } from "../Modal/TodoForm";
import { TodoFilter } from "../TodoFilter/TodoFilter";
import { TodoHeader } from "../TodoHeader/TodoHeader";
import { useTodos } from "./useTodos";
import { TodoLoading } from "../TodoLoading/TodoLoading";
import { TodoError } from "../TodoError/TodoError";
import { TodosIsEmpty } from "../TodosIsEmpty/TodosIsEmpty";
import { NoMatches } from "../NoMatches/NoMatches";
import { StorageAlertWithChange } from "../StorageChange";

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
    refreshTodos,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoTitle />

        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />

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
        searchBarValue={searchBarValue}
        searchedTodos={searchedTodos}
        onLoading={() => <TodoLoading />}
        onError={() => <TodoError />}
        onEmpty={() => <TodosIsEmpty />}
        onNoMatches={(searchBarValue) => <NoMatches
          searchedText={searchBarValue} />}
        render={(todos) =>
          todos.map((todo) => {
            return (
              <TodoItem
                todo={todo}
                key={todo.id}
                checkUnCheckTodo={checkUnCheckTodo}
                deleteTodo={deleteTodo}
                setModalIsActive={setModalIsActive}
                setIsModalOpenedFrom={setIsModalOpenedFrom}
              />
            );
          })
        }
      ></TodoList>

      

      {!loading && (
        <CreateTodoButton
          setModalIsActive={setModalIsActive}
          modalIsActive={modalIsActive}
          setInputIsEmpty={setInputIsEmpty}
          setIsModalOpenedFrom={setIsModalOpenedFrom}
        />
      )}

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
      {!loading&&(
        <StorageAlertWithChange
          refreshTodos={refreshTodos}
        />
      )}
    </React.Fragment>
  );
}

export { AppUI };
