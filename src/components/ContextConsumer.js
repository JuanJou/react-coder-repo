import React, { useContext, useState } from "react";
import { TestContext } from "./ContextWithReducers";

export function ContextConsumer() {
  const { todos, dispatch } = useContext(TestContext);
  let [newTodo, setNewTodo] = useState("");

  console.log(todos);
  const updateState = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <>
      <input type="text" onChange={updateState} value={newTodo}></input>
      <button
        onClick={() => {
          dispatch({ type: "ADD_TODO", value: newTodo });
        }}
      >
        Add Todo
      </button>
      <button
        onClick={() => {
          dispatch({ type: "REMOVE_LAST_TODO" });
        }}
      >
        Remove Last Todo
      </button>
    </>
  );
}
