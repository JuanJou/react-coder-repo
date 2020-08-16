import React, { Suspense, useContext, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Context } from "../context";
import styles from "./Test.module.css";

const AdminComponent = React.lazy(() =>
  import(/* webpackChunkName: "admin" */ "../admin/Admin")
);

export function Test() {
  const TestWithRouter = withRouter(InsideTest);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setCounter((prev) => prev++);
  });
  console.log(counter);
  return <TestWithRouter></TestWithRouter>;
}

function InsideTest(props) {
  let context = useContext(Context);
  console.log(props);
  const onClick = () => {
    props.history.push("/about", {
      test: "InsideTest",
    });
  };
  const toggle = () => {
    context.showText = !context.showText;
  };
  console.log("Styles", styles);
  return (
    <div className={styles.test}>
      <button onClick={onClick}>Navigate to About</button>
      <Suspense fallback={<span>Loading...</span>}>
        <AdminComponent />
        <button onClick={toggle}>Toggle context</button>
      </Suspense>
    </div>
  );
}
