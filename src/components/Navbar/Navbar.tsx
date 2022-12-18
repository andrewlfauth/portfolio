import { useState, useEffect, useRef } from 'preact/hooks'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import CursorToggle from './CursorToggle'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import resume from '../../assets/resume.svg'

gsap.registerPlugin(ScrollTrigger)

function Sidebar() {
  const btnsRef = useRef<HTMLLIElement>(null)

  // useEffect(() => {
  //   gsap.to(btnsRef.current, {
  //     scrollTrigger: {
  //       trigger: btnsRef.current,
  //       markers: true,
  //       start: 'bottom -350',
  //     },
  //     opacity: 1,
  //   })
  // }, [])

  return (
    <>
      <ul className='flex fixed left-0 top-0 z-50 space-x-2 w-full p-2 md:p-4'>
        <CursorToggle />
        <li ref={btnsRef} className='flex space-x-2'>
          <button class='h-10 w-20 md:w-[156px] md:h-[52px] rounded-lg border-2 border-gray-800 text-nightowl-blue text-sm md:text-2xl font-medium font-redhat flex items-center justify-center select-none hover:scale-[1.02] bg-neutral-900'>
            contact
          </button>
          <button class='w-10 h-10 md:w-[52px] md:h-[52px] rounded-lg border-2 border-gray-800 items-center justify-center select-none hover:scale-[1.02] hidden md:flex bg-neutral-900'>
            <img src={github} alt='github' class=' md:w-8' />
          </button>
          <button class='w-10 h-10 md:w-[52px] md:h-[52px] rounded-lg border-2 border-gray-800 hidden md:flex items-center justify-center select-none hover:scale-[1.02] bg-neutral-900'>
            <img src={linkedin} alt='github' class='md:w-8' />
          </button>
          <button class='w-10 h-10 md:w-[52px] md:h-[52px] rounded-lg border-2 border-gray-800 hidden md:flex items-center justify-center select-none hover:scale-[1.02] bg-neutral-900'>
            <img src={resume} alt='github' class='md:w-[28px]' />
          </button>
        </li>
      </ul>
    </>
  )
}

export default Sidebar
