import { useState, useRef, useEffect } from 'preact/hooks'
import { settings } from '../../../stores/settings'
import autoAnimate from '@formkit/auto-animate'
import clsx from 'clsx'
import cursorStyles from './cursorStyles'

function CursorToggle() {
  const [expand, setExpand] = useState(false)
  const [activeCursorIdx, setActiveCursorIdx] = useState(0)
  const parentRef = useRef<HTMLLIElement>(null)

  const changeCursor = (value: { custom: boolean; style: string }) => {
    settings.setKey('cursor', value)
    setExpand(false)
  }

  useEffect(() => {
    parentRef.current &&
      autoAnimate(parentRef.current, { duration: 200, easing: 'ease-out' })
  }, [parentRef])

  let STYLES = clsx(
    'border-neutral-700 bg-gray-300 border-mat-purple bg-mat-green border-cat-blue border-cat-pink border-cobalt-blue border-cobalt-yellow'
  )

  return (
    <li ref={parentRef} class='border-2 border-gray-800 rounded-lg'>
      <CursorButton
        onClick={
          expand
            ? () => changeCursor({ custom: true, style: 'default' })
            : () => setExpand(true)
        }
        bg={cursorStyles[activeCursorIdx].bg}
        border={cursorStyles[activeCursorIdx].border}
        isXBtn={activeCursorIdx === cursorStyles.length - 1}
      />
      {expand &&
        cursorStyles
          .filter((cursor) => cursor.id !== activeCursorIdx)
          .map((cursor) => (
            <CursorButton
              key={cursor.id}
              border={cursor.border}
              bg={cursor.bg}
              onClick={() => {
                changeCursor(cursor.state)
                setActiveCursorIdx(cursor.id)
              }}
              isXBtn={!cursor.state.style}
            />
          ))}
    </li>
  )
}

const CursorButton = ({
  onClick,
  border,
  bg,
  isXBtn = false,
}: {
  onClick: () => void
  border: string
  bg: string
  isXBtn?: boolean
}) => {
  return (
    <button
      onClick={onClick}
      className='group flex items-center justify-center rounded-lg w-12 h-12 realtive'
    >
      {!isXBtn ? (
        <>
          <div
            className={`${border} w-8 h-8 border-2  absolute rounded-full`}
          ></div>
          <div className={`${bg} w-3 h-3 absolute rounded-full`}></div>
        </>
      ) : (
        <>
          <div className='w-2/3 border-t-2 border-gray-400 absolute rotate-45'></div>
          <div className='w-2/3 border-t-2 border-gray-400 absolute -rotate-45'></div>
        </>
      )}
    </button>
  )
}

export default CursorToggle
