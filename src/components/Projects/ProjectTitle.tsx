type Props = {
  title: string
  description: string
}

function ProjectTitle({ title, description }: Props) {
  return (
    <div className='w-fit relative mx-auto'>
      <h2 className='font-redhat text-4xl md:text-5xl text-title text-center pb-2 '>
        {title}
      </h2>
      <span className='absolute -top-2 -right-4 text-type group'>
        &&
        <span className='absolute -top-8 opacity-0 group-hover:opacity-100'>
          {description}
        </span>
      </span>
    </div>
  )
}

export default ProjectTitle
