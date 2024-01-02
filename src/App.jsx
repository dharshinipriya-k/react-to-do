import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
// import MyToDo from './components/MyToDo'

function App() {
  let [todo, setTodo] = useState([
    {
      id: 1,
      title: "Task-1",
      description: "Submit task",
      status: false,
    },
    {
      id: 2,
      title: "Task-2",
      description: "Mock interview",
      status: false,
    },
    {
      id: 3,
      title: "Task-3",
      description: "Practice React",
      status: false,
    },
  ]);
  let [completed, setCompleted] = useState("All");
  return (
    <>
      <Dashboard
        todo={todo}
        setTodo={setTodo}
        completed={completed}
        setCompleted={setCompleted}
      />
    </>
  );
}

export default App;
