import { useState } from "preact/hooks"
import Skills from "./Skills"

function Bio() {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className='py-32 h-screen'>
      <h2 className='font-redhat text-4xl md:text-5xl text-title text-center mb-20'>
        Bio
      </h2>
      {/* <img
        src='https://res.cloudinary.com/dpnkrz8c8/image/upload/v1675571476/portfolio/gvpekx21igsqdszyetjo.png'
        alt=''
      /> */}
      <div className='text-mat-blue text-3xl font-medium max-w-4xl mx-auto'>
        <p className='mb-4'>I got introduced to coding while working in SEO.</p>
        <p className='mb-4'>
          Since then, creating complex UI logic has been what excites me
        </p>
        <p className='mb-4'>
          I am always up for a challenge and constantly learning new things
        </p>
        <p className='mb-4'>Team player who thrives in a creative setting</p>

        <span
          onClick={() => setShowMore(!showMore)}
          className='text-gray-400 text-lg mt-20 mb-4 block'
        >
          Technology skills
        </span>
        <Skills showMore={showMore} />
      </div>
    </div>
  )
}

export default Bio
