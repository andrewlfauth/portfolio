import useProjectTabs from '../hooks/useProjectTabs'
import Tabs from '../Projects/Tabs'
import { useEffect, useRef, useMemo } from 'preact/hooks'
import ProjectLinks from '../Projects/ProjectLinks'
import { Vue, Gsap, Pinia, Tailwind } from '../Projects/TechCards'
import About from '../Projects/About'
import Features from '../Projects/Features'
import { gsap } from '../../utils/gsap'

function Cribbage() {
  const { tab, setTab } = useProjectTabs()
  const cardsRef = useRef<HTMLDivElement>(null)

  const features = useMemo(
    () => [
      'Play cribbage against the computer',
      'Realistic card animations',
      'Customizable color theme and card back image',
      'Interactive game play',
      'Smooth scoring alerts',
      'Hand scoring and pegging logic',
      'State management via Pinia stores',
      'Confetti if you win',
    ],
    []
  )

  const about = useMemo(
    () => [
      "Cribbage is a card game that I played with my dad when I was a kid. After hearing great things about Vue 3's composition API, I decided to build my own cribbage app with it.",
      'Vue made creating the UI logic for this app simple and straight forward. I was really impressed with the reactivity API which made creating reactive global state simple.',
      "I went with GSAP for the app's animation library. The reason for this decision was based on my need for their Flip plugin which animates DOM structure changes such as appending and removing elements (cards).",
      'The most challenging part of building this app was the actual game play logic. The pegging round specifically was challenging. I had to run several checks each time a card was played such as checking if the card scored, if the player was now out of cards, if the last turn was a go, etc.',
      'I solved this through trial and error and after a few refactors, I ended up pretty happy with my implementation.',
    ],
    []
  )

  useEffect(() => {
    gsap.from(cardsRef.current!.children, {
      scrollTrigger: {
        trigger: cardsRef.current,
        start: 'top 80%',
      },
      stagger: 0.1,
      x: -150,
      opacity: 0,
      delay: 0.3,
      ease: 'power1.out',
    })
  }, [])
  return (
    <div class='pt-60'>
      <div className='pb-6 md:pb-16'>
        <h2 className='font-redhat text-4xl md:text-5xl text-title text-center pb-2'>
          Cribbage
        </h2>
        <Tabs tab={tab} setTab={setTab} />
      </div>
      <div className='mx-auto w-fit mb-4 lg:translate-x-[-106px]'>
        <ProjectLinks
          repo='https://github.com/andrewlfauth/cribbage'
          site='https://cribbage.vercel.app/'
        />
      </div>

      <div class='flex flex-col lg:flex-row lg:space-x-4 w-fit mx-auto'>
        <div
          ref={cardsRef}
          className='hidden lg:flex items-end flex-col space-y-2'
        >
          <Vue />
          <Pinia />
          <Tailwind />
          <Gsap />
        </div>
        <div class='min-h-[285px] lg:w-[697px]  px-6 md:px-0 md:w-[496.5px] mx-4 lg:mx-0'>
          {tab == 'screenshots' && (
            <video controls className='rounded-md'>
              <source
                src='https://res.cloudinary.com/dpnkrz8c8/video/upload/v1675205691/portfolio/xewm5vupuanedyfp9tth.mp4'
                type='video/webm'
              />
            </video>
          )}
          {tab == 'features' && <Features features={features} />}
          {tab == 'about' && <About paragraphs={about} />}
        </div>
        <div className='flex flex-wrap space-x-2 mt-4 justify-center lg:hidden max-w-[496.5px] mx-4 md:mx-0'>
          <Vue />
          <Pinia />
          <Tailwind />
          <Gsap />
        </div>
      </div>
    </div>
  )
}

export default Cribbage
