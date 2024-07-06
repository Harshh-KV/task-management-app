import { useState } from "react";

function AddToDo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [description, setDescription] = useState("");
  const [taskId, setTaskId] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleTaskIdChange = (event) => {
    setTaskId(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem({ taskId, todoName, dueDate, description });
    setTaskId("");
    setTodoName("");
    setDueDate("");
    setDescription("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-2">
          <input
            type="text"
            placeholder="Task ID"
            value={taskId}
            onChange={handleTaskIdChange}
          />
        </div>
        <div className="col-2">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-2">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-3">
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
