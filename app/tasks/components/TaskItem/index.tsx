import { RouterOutput } from "@/server/router"
import { trpc } from "@/trpc/client"
interface TaskItemProps {
  task: RouterOutput["task"]["byId"]
}

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { mutateAsync: updateTaskMutation } = trpc.task.update.useMutation()
  const { mutateAsync: deleteTaskMutation } = trpc.task.delete.useMutation()
  const handleToggleTaskButtonClick = async (id: number) => {
    try {
      await updateTaskMutation({
        id,
        completed: !task.completed,
      })
    } catch (error) {
      console.error(error)
    }
  }
  const handleDeleteTaskButtonClick = async (id: number) => {
    try {
      await deleteTaskMutation({ id })
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <li
      className={`flex justify-between items-center p-2 my-2 ${
        task.completed ? "line-through" : ""
      }`}
    >
      <span
        onClick={() => handleToggleTaskButtonClick(task.id)}
        className="cursor-pointer"
      >
        {task.content}
      </span>
      <button
        onClick={() => handleDeleteTaskButtonClick(task.id)}
        className="text-red-500"
      >
        Delete
      </button>
    </li>
  )
}
