"use client"

import { useCallback } from "react"

export function SpotlightBackground() {
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget.querySelector<HTMLDivElement>("[data-spotlight]")
    if (!el) return
    const { left, top } = e.currentTarget.getBoundingClientRect()
    el.style.setProperty("--x", `${e.clientX - left}px`)
    el.style.setProperty("--y", `${e.clientY - top}px`)
  }, [])

  return (
    <div
      onMouseMove={handleMouseMove}
      className="fixed inset-0 z-0 pointer-events-none"
    >
      {/* spotlight seguindo o mouse */}
      <div
        data-spotlight=""
        className="absolute inset-0"
        style={{
          "--x": "50%",
          "--y": "30%",
          background:
            "radial-gradient(600px circle at var(--x) var(--y), rgba(6,182,212,0.07), transparent 70%)",
        } as React.CSSProperties}
      />

      {/* gradiente base */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-transparent to-blue-950/20" />

      {/* luzes de fundo */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl" />
    </div>
  )
}
