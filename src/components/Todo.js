import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import CheckBoxOutlineBlankOutlinedIcon from "@material-ui/icons/CheckBoxOutlineBlankOutlined";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import { TodosContext } from "../contexts/TodosContext";

function Todo({ todo }) {
  const { toggleStatus, removeItem } = useContext(TodosContext);

  return (
    <Paper
      style={{
        borderRight: 9,
        borderRightStyle: "inset",
        borderRightColor: todo.isCompleted ? "green" : "red",
        display: "flex",
        alignItems: "center",
      }}
      elevation={3}
    >
      <div>
        <IconButton onClick={() => removeItem(todo.id)} aria-label="remove">
          <RemoveCircleOutlineIcon />
        </IconButton>
        <IconButton
          onClick={() => toggleStatus(todo.id)}
          aria-label="toggle status"
        >
          {todo.isCompleted ? (
            <CheckBoxOutlinedIcon />
          ) : (
            <CheckBoxOutlineBlankOutlinedIcon />
          )}
        </IconButton>
        <strong>{todo.title}</strong>
      </div>
    </Paper>
  );
}

export default Todo;
