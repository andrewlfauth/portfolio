import { useState, useEffect, useRef } from 'preact/hooks'
import { settings } from '../../stores/settings'
import MenuButton from '../Menu/MenuButton'
import NavLink from './NavLink'
import github from '../../assets/github.svg'

type Section = 'home' | 'projects' | 'bio' | 'freelance'

function Nav({ isMinimal }: { isMinimal?: boolean }) {
  console.log(isMinimal)
  const [openMenu, setOpenMenu] = useState(false)
  const [activeSection, setActiveSection] = useState<Section>('home')
  const ioRef = useRef<any>(null)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openContactForm = () => {
    settings.setKey('showContactForm', true)
  }

  useEffect(() => {
    if (window.location.pathname.includes('/freelance/'))
      setActiveSection('freelance')
  }, [window.location])

  useEffect(() => {
    ioRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let id = entry.target.id
            if (id.includes('-')) setActiveSection('projects')
            else setActiveSection(id as Section)
          }
        })
      },
      { threshold: 0.2 }
    )

    const home = document.querySelector('#home') as HTMLElement
    const projectsStart = document.querySelector(
      '#projects-start'
    ) as HTMLElement
    const projectsEnd = document.querySelector('#projects-end') as HTMLElement
    const bio = document.querySelector('#bio') as HTMLElement
    const freelance = document.querySelector('#freelance') as HTMLElement

    if (!window.location.pathname.includes('/freelance/')) {
      ioRef.current.observe(home)
      ioRef.current.observe(projectsStart)
      ioRef.current.observe(projectsEnd)
      ioRef.current.observe(bio)
      ioRef.current.observe(freelance)
    }
  }, [window.location.pathname])

  return (
    <nav className='fixed top-0 right-0 z-50 pt-6 pr-20'>
      <ul className='hidden lg:flex space-x-20 text-transparent font-medium text-lg font-inter'>
        <NavLink
          href='/#'
          text='Home'
          isActive={
            activeSection == 'home' &&
            !window.location.pathname.startsWith('/blog')
          }
        />
        {!isMinimal && (
          <>
            <NavLink
              href='/#projects-start'
              text='Apps'
              isActive={activeSection == 'projects'}
            />
            <NavLink
              href='/#bio'
              text='Bio'
              isActive={activeSection == 'bio'}
            />
            <NavLink
              href='/#freelance'
              text='Freelance'
              isActive={activeSection == 'freelance'}
            />
          </>
        )}
        <NavLink
          href='/blog'
          text='Blog'
          isActive={window.location.pathname.startsWith('/blog')}
        />
      </ul>

      <button
        style='-webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;'
        className={`${
          openMenu ? 'hamburger-open' : 'hamburger'
        } space-y-[.4rem] absolute top-5 md:top-7 right-6 flex flex-col items-end duration-500 z-[70] lg:hidden`}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <span className='block w-6 border-b-2 border-white duration-500'></span>
        <span className='block w-6 border-b-2 border-white duration-500'></span>
        <span className='block w-6 border-b-2 border-white duration-500'></span>
      </button>

      <div
        className={`${
          openMenu ? '' : 'translate-x-full'
        } duration-300 w-screen md:w-1/2 h-screen bg-neutral-800 catppuccin:bg-cat-border nightowl:bg-nightowl-border fixed top-0 right-0 z-[60] p-10 font-inter lg:hidden`}
      >
        <span class='text-3xl font-bold tracking-tight text-mat-red catppuccin:text-cat-pink nightowl:text-nightowl-blue mb-10'>
          Menu
        </span>
        <ul className='flex flex-col space-y-6 pt-20 font-medium'>
          <li
            onClick={() => {
              setOpenMenu(false)
              scrollToTop()
            }}
            className='text-type text-2xl'
          >
            <a href='/'>Home</a>
          </li>
          <li onClick={() => setOpenMenu(false)} className='text-type text-2xl'>
            <a href='/#projects-start'>Apps</a>
          </li>
          <li onClick={() => setOpenMenu(false)} className='text-type text-2xl'>
            <a href='/#bio'>Bio</a>
          </li>
          <li onClick={() => setOpenMenu(false)} className='text-type text-2xl'>
            <a href='/#freelance'>Freelance</a>
          </li>
          <li onClick={() => setOpenMenu(false)} className='text-type text-2xl'>
            <a href='/blog'>Blog</a>
          </li>
        </ul>
        <div className='mt-20 space-y-6'>
          <a
            href='https://github.com/andrewlfauth'
            target='_blank'
            rel='noreferre'
            className='flex items-center text-type text-2xl font-medium'
          >
            <img src={github} alt='github' className='w-8 mr-4' />
            GitHub
          </a>
        </div>
        <MenuButton
          text='contact'
          className='mt-10'
          onClick={openContactForm}
        />
      </div>
    </nav>
  )
}

export default Nav
