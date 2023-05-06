"use client"

export function Increment({ onClick }: { onClick: () => Promise<void> }) {
  return (
    <button
      onClick={async () => {
        await onClick()
      }}
    >
      increment
    </button>
  )
}
