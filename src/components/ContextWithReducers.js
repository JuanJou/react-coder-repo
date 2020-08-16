import { ContextConsumer } from "./ContextConsumer";
import React, { useReducer, useEffect } from "react";
import { OtherConsumer } from "./OtherConsumer";

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.value];
    case "REMOVE_LAST_TODO":
      return state.filter((_, i, arr) => i !== arr.length - 1);
    default:
      return state;
  }
}

export const TestContext = React.createContext({
  todos: [],
  dispatch: () => {},
});

export function ContextWithReducer() {
  const [todos, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    console.log("Mounted Context");
  }, []);

  return (
    <TestContext.Provider value={{ todos, dispatch }}>
      <ContextConsumer></ContextConsumer>
      <OtherConsumer></OtherConsumer>
    </TestContext.Provider>
  );
}
