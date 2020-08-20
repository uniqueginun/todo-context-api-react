import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import TodoContextProvider from "./contexts/TodosContext";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import AppHeader from "./components/AppHeader";
import AddTodo from "./components/AddTodo";
import TodosList from "./components/TodosList";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <TodoContextProvider>
      <Container maxWidth="sm">
        <div className="App">
          <AppHeader />
          <Card style={{ marginTop: 10, backgroundColor: "#fff5f7" }}>
            <CardContent>
              <AddTodo />
            </CardContent>
          </Card>
          <Card style={{ marginTop: 10, backgroundColor: "#fff5f7" }}>
            <CardContent>
              <Dashboard />
            </CardContent>
          </Card>
          <Card style={{ marginTop: 10, backgroundColor: "#fff5f7" }}>
            <CardContent>
              <TodosList />
            </CardContent>
          </Card>
        </div>
      </Container>
    </TodoContextProvider>
  );
}

export default App;
