import { useState, useEffect } from 'react'

/**
 * Returns true on touch/mobile devices.
 * Used to disable parallax scroll effects that cause jank on mobile.
 */
export function useIsTouch(): boolean {
  const [isTouch, setIsTouch] = useState(false)
  useEffect(() => {
    setIsTouch(
      window.matchMedia('(pointer: coarse)').matches ||
      ('ontouchstart' in window)
    )
  }, [])
  return isTouch
}
