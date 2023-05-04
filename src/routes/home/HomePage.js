import React from "react";
import { TodoCounter } from "../../UI/TodoCounter";
import { TodoSearch } from "../../UI/TodoSearch";
import { CreateTodoButton } from "../../UI/CreateTodoButton";
import { TodoList } from "../../UI/TodoList";
import { TodoItem } from "../../UI/TodoItem";
import { TodoTitle } from "../../UI/TodoTitle";
import { TodoProgressBar } from "../../UI/TodoProgressBar";
import { Modal } from "../../UI/Modal";
import { TodoForm } from "../../UI/Modal/TodoForm";
import { TodoFilter } from "../../UI/TodoFilter/TodoFilter";
import { TodoHeader } from "../../UI/TodoHeader/TodoHeader";
import { useTodos } from "../useTodos";
import { TodoLoading } from "../../UI/TodoLoading/TodoLoading";
import { TodoError } from "../../UI/TodoError/TodoError";
import { TodosIsEmpty } from "../../UI/TodosIsEmpty/TodosIsEmpty";
import { NoMatches } from "../../UI/NoMatches/NoMatches";
import { StorageAlert } from "../../StorageChange/StorageAlert.js";

function HomePage() {
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
    refresh,
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

      <StorageAlert
        refreshTodos={refreshTodos}
        refresh={refresh}
      />

    </React.Fragment>
  );
}

export { HomePage };
