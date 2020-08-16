import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

function About({
  todos,
  location: {
    state: { test },
  },
}) {
  useEffect(() => {
    console.log("Mounted About");
  }, []);
  return (
    <div>
      {todos.map((todo) => (
        <span key={todo.id}>{todo.description}</span>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(About);
