import React, { useContext } from "react";
import { Context } from "../context";

export function Home(props) {
  console.log(props.location.state.test);
  let context = useContext(Context);
  return (
    <>
      <span>{props.location.state.test}</span>
      <button onClick={props.history.goBack}>Home {context.showText}</button>
    </>
  );
}

export function Test(props) {
  return <div>{props.show ? <h1>Show</h1> : <h1>Hide</h1>}</div>;
}
