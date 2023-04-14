import React from "react";
import { useState } from "react";

//Custom Hook
function useLocalStorage(localStorageProp, initialPropValue) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [todos, setTodos] = useState(initialPropValue);

  const saveTodos = (todosToUpdate) => {
    const stringifiedTodos = JSON.stringify(todosToUpdate);
    localStorage.setItem(localStorageProp, stringifiedTodos);
    setTodos(todosToUpdate);
    setLoading(false);
  };

  React.useEffect(() => {
    console.log("useEffect");
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
      }, 5000);
    } catch (error) {}
  }, []);
  return { todos, saveTodos, loading, setLoading, error, setError };
}

export { useLocalStorage };
