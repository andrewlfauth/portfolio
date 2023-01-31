import { useEffect, useRef, useMemo } from 'preact/hooks'
import { gsap } from '../../utils/gsap'
import useProjectTabs from '../hooks/useProjectTabs'
import About from '../Projects/About'
import Features from '../Projects/Features'
import ProjectLinks from '../Projects/ProjectLinks'
import Tabs from '../Projects/Tabs'
import {
  Cloudinary,
  MongoDB,
  React,
  Remix,
  Tailwind,
} from '../Projects/TechCards'
import ScreenShots from './ScreenShots'

function Screentime() {
  const { tab, setTab, tabsRef } = useProjectTabs()
  const cardsRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const features = useMemo(
    () => [
      'User authentication',
      'Searchable database of 25+ children shows',
      'Title, description, teaching focus, and age range fields',
      'Like and save shows',
      "Matches users with shows that fit their child's learning goals",
      'Save groups of shows in a "plan"',
      'View plans created by other users with "Featured Plans"',
    ],
    []
  )

  const about = useMemo(
    () => [
      "Screen Time is an app that helps parents find the television shows that fit their child's learning needs.",
      "Having a 4 year old in the house, I have watched my fair share of children's TV shows. I've noticed that each show has a few specific learning focuses that they aim to teach the viewer. For instance, my son's favorite show Wild Kratts teaches children about animals, nature, and making predictions.",
      "Screen Time help's parents discover shows that teach their children what they want them to learn.",
      '  Search for shows by age range or teaching focus, create a plan for your child, and track of the shows they respond to.',
      '',
    ],
    []
  )

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
        <h2 className='font-redhat text-4xl md:text-5xl text-title text-center pb-2'>
          Screen Time
        </h2>
        <Tabs tabsRef={tabsRef} tab={tab} setTab={setTab} />
      </div>
      <div
        ref={linksRef}
        className='mx-auto w-fit mb-4 lg:translate-x-[-106px]'
      >
        <ProjectLinks
          repo='https://github.com/andrewlfauth/screen-time'
          site='https://screen-time.vercel.app'
        />
      </div>
      <div class='flex flex-col lg:flex-row lg:space-x-4 w-fit mx-auto'>
        <div
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
          class='min-h-[285px] lg:w-[697px]  px-6 md:px-0 md:w-[496.5px] mx-4 lg:mx-0'
        >
          {tab === 'screenshots' && <ScreenShots />}
          {tab === 'features' && <Features features={features} />}
          {tab === 'about' && <About paragraphs={about} />}
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
