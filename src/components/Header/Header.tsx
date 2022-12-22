import { useEffect, useRef } from 'preact/hooks'
import { gsap } from '../../utils/gsap'
import { settings } from '../../stores/settings'
import CursorToggle from './CursorToggle'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import resume from '../../assets/resume.svg'
import Nav from './Nav'

function Sidebar() {
  const btnsRef = useRef<HTMLDivElement>(null)

  const openContactForm = () => settings.setKey('showContactForm', true)

  useEffect(() => {
    gsap.to(btnsRef.current, {
      scrollTrigger: {
        trigger: btnsRef.current,
        start: 'bottom -370',
        scrub: true,
      },
      opacity: 100,
      pointerEvents: 'auto',
    })
  }, [])

  return (
    <>
      <div className='flex fixed left-0 top-0 z-50 space-x-2 p-2 md:p-4'>
        <CursorToggle />
        <div
          ref={btnsRef}
          className='flex space-x-2 opacity-0 pointer-events-none'
        >
          <button
            class='h-10 w-20 md:w-[156px] md:h-[52px] rounded-lg border-2 border-primary text-mat-red catppuccin:text-cat-pink nightowl:text-nightowl-orange text-sm md:text-2xl font-medium font-redhat flex items-center justify-center select-none hover:scale-[1.02] bg-primary'
            onClick={openContactForm}
          >
            contact
          </button>
          <button class='w-10 h-10 md:w-[52px] md:h-[52px] rounded-lg border-primary items-center justify-center select-none hover:scale-[1.02] hidden md:flex bg-primary'>
            <img src={github} alt='github' class=' md:w-8' />
          </button>
          <button class='w-10 h-10 md:w-[52px] md:h-[52px] rounded-lg border-primary hidden md:flex items-center justify-center select-none hover:scale-[1.02] bg-primary'>
            <img src={linkedin} alt='github' class='md:w-8' />
          </button>
          <button class='w-10 h-10 md:w-[52px] md:h-[52px] rounded-lg border-primary hidden md:flex items-center justify-center select-none hover:scale-[1.02] bg-primary'>
            <img src={resume} alt='github' class='md:w-[28px]' />
          </button>
        </div>
      </div>
      <Nav />
    </>
  )
}

export default Sidebar
