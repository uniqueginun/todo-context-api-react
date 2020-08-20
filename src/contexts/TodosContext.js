import React, { createContext, useReducer } from "react";
import { TodosReducer } from "./TodosReducer";
import { v4 as uuidv4 } from "uuid";

const getItemsFromStorage = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};

const intialState = {
  todos: getItemsFromStorage(),
};

export const TodosContext = createContext(intialState);

function TodosContextProvider({ children }) {
  const [state, dispatch] = useReducer(TodosReducer, intialState);

  const addTodo = (title) => {
    const todo = {
      id: uuidv4(),
      title,
      isCompleted: false,
    };

    let todosList = getItemsFromStorage();
    todosList.push(todo);

    localStorage.setItem("todos", JSON.stringify(todosList));

    dispatch({
      type: "ADD_TODO",
      todo,
    });
  };

  const toggleStatus = (id) => {
    let todosList = getItemsFromStorage();
    todosList = todosList.map((item) => {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted;
      }
      return item;
    });
    localStorage.setItem("todos", JSON.stringify(todosList));
    dispatch({
      type: "TOGGLE_STATUS",
      id,
    });
  };

  const removeItem = (id) => {
    let todosList = getItemsFromStorage();
    todosList = todosList.filter((item) => item.id !== id);
    localStorage.setItem("todos", JSON.stringify(todosList));
    dispatch({
      type: "REMOVE_TODO",
      id,
    });
  };

  return (
    <TodosContext.Provider
      value={{
        todos: state.todos,
        addTodo: addTodo,
        toggleStatus: toggleStatus,
        completed: state.todos.filter((item) => item.isCompleted),
        incompleted: state.todos.filter((item) => !item.isCompleted),
        removeItem: removeItem,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}

export default TodosContextProvider;
