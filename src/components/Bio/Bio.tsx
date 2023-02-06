import { useState } from "preact/hooks"
import Skills from "./Skills"

function Bio() {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className='py-32'>
      <h2 className='font-redhat text-4xl md:text-5xl text-title text-center mb-24'>
        Bio
      </h2>
      <div className='text-type text-3xl font-medium max-w-4xl mx-auto'>
        <p className='mb-6'>
          Became interested in coding while working as a SEO
        </p>
        <p className='mb-6'>
          Enjoys the challenge of creating complex UI logic
        </p>
        <p className='mb-6'>Free time is spent around friends and family</p>

        <span className='text-gray-400 text-lg mt-20 mb-4 block'>
          Technology skills
        </span>
        <Skills
          showMore={showMore}
          handleClick={() => setShowMore(!showMore)}
        />
      </div>
    </div>
  )
}

export default Bio
