import { useState } from 'preact/hooks'
import Skills from './Skills'
import Button from './Skills/Button'

function Bio() {
  const [showMore, setShowMore] = useState(false)

  return (
    <div
      id="bio"
      className={`${
        showMore ? 'mb-20 lg:mb-20' : 'delay-300'
      } pt-52 lg:pt-60 px-4 sm:px-6 duration-300`}
    >
      <h2 className="font-redhat text-4xl md:text-5xl text-title text-center mb-6 md:mb-8">
        Bio
      </h2>
      <div className="text-type text-sm md:text-2xl lg:text-3xl max-w-4xl mx-auto text-center space-y-2 md:space-y-4 lg:space-y-6">
        <p>Enjoys the challenge of creating complex UI logic.</p>
        <p>Free time is spent with friends and family.</p>

        <div className="mx-auto lg:mx-0 w-fit min-h-[392px] md:min-h-[412px]">
          <span className="text-gray-400 text-sm md:text-lg mt-12 md:mt-20 mb-4 block text-left">
            Technology skills
          </span>
          <Skills
            showMore={showMore}
            handleClick={() => setShowMore(!showMore)}
          />
          <Button
            showMore={showMore}
            handleClick={() => setShowMore(!showMore)}
            variant="sm"
          />
        </div>
      </div>
    </div>
  )
}

export default Bio
