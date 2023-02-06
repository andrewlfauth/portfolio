import { useMemo } from "preact/hooks"
import Group from "./Group"
import skillGroups from "./skillGroups"

function Skills({ showMore }: { showMore: boolean }) {
  const keys = useMemo(
    () => Object.keys(skillGroups) as Array<keyof typeof skillGroups>,
    []
  )

  return (
    <div className={`flex space-x-10`}>
      {keys.map((group, i) => (
        <Group key={i} icons={skillGroups[group]} showAll={showMore} />
      ))}
    </div>
  )
}

export default Skills
