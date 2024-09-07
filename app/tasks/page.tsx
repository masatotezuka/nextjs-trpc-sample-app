"use client"
import { TaskItem } from "@/app/tasks/components/TaskItem"
import { trpc } from "@/trpc/client"
import { useForm, SubmitHandler } from "react-hook-form"
import { z } from "zod"

const CreateTaskForm = z.object({
  title: z.string(),
  content: z.string(),
})
type CreateTaskForm = z.infer<typeof CreateTaskForm>

export default function Page() {
  const { isLoading, data } = trpc.task.all.useQuery()
  const { mutateAsync, isPending } = trpc.task.create.useMutation()
  const { register, handleSubmit } = useForm<CreateTaskForm>()

  const onSubmit: SubmitHandler<CreateTaskForm> = async (data) => {
    try {
      await mutateAsync(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">Task List</h1>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("title")}
            className="w-full p-2 border rounded"
            disabled={isPending}
          />
          <textarea
            {...register("content")}
            className="w-full p-2 border rounded"
            disabled={isPending}
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded"
            disabled={isPending}
          >
            Add
          </button>
        </form>
        <ul>
          {isLoading ? (
            <li>Loading...</li>
          ) : (
            data?.map((task) => <TaskItem key={task.id} task={task} />)
          )}
        </ul>
      </div>
    </main>
  )
}
