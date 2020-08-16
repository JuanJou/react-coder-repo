export function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          description: action.description,
        },
      ];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

export function list(state = [], action) {
  switch (action.type) {
    case "PUSH_LIST":
      return [...state, action.text];

    default:
      return state;
  }
}
