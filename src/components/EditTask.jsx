import React from "react";

function EditTask({ title, setTitle, description, setDescription, onClick }) {
  return (
    <div style={{ paddingLeft: 500, marginTop: 50 }}>
      <h2 style={{ textDecoration: "underline" }}>Edit Todo</h2>
      <div style={{ marginBottom: 10 }}>
        <label style={{ display: "block", marginBottom: 5, marginLeft: 10 }}>
          Name:
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "50%", padding: "8px", marginBottom: 10 }}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <label style={{ display: "block", marginBottom: 5 }}>
          Description:
        </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: "50%", padding: "8px", marginBottom: 10 }}
        />
      </div>
      <button
        id="button"
        onClick={onClick}
        style={{
          padding: "10px",
          margin: "10px 0 0 10px",

          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Save Changes
      </button>
    </div>
  );
}

export default EditTask;
