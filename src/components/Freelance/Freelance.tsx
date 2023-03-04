import { useMemo, useState, useRef, useEffect } from 'preact/hooks'
import { clsx } from 'clsx'
import JobsModal from './JobsModal'

function Freelance() {
  const [activeJobIdx, setActiveJobIdx] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  let intervalRef = useRef<any>(null)

  const jobs = useMemo(
    () => [
      {
        name: 'AVRGLOW Beats',
        href: '/freelance/avarglow-beats',
        desktopImageSrc:
          'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1677531097/portfolio/avrglow-dt.png',
        mobileImageSrc:
          'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1677531100/portfolio/avrglow-mb.png',
        bgColorClass: 'bg-green-400',
        borderColorClass: 'border-green-400',
      },
      {
        name: 'Wells Landscaping',
        href: '/freelance/wells-landscaping',
        desktopImageSrc:
          'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1677531644/portfolio/wells-dt.png',
        mobileImageSrc:
          'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1677531701/portfolio/wells-mb.png',
        bgColorClass: 'bg-emerald-600',
        borderColorClass: 'border-emerald-600',
      },
      {
        name: 'Southern Spring Cleaners',
        href: '/freelance/southern-spring-cleaners',
        desktopImageSrc:
          'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1677892142/portfolio/ssc-dt1.png',
        mobileImageSrc:
          'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1677892396/portfolio/ssc-mb1.png',
        bgColorClass: 'bg-purple-400',
        borderColorClass: 'border-purple-400',
      },
    ],
    []
  )

  useEffect(() => {
    intervalRef.current = setInterval(
      () =>
        activeJobIdx == jobs.length - 1
          ? setActiveJobIdx(0)
          : setActiveJobIdx(activeJobIdx + 1),
      5000
    )
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [activeJobIdx])

  const _ = clsx(
    'bg-green-400 bg-emerald-600 bg-purple-400 border-green-400 border-purple-400 border-green-400'
  )

  return (
    <div id='freelance' className='pt-60 px-4 sm:px-6'>
      <div className='pb-16'>
        <h2 className='font-redhat text-4xl md:text-5xl text-title text-center pb-2'>
          Freelance Work
        </h2>
        <button
          onClick={() => setOpenModal(true)}
          className='mx-auto outline-none rounded-md text-center block font-semibold text-gray-300 catppuccin:text-cat-overlay nightowl:text-nightowl-text'
        >
          Learn More
        </button>
      </div>

      <div className='flex justify-center space-x-2 md:space-x-4'>
        <img
          src={jobs[activeJobIdx].mobileImageSrc}
          alt='job mobile view'
          className='h-40 md:h-72 lg:h-[400px] rounded-lg'
        />
        <img
          src={jobs[activeJobIdx].desktopImageSrc}
          alt='job desktop view'
          className='h-40 md:h-72 lg:h-[400px] rounded-lg'
        />
      </div>
      <div className='flex space-x-2 mt-4 mx-auto w-fit'>
        {jobs.map((_, i) => (
          <span
            onClick={() => setActiveJobIdx(i)}
            className={`${
              i === activeJobIdx
                ? jobs[activeJobIdx].bgColorClass
                : 'bg-gray-400'
            } w-2 h-2 rounded-full cursor-pointer`}
          ></span>
        ))}
      </div>
      <JobsModal isOpen={openModal} closeModal={() => setOpenModal(false)} />
    </div>
  )
}

export default Freelance
