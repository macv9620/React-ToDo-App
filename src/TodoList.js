import React from "react";
import "./TodoList.css";

function TodoList(props) {
  if (props.total === 0) {
    return (
      <p className="noSearchMatches">
        Hey! You have no tasks created yet, get started!
      </p>
    );
  } else if (props.matches === 0) {
    return (
      <p className="noSearchMatches">
        Oops, there are no matches for your search
      </p>
    );
  } else {
    return (
      <section className="TodoListSection">
        <ul>{props.children}</ul>
      </section>
    );
  }
}

export { TodoList };
