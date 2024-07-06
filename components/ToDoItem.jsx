function ToDoItem({ taskId, todoName, todoDate, description, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-2">{taskId}</div>
        <div className="col-2">{todoName}</div>
        <div className="col-2">{todoDate}</div>
        <div className="col-4">{description}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDeleteClick(taskId)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
