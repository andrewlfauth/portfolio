import { useState, useEffect, useRef } from 'preact/hooks'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import ProjectLinks from '../ProjectLinks'
import { Cloudinary, MongoDB, React, Remix, Tailwind } from '../TechCards'
import About from './About'
import Features from './Features'
import ScreenShots from './ScreenShots'

gsap.registerPlugin(ScrollTrigger)

function Screentime() {
  const [tab, setTab] = useState('screenshots')
  const cardsRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const tabsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.from([contentRef.current, linksRef.current], {
      scrollTrigger: {
        trigger: cardsRef.current,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
        once: true,
      },
      y: 80,
      opacity: 0,
    })
    gsap.from(tabsRef.current, {
      scrollTrigger: {
        trigger: cardsRef.current,
        start: 'top 80%',
      },
      opacity: 0,
    })
    gsap.from(cardsRef.current!.children, {
      scrollTrigger: {
        trigger: contentRef.current,
        start: 'top 80%',
      },
      stagger: 0.2,
      x: -150,
      opacity: 0,
      delay: 0.3,
    })
  }, [])

  return (
    <div class='pt-60'>
      <div className='pb-6 md:pb-10'>
        <h2 className='font-redhat text-4xl md:text-5xl text-white text-center pb-2'>
          Screen Time
        </h2>
        <div
          ref={tabsRef}
          class='mx-auto w-fit md:text-lg font-redhat flex space-x-4'
        >
          <span
            onClick={() => setTab('screenshots')}
            className={`${
              tab === 'screenshots'
                ? 'text-nightowl-orange'
                : 'text-nightowl-blue'
            } cursor-pointer`}
          >
            Screenshots
          </span>
          <span
            onClick={() => setTab('features')}
            className={`${
              tab === 'features' ? 'text-nightowl-orange' : 'text-nightowl-blue'
            } cursor-pointer`}
          >
            Features
          </span>
          <span
            onClick={() => setTab('about')}
            className={`${
              tab === 'about' ? 'text-nightowl-orange' : 'text-nightowl-blue'
            } cursor-pointer`}
          >
            About
          </span>
        </div>
      </div>
      <div
        ref={linksRef}
        className='mx-auto w-fit mb-4 lg:translate-x-[-106px]'
      >
        <ProjectLinks />
      </div>

      <div class='flex flex-col lg:flex-row lg:space-x-4 w-fit mx-auto'>
        <div
          id='p'
          ref={cardsRef}
          className='hidden lg:flex items-end flex-col space-y-2'
        >
          <MongoDB />
          <Remix />
          <Tailwind />
          <React />
          <Cloudinary />
        </div>
        <div
          ref={contentRef}
          class='min-h-[285px] lg:w-[697px] md:h-[400px] px-6 md:px-0 md:w-[496.5px] mx-4 lg:mx-0'
        >
          {tab === 'screenshots' && <ScreenShots />}
          {tab === 'features' && <Features />}
          {tab === 'about' && <About />}
        </div>
        <div className='flex flex-wrap space-x-2 mt-4 justify-center lg:hidden max-w-[496.5px] mx-4 md:mx-0'>
          <MongoDB />
          <Remix />
          <Tailwind />
          <React />
          <Cloudinary />
        </div>
      </div>
    </div>
  )
}

export default Screentime
