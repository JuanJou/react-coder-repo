import React, { useContext } from "react";
import { Context } from "../context";

export function Home(props) {
  let context = useContext(Context);
  if (props.showText)
    return <h1 className="home-text home-button">Home {context.showText}</h1>;
  else return <p>Don't show</p>;
}

export function Test(props) {
  return <div>{props.show ? <h1>Show</h1> : <h1>Hide</h1>}</div>;
}
