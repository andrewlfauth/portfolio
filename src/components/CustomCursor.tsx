import { useEffect, useRef } from 'preact/hooks'
import { useStore } from '@nanostores/preact'
import { clsx } from 'clsx'
import { settings } from '../stores/settings'

function CustomCursor() {
  const cursorSettings = useStore(settings).cursor
  const OUTER_STYLES = clsx(
    {
      'border-neutral-700': cursorSettings.style === 'default',
      'border-mat-purple': cursorSettings.style === 'material',
      'border-cat-blue': cursorSettings.style === 'catppuccin',
      'border-cobalt-blue': cursorSettings.style === 'cobalt',
      'border-nightowl-orange': cursorSettings.style === 'nightowl',
      'border-slate-700': cursorSettings.style === 'red',
    },
    'fixed -left-4 top-0 -translate-x-1/2 -translate-y-1/2 z-50 w-8 h-8 border-2 rounded-full pointer-events-none'
  )
  const INNER_STYLES = clsx(
    {
      'bg-gray-300': cursorSettings.style === 'default',
      'bg-mat-green': cursorSettings.style === 'material',
      'bg-cat-pink': cursorSettings.style === 'catppuccin',
      'bg-cobalt-yellow': cursorSettings.style === 'cobalt',
      'bg-nightowl-blue': cursorSettings.style === 'nightowl',
      'bg-red-600': cursorSettings.style === 'red',
    },
    'fixed -left-4 top-0 -translate-x-1/2 -translate-y-1/2 z-50 w-3 h-3 rounded-full pointer-events-none'
  )

  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent) => {
    let x = e.clientX
    let y = e.clientY
    outerRef.current!.style.left = x + 'px'
    outerRef.current!.style.top = y + 'px'
    innerRef.current!.style.top = y + 'px'
    innerRef.current!.style.left = x + 'px'
  }

  const handleMouseDown = () => {
    outerRef.current!.style.width = '2.75rem'
    innerRef.current!.style.width = '.25rem'
    outerRef.current!.style.height = '2.75rem'
    innerRef.current!.style.height = '.25rem'
  }

  const handleMouseUp = () => {
    outerRef.current!.style.width = ''
    innerRef.current!.style.width = ''
    outerRef.current!.style.height = ''
    innerRef.current!.style.height = ''
  }

  const addCursor = () => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
  }

  const removeCursor = () => {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mousedown', handleMouseDown)
    document.removeEventListener('mouseup', handleMouseUp)
  }

  useEffect(() => {
    if (!cursorSettings.custom) {
      removeCursor()
    } else {
      addCursor()
    }
    return () => removeCursor()
  }, [cursorSettings])

  return (
    <div className={`${cursorSettings.custom ? '' : 'hidden'}`}>
      <div
        ref={innerRef}
        style={{ transition: 'width .2s, height .2s' }}
        className={INNER_STYLES}
      ></div>
      <div
        ref={outerRef}
        style={{ transition: 'width 100ms, height 100ms' }}
        className={OUTER_STYLES}
      ></div>
    </div>
  )
}

export default CustomCursor
