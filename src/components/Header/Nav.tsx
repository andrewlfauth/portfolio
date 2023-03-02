import { useState, useEffect, useRef } from 'preact/hooks'
import { settings } from '../../stores/settings'
import MenuButton from '../Menu/MenuButton'
import NavLink from './NavLink'

type Section = 'home' | 'projects' | 'bio' | 'freelance'

function Nav() {
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

    ioRef.current.observe(home)
    ioRef.current.observe(projectsStart)
    ioRef.current.observe(projectsEnd)
    ioRef.current.observe(bio)
    ioRef.current.observe(freelance)
  }, [])

  return (
    <nav className='fixed top-0 right-0 z-50 pt-6 pr-20'>
      <ul className='hidden lg:flex space-x-20 text-transparent  font-medium text-lg font-inter'>
        <NavLink
          href='/#'
          text='Home'
          handleClick={scrollToTop}
          section='home'
          activeSection={activeSection}
        />
        <NavLink
          href='/#projects-start'
          text='Projects'
          section='projects'
          activeSection={activeSection}
        />
        <NavLink
          href='/#bio'
          text='Bio'
          section='bio'
          activeSection={activeSection}
        />
        <NavLink
          href='/#freelance'
          text='Freelance'
          section='freelance'
          activeSection={activeSection}
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
        } duration-300 w-screen h-screen bg-neutral-800 catppuccin:bg-cat-border nightowl:bg-nightowl-border fixed top-0 right-0 z-[60] p-10 font-inter lg:hidden`}
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
            <a href='#'>Home</a>
          </li>
          <li onClick={() => setOpenMenu(false)} className='text-type text-2xl'>
            <a href='#projects-start'>Projects</a>
          </li>
          <li onClick={() => setOpenMenu(false)} className='text-type text-2xl'>
            <a href='#bio'>Bio</a>
          </li>
        </ul>
        <div className='flex mt-20 space-x-6'>
          <svg
            width='35'
            height='35'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 14.42 2.87 18.17 6.84 19.5C7.34 19.58 7.5 19.27 7.5 19V17.31C4.73 17.91 4.14 15.97 4.14 15.97C3.68 14.81 3.03 14.5 3.03 14.5C2.12 13.88 3.1 13.9 3.1 13.9C4.1 13.97 4.63 14.93 4.63 14.93C5.5 16.45 6.97 16 7.54 15.76C7.63 15.11 7.89 14.67 8.17 14.42C5.95 14.17 3.62 13.31 3.62 9.5C3.62 8.39 4 7.5 4.65 6.79C4.55 6.54 4.2 5.5 4.75 4.15C4.75 4.15 5.59 3.88 7.5 5.17C8.29 4.95 9.15 4.84 10 4.84C10.85 4.84 11.71 4.95 12.5 5.17C14.41 3.88 15.25 4.15 15.25 4.15C15.8 5.5 15.45 6.54 15.35 6.79C16 7.5 16.38 8.39 16.38 9.5C16.38 13.32 14.04 14.16 11.81 14.41C12.17 14.72 12.5 15.33 12.5 16.26V19C12.5 19.27 12.66 19.59 13.17 19.5C17.14 18.16 20 14.42 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0V0Z'
              fill='#F8F8F8'
            />
          </svg>
          <svg
            width='35'
            height='35'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M19.959 11.693V19.072H15.681V12.187C15.681 10.457 15.062 9.277 13.514 9.277C12.332 9.277 11.628 10.073 11.319 10.842C11.206 11.117 11.177 11.5 11.177 11.885V19.072H6.897C6.897 19.072 6.955 7.412 6.897 6.203H11.177V8.027L11.149 8.069H11.177V8.027C11.745 7.152 12.76 5.901 15.033 5.901C17.848 5.901 19.959 7.741 19.959 11.693V11.693ZM2.421 0C0.958 0 0 0.96 0 2.223C0 3.458 0.93 4.447 2.365 4.447H2.393C3.886 4.447 4.813 3.458 4.813 2.223C4.787 0.96 3.887 0 2.422 0H2.421ZM0.254 19.072H4.532V6.203H0.254V19.072Z'
              fill='#F8F8F8'
            />
          </svg>
          <svg
            width='26'
            height='36'
            viewBox='0 0 12 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M4 1.53971e-07C3.46957 1.53971e-07 2.96086 0.210714 2.58579 0.585787C2.21071 0.960859 2 1.46957 2 2V4.401C2.30907 4.22205 2.64779 4.10011 3 4.041V2C3 1.73478 3.10536 1.48043 3.29289 1.29289C3.48043 1.10536 3.73478 1 4 1H7V3.5C7 3.89782 7.15804 4.27936 7.43934 4.56066C7.72064 4.84196 8.10218 5 8.5 5H11V12C11 12.2652 10.8946 12.5196 10.7071 12.7071C10.5196 12.8946 10.2652 13 10 13H7.632C7.43103 13.3778 7.15787 13.7124 6.828 13.985L6.81 14H10C10.5304 14 11.0391 13.7893 11.4142 13.4142C11.7893 13.0391 12 12.5304 12 12V4.414C11.9996 4.01631 11.8414 3.63504 11.56 3.354L8.647 0.439C8.50764 0.299733 8.34222 0.189283 8.16017 0.113959C7.97812 0.0386344 7.78302 -8.9109e-05 7.586 1.53971e-07H4ZM10.793 4H8.5C8.36739 4 8.24021 3.94732 8.14645 3.85355C8.05268 3.75979 8 3.63261 8 3.5V1.207L10.793 4ZM5.5 7C5.5 7.53043 5.28929 8.03914 4.91421 8.41421C4.53914 8.78929 4.03043 9 3.5 9C2.96957 9 2.46086 8.78929 2.08579 8.41421C1.71071 8.03914 1.5 7.53043 1.5 7C1.5 6.46957 1.71071 5.96086 2.08579 5.58579C2.46086 5.21071 2.96957 5 3.5 5C4.03043 5 4.53914 5.21071 4.91421 5.58579C5.28929 5.96086 5.5 6.46957 5.5 7V7ZM7 11.5C7 12.745 6 14 3.5 14C1 14 0 12.75 0 11.5C0 11.1022 0.158035 10.7206 0.43934 10.4393C0.720644 10.158 1.10218 10 1.5 10H5.5C5.89782 10 6.27936 10.158 6.56066 10.4393C6.84196 10.7206 7 11.1022 7 11.5V11.5Z'
              fill='#F8F8F8'
            />
          </svg>
        </div>
        <MenuButton
          text='contact'
          className='mt-36'
          onClick={openContactForm}
        />
      </div>
    </nav>
  )
}

export default Nav
