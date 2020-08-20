import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Todo from "./Todo";
import { TodosContext } from "../contexts/TodosContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      height: theme.spacing(3),
      padding: 10,
      textAlign: "left",
    },
  },
}));
function TodosList() {
  const classes = useStyles();
  const { todos } = useContext(TodosContext);
  return (
    <div className={classes.root}>
      <h3>Todo List Items</h3>
      {todos.length ? (
        todos.map((todo) => <Todo todo={todo} key={todo.id} />)
      ) : (
        <div>No Todos</div>
      )}
    </div>
  );
}

export default TodosList;
