import { cookies } from "next/dist/client/components/headers"

export default function Count() {
  const count = cookies().get("count")?.value ?? 0
  return <p>{count}</p>
}
