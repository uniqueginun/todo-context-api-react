import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Badge from "@material-ui/core/Badge";
import { TodosContext } from "../contexts/TodosContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    "& > *": {
      height: theme.spacing(4),
      width: "40%",
      paddingTop: 10,
    },
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },
  completedTitle: {
    fontSize: 20,
    color: "green",
  },
  inCompletedTitle: {
    fontSize: 20,
    color: "red",
  },
}));

function Dashboard() {
  const classes = useStyles();
  const { completed, incompleted } = useContext(TodosContext);
  return (
    <div className={classes.root}>
      <Paper className={classes.item} elevation={3}>
        <strong className={classes.completedTitle}>completed</strong>
        <Badge color="primary" badgeContent={completed.length} />
      </Paper>
      <Paper className={classes.item} elevation={3}>
        <strong className={classes.inCompletedTitle}>inCompleted</strong>
        <Badge color="secondary" badgeContent={incompleted.length} />
      </Paper>
    </div>
  );
}

export default Dashboard;
