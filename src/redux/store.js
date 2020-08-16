import { combineReducers } from "redux";
import { todos, list } from "./reducers/todo";

export default combineReducers({ todos, list });
