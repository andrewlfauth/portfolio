import { useState } from 'preact/hooks'
import { settings } from '../../../stores/settings'
import clsx from 'clsx'
import cursorStyles from './cursorStyles'
import useDropdown from '../../hooks/useDropdown'

function CursorToggle() {
  const [activeCursorIdx, setActiveCursorIdx] = useState(0)
  const { expand, setExpand, parentRef } = useDropdown()

  const changeCursor = (value: { custom: boolean; style: string }) => {
    settings.setKey('cursor', value)
    setExpand(false)
  }

  let _ = clsx(
    'border-neutral-700 bg-gray-300 border-mat-purple bg-mat-green border-cat-blue border-cat-pink border-cobalt-blue border-cobalt-yellow'
  )

  return (
    <div ref={parentRef} class='border-2 border-primary rounded-lg bg-primary'>
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
              isXBtn={cursor.state.style === 'none'}
            />
          ))}
    </div>
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
      className='group flex items-center justify-center rounded-lg w-[35px] h-[35px] md:w-12 md:h-12 realtive'
    >
      {!isXBtn ? (
        <>
          <div
            className={`${border} w-6 h-6 md:w-8 md:h-8 border-2 absolute rounded-full`}
          ></div>
          <div
            className={`${bg} w-2 h-2 md:w-3 md:h-3 absolute rounded-full`}
          ></div>
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
