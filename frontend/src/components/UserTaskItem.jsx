

const UserTaskItem = ({task, onTaskComplete}) => {
  if (!task) {
    return null;
  }

  const { id, taskTitle, taskDescription, status } = task;
  const isCompleted = status === "Completed";

  const handleCompleteClick = () => {
    onTaskComplete(id);
  };

  return(
    <div className="flex flex-col bg-white p-8 rounded-lg">
      <h3>{taskTitle}</h3>
      {taskDescription && <p>{taskDescription}</p>}
      <p>
        Status:<span className={isCompleted ? "text-green-600" : "text-orange-500"}>{status}</span>
      </p>
      {!isCompleted && (
        <button
          type="button"
          onClick={handleCompleteClick}
          className="mt-3 bg-green-500 text-white px-4 py-1 rounded cursor-pointer"
        >
          Mark as Completed
        </button>
      )}
    </div>

  )
}

export default UserTaskItem