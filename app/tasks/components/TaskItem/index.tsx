import { Task } from "../../page"

interface TaskItemProps {
  task: Task
  toggleTask: (id: number) => void
  deleteTask: (id: number) => void
}

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  toggleTask,
  deleteTask,
}) => (
  <li
    className={`flex justify-between items-center p-2 my-2 ${
      task.completed ? "line-through" : ""
    }`}
  >
    <span onClick={() => toggleTask(task.id)} className="cursor-pointer">
      {task.text}
    </span>
    <button onClick={() => deleteTask(task.id)} className="text-red-500">
      Delete
    </button>
  </li>
)
