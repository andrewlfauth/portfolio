import { useState, useRef, useEffect } from 'preact/hooks'
import autoAnimate from '@formkit/auto-animate'

export default function useDropdown() {
  const [expand, setExpand] = useState(false)
  const parentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    parentRef.current &&
      autoAnimate(parentRef.current, { duration: 200, easing: 'ease-out' })
  }, [parentRef])

  return { expand, setExpand, parentRef }
}
