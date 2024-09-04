import { procedure, router, createCallerFactory } from "@/server/trpc"

/**
 * router of tRPC-backend
 * @link https://trpc.io/docs/quickstart#1-create-a-router-instance
 */
export const appRouter = router({
  // Add your API procedures here
  hello: procedure.query(() => {
    return { greeting: "Hello, world!" }
  }),
})

export type AppRouter = typeof appRouter

// createCaller関数を使用すると、任意のルータのサーバー側呼び出し元を作成できる
// https://trpc.io/docs/server/server-side-calls#create-caller
export const createCaller = createCallerFactory(appRouter)
