import { cookies } from "next/headers"
import { Increment } from "./increment"

export default function Home() {
  async function increment() {
    "use server"
    const count = Number(cookies().get("count")?.value) || 0
    // @ts-expect-error
    cookies().set("count", String(count + 1))
  }
  return <Increment onClick={increment} />
}
