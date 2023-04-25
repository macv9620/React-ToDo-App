import React from "react";
import { useState } from "react";

//Custom Hook
function useLocalStorage(localStorageProp, initialPropValue) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [todos, setTodos] = useState(initialPropValue);
  const [refresh, setRefresh] = useState(false);


  const saveTodos = (todosToUpdate) => {
    const stringifiedTodos = JSON.stringify(todosToUpdate);
    localStorage.setItem(localStorageProp, stringifiedTodos);
    setTodos(todosToUpdate);
    setLoading(false);
  };

  React.useEffect(() => {

    try {
      setTimeout(() => {
        const localStoragedItem = localStorage.getItem(localStorageProp);
        let defaultItem;

        if (!localStoragedItem) {
          defaultItem = initialPropValue;
        } else {
          defaultItem = JSON.parse(localStoragedItem);
        }

        saveTodos(defaultItem);
        setRefresh(false);
      }, 1000);
    } catch (error) {}
  }, [refresh]);
  return { todos, saveTodos, loading, setLoading, error, setError, setRefresh};
}

export { useLocalStorage };
