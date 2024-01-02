import React from "react";
// import EditTask from "./EditTask";

function MyToDo({ todo, setTodo, editTask }) {
  let deleteTask = () => {
    setTodo((initial) => initial.filter((item) => item.id !== todo.id));
  };
  return (
    <div className="col">
      <div
        className="card"
        style={{ width: "18rem", fontWeight: 500, margin: 10 }}
      >
        <div className="card-body">
          <h4 className="card-title">Task: {todo.title}</h4>
          <p className="card-text">Description: {todo.description}</p>
          <div className="btn-group">
            Status: &nbsp;
            <button
              className="btn btn-secondary btn-sm dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {todo.status ? "Completed" : "Not completed"}
            </button>
            <ul className="dropdown-menu">
              <li>Completed</li>
              <li>No Completed</li>
            </ul>
          </div>
        </div>

        <div className="d-flex justify-content-end w-auto">
          <div>
            <button
              className="btn btn-success btn-sm w-auto"
              id="button"
              onClick={editTask}
            >
              Edit
            </button>
          </div>
          &nbsp;
        </div>
        <button className="btn btn-danger btn-sm w-auto" onClick={deleteTask}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default MyToDo;
