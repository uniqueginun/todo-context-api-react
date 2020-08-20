export const TodosReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.todo] };

    case "TOGGLE_STATUS":
      let todos = [...state.todos];
      const updatedTodos = todos.map((item) => {
        if (item.id === action.id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      });
      return { ...state, todos: updatedTodos };

    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.id),
      };

    default:
      return state;
  }
};
