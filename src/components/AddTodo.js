import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { TodosContext } from "../contexts/TodosContext";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  field: {
    width: "100%",
  },
}));

function AddTodo() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const { addTodo } = useContext(TodosContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title) {
      return;
    }
    if (title.length > 50) {
      alert("أدخل على الاكثر 50 حرفا");
      return;
    }
    addTodo(title);
    setTitle("");
  };

  return (
    <>
      <h3>Add New Task</h3>
      <form
        onSubmit={handleSubmit}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          label="Enter task and press enter (40 chars)"
          className={classes.field}
        />
      </form>
    </>
  );
}

export default AddTodo;
