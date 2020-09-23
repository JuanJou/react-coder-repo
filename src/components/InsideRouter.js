import React, { useState, useEffect } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import { Test } from "./Test";
import Example from "./Example";
import "./InsideRouter.css";

export function InsideRouter(props) {
  console.log(props);
  const history = useHistory();
  const navigate = () => {
    history.push("/about", {
      test: "Hola",
    });
  };

  const [number, setNumber] = useState(1);

  useEffect(() => {
    setNumber((prevCount) => ++prevCount);
  }, []);

  return (
    <div>
      <Link to="/home/test">Test</Link>
      <Link to="/home/example">Example</Link>
      <button onClick={navigate}>Navegar</button>
      <Route
        className="test-component"
        path="/home/test"
        component={Test}
      ></Route>
      <Route
        path="/home/example"
        render={(props) => <Example {...props} number={number} />}
      ></Route>
    </div>
  );
}
