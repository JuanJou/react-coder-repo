import React, { useContext } from "react";
import { TestContext } from "./ContextWithReducers";

export function OtherConsumer() {
  const { todos } = useContext(TestContext);

  return (
    <>
      {todos.map((todo) => (
        <p>{todo}</p>
      ))}
    </>
  );
}
