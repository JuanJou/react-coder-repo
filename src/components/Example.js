import React, { useState, useContext, useEffect } from "react";
import { connect } from "react-redux";
import { addTodo, removeTodo, pushList } from "../redux/actions/add-todo";
import { Context } from "../context";
import styles from "./Example.scss";

function Example({
  todos,
  list,
  pushList,
  addTodo,
  removeTodo,
  history,
  number,
}) {
  const [todo, setTodo] = useState("");
  const dispatchAdd = () => {
    addTodo(todo);
    pushList("Hola");
  };
  const dispatchRemove = () => {
    removeTodo(1);
    console.log(list);
  };
  const changeTodo = (event) => {
    setTodo(event.target.value);
  };

  const context = useContext(Context);
  useEffect(() => console.log(number));

  console.log("styles", styles);
  return (
    <div className={styles.test}>
      <input type="text" value={todo} onChange={changeTodo}></input>
      <button onClick={dispatchAdd}>Add</button>
      <button onClick={dispatchRemove}>Remove todo</button>
      {todos.map((todo) => (
        <span key={todo.id}>{todo.description}</span>
      ))}
    </div>
  );
}

const mapEventsToProps = (state) => {
  return {
    todos: state.todos,
    list: state.list,
  };
};

const mapDispatchToProps = {
  addTodo,
  removeTodo,
  pushList,
};

export default connect(mapEventsToProps, mapDispatchToProps)(Example);
