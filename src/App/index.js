import React from "react";
import { useState } from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";
import { useLocalStorage } from "../TodoContext/useLocalStorage";


function App() {
  
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
  
  
}

export default App;
