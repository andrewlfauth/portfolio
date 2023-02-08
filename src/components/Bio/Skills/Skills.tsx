import { useMemo, useEffect, useState } from "preact/hooks"
import Button from "./Button"
import Group from "./Group"
import skillGroups from "./skillGroups"

function Skills({
  showMore,
  handleClick,
}: {
  showMore: boolean
  handleClick: () => void
}) {
  const keys = useMemo(
    () => Object.keys(skillGroups) as Array<keyof typeof skillGroups>,
    []
  )

  return (
    <div className='flex space-x-6 md:space-x-8 items-start'>
      {keys.map((group, i) => (
        <Group key={i} icons={skillGroups[group]} showAll={showMore} />
      ))}

      <Button showMore={showMore} handleClick={handleClick} />
    </div>
  )
}

export default Skills
