import { useStore } from '@nanostores/preact'
import { settings } from '../../stores/settings'
import CursorToggle from './CursorToggle'
import ThemeToggle from './ThemeToggle'

function Sidebar() {
  const state = useStore(settings)

  return (
    <>
      <ul className='flex flex-col fixed left-1 top-1/2 -translate-y-1/2 z-40 space-y-2'>
        <CursorToggle
          onClick={() => settings.setKey('cursor', !state.cursor)}
        />
      </ul>
      <ThemeToggle />
    </>
  )
}

export default Sidebar
