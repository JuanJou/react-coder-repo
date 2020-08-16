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
            pathname: "/about",
            state: {
              test: "Direct",
            },
          }}
        >
          About
        </Link>
        <Link to="/">Inicio</Link>
        <Link to="/context/7">Context</Link>
        <Link to="/other">OtherAbout</Link>
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
        <Switch>
          <Route
            className={styles.test}
            path="/"
            exact
            component={HomeWithLog}
          ></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/home" component={InsideRouter}></Route>
          <Route
            path="/context/:id"
            render={() => <ContextWithReducer />}
          ></Route>
          <Route path="/other" component={OtherAbout}></Route>
        </Switch>
      </Router>
    </nav>
  );
}
