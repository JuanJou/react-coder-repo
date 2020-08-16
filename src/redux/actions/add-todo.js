let nextTodoId = 0;
export const addTodo = (text) => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  description: text,
});
export const removeTodo = (id) => ({
  type: "REMOVE_TODO",
  id,
});

export const pushList = (text) => ({
  type: "PUSH_LIST",
  text,
});
