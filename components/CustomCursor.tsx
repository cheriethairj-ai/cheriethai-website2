'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive =
        target.closest('a, button, [data-cursor-hover], input, textarea, label') !== null
      cursor.classList.toggle('is-hovering', isInteractive)
    }

    const loop = () => {
      const { x, y } = posRef.current
      cursor.style.transform = `translate(${x}px, ${y}px)`
      rafRef.current = requestAnimationFrame(loop)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseOver)
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div id="custom-cursor" ref={cursorRef} aria-hidden="true">
      <div ref={dotRef} className="cursor-dot" />
    </div>
  )
}
