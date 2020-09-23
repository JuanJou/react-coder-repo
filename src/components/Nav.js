import React from "react";
import styles from "./Test.module.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Home } from "./Home";
import About from "./About";
import OtherAbout from "./OtherAbout";
import { InsideRouter } from "./InsideRouter";
import { WithLog } from "./HOC";
import { ContextWithReducer } from "./ContextWithReducers";

const HomeWithLog = WithLog(
  Home,
  {
    showText: false,
  },
  ["showText"]
);
export function Nav() {
  return (
    <nav>
      <Router>
        <Link
          to={{
            pathname: "/home",
            state: {
              test: "Home",
            },
          }}
        >
          Home
        </Link>
        <Link to={" "}>Test</Link>
        <Switch>
          <Route
            className={styles.test}
            path="/home"
            exact
            component={Home}
          ></Route>
          <Route
            className={styles.test}
            path="/test"
            exact
            component={Home}
          ></Route>
        </Switch>
      </Router>
    </nav>
  );
}
