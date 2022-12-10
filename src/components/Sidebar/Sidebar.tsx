import { useStore } from '@nanostores/preact'
import { settings } from '../../stores/settings'
import CursorToggle from './CursorToggle'

function Sidebar() {
  const state = useStore(settings)

  return (
    <>
      <ul className='flex flex-col fixed left-2 top-2 z-40 space-y-2'>
        <CursorToggle />
      </ul>
    </>
  )
}

export default Sidebar
