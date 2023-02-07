import useDropdown from '../../hooks/useDropdown'

interface Props {
  icons: SkillIcon[]
  showAll: boolean
}

function Group({ icons, showAll }: Props) {
  const { parentRef } = useDropdown()

  return (
    <div ref={parentRef} className='space-y-4'>
      <Icon icon={icons[0]} />
      {showAll && icons.slice(1).map((icon) => <Icon key={icon} icon={icon} />)}
    </div>
  )
}

interface SkillIcon {
  img: string
  alt: string
  label: string
  scale?: string
}

const Icon = ({ icon }: { icon: SkillIcon }) => (
  <div className='flex flex-col items-center'>
    <div className='w-20 h-20 select-none'>
      <img
        className={`${icon.scale || ''} object-scale-down w-full h-full`}
        src={icon.img}
        alt={icon.alt}
      />
    </div>
    <h3 className='text-gray-400 text-center text-sm tracking-wide font-normal'>
      {icon.label}
    </h3>
  </div>
)

export default Group
