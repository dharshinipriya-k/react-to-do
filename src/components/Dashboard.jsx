import React, { useState } from "react";
import MyToDo from "./MyToDo";
import EditTask from "./EditTask";

function Dashboard({ todo, setTodo, completed, setCompleted }) {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [selectedTask, setSelectedTask] = useState(null);

  const handleDrop = (e) => {
    let change = e.target.innerText;
    setCompleted(change === "Completed" ? "Not Completed" : "Completed");
  };

  const handleClick = () => {
    if (selectedTask) {
      setTodo((initial) =>
        initial.map((e) =>
          e.id === selectedTask.id ? { ...e, title, description } : e
        )
      );
      setSelectedTask(null);
    } else {
      let id = todo.length ? todo[todo.length - 1].id + 1 : 1;
      let newArray = [...todo];
      newArray.push({
        id,
        title,
        description,
      });
      setTodo(newArray);
    }

    //reset all input
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <h1 className="text-center HeaderColor">My Todo</h1>
      <div className="contain  text-center" id="heading">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3">
              <input
                type="text"
                placeholder="Name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <input
                type="text"
                placeholder="Todo Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          <div className="col">
            <div className="p-3">
              <button onClick={handleClick} className="button">
                Add todo
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center p-5">
        <div>
          <h4 className="fw-bold">My Todo's</h4>
        </div>
        <div>
          <h4 className="fw-bold">
            Status Filter:{" "}
            <span>
              {" "}
              <div className="btn-group">
                <button
                  className="btn btn-success btn-sm dropdown-toggle"
                  id="button"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {completed}
                </button>
                <ul className="dropdown-menu">
                  <a onClick={handleDrop}>Completed</a>
                  <a onClick={handleDrop}>Not Completed</a>
                </ul>
              </div>
            </span>
          </h4>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {todo.map((e, i) => (
            <MyToDo
              key={i}
              completed={completed}
              setCompleted={setCompleted}
              todo={e}
              setTodo={setTodo}
              editTask={() => {
                setSelectedTask(e);
                setTitle(e.title);
                setDescription(e.description);
              }}
            />
          ))}
        </div>
      </div>
      {selectedTask && (
        <EditTask
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          onClick={handleClick}
        />
      )}
    </>
  );
}

export default Dashboard;
