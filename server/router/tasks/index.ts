import { router, procedure } from "@/server/trpc"
import { z } from "zod"

export const taskRouter = router({
  all: procedure.query(() => {
    return [
      { id: 1, title: "Task 1", content: "Task 1 content", completed: false },
      { id: 2, title: "Task 2", content: "Task 2 content", completed: false },
    ]
  }),
  byId: procedure
    .input(
      z.object({
        id: z.number().max(3),
      })
    )
    .query(({ input }) => {
      return {
        id: input.id,
        title: `Task ${input.id}`,
        content: `Task ${input.id} content`,
        completed: false,
      }
    }),
  create: procedure
    .input(
      z.object({
        title: z.string(),
        content: z.string(),
      })
    )
    .mutation(({ input }) => {
      console.log(input)
      return {
        id: 3,
        title: input.title,
        content: input.content,
      }
    }),
  update: procedure
    .input(
      z.object({
        id: z.number(),
        title: z.string().optional(),
        content: z.string().optional(),
        completed: z.boolean().optional(),
      })
    )
    .mutation(({ input }) => {
      console.log(input)
      return {
        id: input.id,
        title: input.title,
        content: input.content,
      }
    }),
  delete: procedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .mutation(({ input }) => {
      console.log(input)
      return {
        id: input.id,
      }
    }),
})
