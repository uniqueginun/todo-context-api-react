import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import Badge from "@material-ui/core/Badge";
import AddAlertIcon from "@material-ui/icons/AddAlert";
import { TodosContext } from "../contexts/TodosContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function AppHeader() {
  const classes = useStyles();
  const { todos } = useContext(TodosContext);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <PlaylistAddCheckIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Todo List
          </Typography>
          <Badge badgeContent={todos.length} color="secondary">
            <AddAlertIcon />
          </Badge>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppHeader;
