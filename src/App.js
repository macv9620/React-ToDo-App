import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoTitle } from "./TodoTitle";
import { TodoProgressBar } from "./TodoProgressBar";

const todos = [
  { id: 1, text: "Cortar cebolla", completed: false },
  { id: 2, text: "Tomar el curso", completed: false },
  { id: 3, text: "Ir al gym", completed: false },
  { id: 4, text: "Ir al hospital", completed: false },
  { id: 5, text: "Ir al hospital", completed: false },
  { id: 6, text: "Ir al hospital", completed: false },
  { id: 7, text: "Ir al hospital", completed: false },
  { id: 8, text: "Ir al hospital", completed: false },
  { id: 9, text: "Ir al hospital", completed: false },
  { id: 10, text: "Ir al hospital", completed: false },
  { id: 11, text: "Ir al hospital", completed: false },
  { id: 12, text: "Ir al hospital", completed: false },
  { id: 13, text: "Ir al hospital", completed: false },
  { id: 14, text: "Ir al hospital", completed: false },
  { id: 15, text: "Ir al hospital", completed: false },
  { id: 16, text: "Ir al hospital", completed: false }
];

function App() {
  return (
    <React.Fragment>
      <TodoTitle />

      <TodoCounter />

      <TodoProgressBar />

      <TodoSearch />

      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.id} text={todo.text} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
