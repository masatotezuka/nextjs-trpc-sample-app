"use client"

import { trpc } from "@/trpc/client"

export const Sample = () => {
  const { data } = trpc.hello.useQuery()
  console.log(data)
  return (
    <div>
      <h1>Client Side Component</h1>
      <div>{JSON.stringify(data)}</div>
    </div>
  )
}
