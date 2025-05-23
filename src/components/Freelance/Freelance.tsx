import { useMemo, useState, useRef, useEffect } from 'preact/hooks'
import { clsx } from 'clsx'
import JobsModal from './JobsModal'

function Freelance() {
  const [activeJobIdx, setActiveJobIdx] = useState(0)
  const [touchStart, setTouchStart] = useState<number>(0)
  const [touchEnd, setTouchEnd] = useState<number>(0)
  const [openModal, setOpenModal] = useState(false)

  let intervalRef = useRef<any>(null)
  const minSwipeDistance = 50

  const jobs = useMemo(
    () => [
      {
        name: 'AVRGLOW Beats',
        href: '/freelance/avarglow-beats',
        desktopImageSrc:
          'https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,g_auto/v1690326409/portfolio/avrglow-dt_cywgy2.png',
        mobileImageSrc:
          'https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,g_auto/v1690326842/portfolio/avrglow-mb_ejqkis.png',
        bgColorClass: 'bg-green-400',
        borderColorClass: 'border-green-400',
      },
      {
        name: 'Wells Landscaping',
        href: '/freelance/wells-landscaping',
        desktopImageSrc:
          'https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,g_auto/v1690310950/portfolio/wells-dt_tjzc8s.png',
        mobileImageSrc:
          'https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,g_auto/v1690310962/portfolio/wells-mb_rpsyem.png',
        bgColorClass: 'bg-emerald-600',
        borderColorClass: 'border-emerald-600',
      },
      {
        name: 'Southern Spring Cleaners',
        href: '/freelance/southern-spring-cleaners',
        desktopImageSrc:
          'https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,g_auto/v1690310969/portfolio/ssc-dt_folxuy.png',
        mobileImageSrc:
          'https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,g_auto/v1690310966/portfolio/ssc-mb_dirssa.png',
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

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(0)
    setTouchStart(e.targetTouches[0].clientX)
  }
  const onTouchMove = (e: TouchEvent) => setTouchEnd(e.targetTouches[0].clientX)
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isRightSwipe) {
      activeJobIdx == 0
        ? setActiveJobIdx(jobs.length - 1)
        : setActiveJobIdx(activeJobIdx - 1)
    }
    if (isLeftSwipe) {
      activeJobIdx == jobs.length - 1
        ? setActiveJobIdx(0)
        : setActiveJobIdx(activeJobIdx + 1)
    }
  }

  const _ = clsx(
    'bg-green-400 bg-emerald-600 bg-purple-400 border-green-400 border-purple-400 border-green-400'
  )

  return (
    <div id='freelance' className='px-4 sm:px-6 mt-60'>
      <div className='pb-8 md:pb-16'>
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

      <div
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
        className='flex justify-center space-x-2 md:space-x-4'
      >
        <img
          loading='lazy'
          src={jobs[activeJobIdx].mobileImageSrc}
          alt='job mobile view'
          className='h-40 md:h-72 lg:h-[400px] rounded-lg'
        />
        <img
          loading='lazy'
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
