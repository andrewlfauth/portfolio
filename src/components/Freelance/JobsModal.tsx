import { useEffect, useRef } from 'preact/hooks'

function JobsModal({
  isOpen,
  closeModal,
}: {
  isOpen: boolean
  closeModal: any
}) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleCloseOnEscape = (e: KeyboardEvent) => {
      if (e.key == 'Escape') {
        closeModal()
      }
    }

    const handleCloseOnOutsideClick = (e: any) => {
      if (!modalRef.current?.contains(e.target)) closeModal()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleCloseOnEscape)
      document.addEventListener('click', handleCloseOnOutsideClick)
    } else {
      document.removeEventListener('keydown', handleCloseOnEscape)
      document.removeEventListener('click', handleCloseOnOutsideClick)
    }

    return () => {
      document.removeEventListener('keydown', handleCloseOnEscape)
      document.removeEventListener('click', handleCloseOnOutsideClick)
    }
  }, [isOpen])

  return (
    <div
      className={`${
        isOpen ? '' : 'opacity-0 pointer-events-none'
      } w-screen h-screen fixed top-0 left-0 bg-white bg-opacity-10 flex items-center justify-center duration-200 z-50`}
    >
      <div
        ref={modalRef}
        className="rounded-md pt-6 pb-4 items-center flex flex-col bg-primary w-fit px-4"
      >
        <span className="text-xl font-semibold tracking-tight text-white self-start">
          Select a job to learn more about it
        </span>
        <div className="mt-8 bg-white w-72 rounded-md">
          <a
            href="/freelance/avrglow-beats"
            className="hover:bg-neutral-300 duration-150 h-20 flex items-center rounded-t-md pl-5"
          >
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dpnkrz8c8/image/upload/v1677559574/portfolio/avrglow-logo.png"
              alt="avrglow logo"
              className="w-44"
            />
          </a>
          <a
            href="/freelance/wells-landscaping"
            className="hover:bg-neutral-300 duration-150 h-20 flex items-center border-y-2 border-neutral-900 catppuccin:border-cat-bg nightowl:border-nightowl-bg"
          >
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dpnkrz8c8/image/upload/v1677559616/portfolio/wells-logo.png"
              alt="Wells Landscaping logo"
              className="scale-[.6] -ml-8"
            />
          </a>
          <a
            href="/freelance/southern-spring-cleaners"
            className="hover:bg-neutral-300 duration-150 h-20 flex items-center rounded-b-md"
          >
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dpnkrz8c8/image/upload/v1677559473/portfolio/ssc-logo.png"
              alt="Southern Spring Cleaners logo"
              className="scale-[.8] -ml-6"
            />
          </a>
        </div>
        <div
          onClick={closeModal}
          className="text-type mt-4 hover:underline select-none font-medium"
        >
          Close
        </div>
      </div>
    </div>
  )
}

export default JobsModal
