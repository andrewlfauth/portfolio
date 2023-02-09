import { useState } from 'preact/hooks'
import Skills from './Skills'
import Button from './Skills/Button'

function Bio() {
  const [showMore, setShowMore] = useState(false)

  return (
    <div id='bio' className='pt-60 px-4 sm:px-6'>
      <h2 className='font-redhat text-4xl md:text-5xl text-title text-center mb-14 md:mb-24'>
        Bio
      </h2>
      <div className='text-type md:text-2xl lg:text-3xl font-medium max-w-4xl mx-auto text-center'>
        <p className='mb-6'>
          Became interested in coding while working as a SEO
        </p>
        <p className='mb-6'>
          Enjoys the challenge of creating complex UI logic
        </p>
        <p className='mb-6'>Free time is spent around friends and family</p>

        <div className='mx-auto lg:mx-0 w-fit min-h-[392px] md:min-h-[412px]'>
          <span className='text-gray-400 text-sm md:text-lg mt-16 md:mt-20 mb-4 block text-left'>
            Technology skills
          </span>
          <Skills
            showMore={showMore}
            handleClick={() => setShowMore(!showMore)}
          />
          <Button
            showMore={showMore}
            handleClick={() => setShowMore(!showMore)}
            variant='sm'
          />
        </div>
      </div>
    </div>
  )
}

export default Bio
