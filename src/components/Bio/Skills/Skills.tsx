import { useMemo, useEffect, useState } from 'preact/hooks'
import Group from './Group'
import skillGroups from './skillGroups'

function Skills({
  showMore,
  handleClick,
}: {
  showMore: boolean
  handleClick: () => void
}) {
  const [buttonMessage, setButtonMessage] = useState('Show more')

  useEffect(() => {
    let id: any
    if (showMore) id = setTimeout(() => setButtonMessage('Show less'), 150)
    else id = setTimeout(() => setButtonMessage('Show more'), 150)
    return () => clearTimeout(id)
  }, [showMore])

  const keys = useMemo(
    () => Object.keys(skillGroups) as Array<keyof typeof skillGroups>,
    []
  )

  return (
    <div className='flex space-x-10 items-start'>
      {keys.map((group, i) => (
        <Group key={i} icons={skillGroups[group]} showAll={showMore} />
      ))}
      <button
        onClick={handleClick}
        className='border-2 border-primary rounded-md text-base py-2 mt-6 w-32'
      >
        {buttonMessage}
      </button>
    </div>
  )
}

export default Skills
