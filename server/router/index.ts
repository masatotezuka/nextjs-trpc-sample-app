import { router, createCallerFactory } from "@/server/trpc"
import { taskRouter } from "@/server/router/tasks"
import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server"
/**
 * router of tRPC-backend
 * @link https://trpc.io/docs/quickstart#1-create-a-router-instance
 */

export const appRouter = router({
  task: taskRouter,
})

export type AppRouter = typeof appRouter

// createCaller関数を使用すると、任意のルータのサーバー側呼び出し元を作成できる
// https://trpc.io/docs/server/server-side-calls#create-caller
export const createCaller = createCallerFactory(appRouter)

// フロントエンドで使用する型をエクスポート
export type RouterInput = inferRouterInputs<AppRouter>
export type RouterOutput = inferRouterOutputs<AppRouter>
