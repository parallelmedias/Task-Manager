import tasks from "./Task"
import completedTasks from "./Task"

function TaskTotal() {
  return (
    <div>
      {tasks.length > 0 && (
      <div className="--flex-between --pb">
        <p>
          <b>Total Tasks:</b> {tasks.length}
        </p>
        <p>
          <b>Completed Tasks:</b> {completedTasks.length}
        </p>
      </div>
      )}
    </div>
  )
}

export default TaskTotal
