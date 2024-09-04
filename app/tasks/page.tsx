"use client"
import { useState } from "react"
import { TaskItem } from "@/app/tasks/components/TaskItem"
export interface Task {
  id: number
  text: string
  completed: boolean
}

export default function Page() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [input, setInput] = useState("")

  const addTask = () => {
    if (input.trim() === "") return
    setTasks([...tasks, { id: tasks.length, text: input, completed: false }])
    setInput("")
  }

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">Task List</h1>
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Add a new task..."
          />
          <button
            onClick={addTask}
            className="p-2 bg-blue-500 text-white rounded"
          >
            Add
          </button>
        </div>
        <ul>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
      </div>
    </main>
  )
}
