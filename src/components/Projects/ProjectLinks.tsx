interface Props {
  repo?: string
  site?: string
}

function ProjectLinks({ repo, site }: Props) {
  return (
    <div className='flex space-x-4 text-xs md:text-base font-inter'>
      {repo ? (
        <a
          href={repo}
          target='_blank'
          rel='noreferrer'
          className='flex border-2 border-primary hover:border-mat-blue catppuccin:hover:border-cat-pink nightowl:hover:border-nightowl-blue rounded-full pr-3 pl-3 py-1 items-center text-gray-100'
        >
          <Unlock />
          <span className='ml-2 text-sm md:text-base'>Public Repo</span>
        </a>
      ) : (
        <div className='flex border-2 border-primary rounded-full pr-3 pl-3 py-1 items-center text-gray-100'>
          <Lock />
          <span className='ml-2 text-sm md:text-base'>Private Repo</span>
        </div>
      )}
      {site && (
        <a
          href={site}
          target='_blank'
          rel='noreferrer'
          className='flex border-2 border-primary hover:border-mat-blue catppuccin:hover:border-cat-pink nightowl:hover:border-nightowl-blue rounded-full pr-3 pl-3 py-1 items-center text-gray-100'
        >
          <Eye />
          <span className='ml-2 text-sm md:text-base'>Live Site</span>
        </a>
      )}
    </div>
  )
}

export default ProjectLinks

const Lock = () => (
  <svg
    className='scale-[.7] md:scale-[.9] md:-mt-[2px]'
    width='16'
    height='21'
    viewBox='0 0 16 21'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M2 21C1.45 21 0.979333 20.8043 0.588 20.413C0.196 20.021 0 19.55 0 19V9C0 8.45 0.196 7.979 0.588 7.587C0.979333 7.19567 1.45 7 2 7H3V5C3 3.61667 3.48767 2.43733 4.463 1.462C5.43767 0.487333 6.61667 0 8 0C9.38333 0 10.5627 0.487333 11.538 1.462C12.5127 2.43733 13 3.61667 13 5V7H14C14.55 7 15.021 7.19567 15.413 7.587C15.8043 7.979 16 8.45 16 9V19C16 19.55 15.8043 20.021 15.413 20.413C15.021 20.8043 14.55 21 14 21H2ZM2 19H14V9H2V19ZM8 16C8.55 16 9.021 15.8043 9.413 15.413C9.80433 15.021 10 14.55 10 14C10 13.45 9.80433 12.979 9.413 12.587C9.021 12.1957 8.55 12 8 12C7.45 12 6.97933 12.1957 6.588 12.587C6.196 12.979 6 13.45 6 14C6 14.55 6.196 15.021 6.588 15.413C6.97933 15.8043 7.45 16 8 16ZM5 7H11V5C11 4.16667 10.7083 3.45833 10.125 2.875C9.54167 2.29167 8.83333 2 8 2C7.16667 2 6.45833 2.29167 5.875 2.875C5.29167 3.45833 5 4.16667 5 5V7Z'
      fill='rgb(130 170 255)'
    />
  </svg>
)

const Unlock = () => (
  <svg
    className='scale-[.7] md:scale-[.9] md:-mt-[2px]'
    width='16'
    height='21'
    viewBox='0 0 16 21'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M2 21C1.45 21 0.979333 20.8043 0.588 20.413C0.196 20.021 0 19.55 0 19V9C0 8.45 0.196 7.979 0.588 7.587C0.979333 7.19567 1.45 7 2 7H11V5C11 4.16667 10.7083 3.45833 10.125 2.875C9.54167 2.29167 8.83333 2 8 2C7.31667 2 6.71267 2.204 6.188 2.612C5.66267 3.02067 5.30833 3.53333 5.125 4.15C5.04167 4.4 4.91267 4.604 4.738 4.762C4.56267 4.92067 4.35833 5 4.125 5C3.79167 5 3.525 4.88733 3.325 4.662C3.125 4.43733 3.05833 4.18333 3.125 3.9C3.375 2.78333 3.95 1.854 4.85 1.112C5.75 0.370667 6.8 0 8 0C9.38333 0 10.5627 0.487333 11.538 1.462C12.5127 2.43733 13 3.61667 13 5V7H14C14.55 7 15.021 7.19567 15.413 7.587C15.8043 7.979 16 8.45 16 9V19C16 19.55 15.8043 20.021 15.413 20.413C15.021 20.8043 14.55 21 14 21H2ZM2 19H14V9H2V19ZM8 16C8.55 16 9.021 15.8043 9.413 15.413C9.80433 15.021 10 14.55 10 14C10 13.45 9.80433 12.979 9.413 12.587C9.021 12.1957 8.55 12 8 12C7.45 12 6.97933 12.1957 6.588 12.587C6.196 12.979 6 13.45 6 14C6 14.55 6.196 15.021 6.588 15.413C6.97933 15.8043 7.45 16 8 16ZM2 9V19V9Z'
      fill='rgb(130 170 255)'
    />
  </svg>
)

const Eye = () => (
  <svg
    className='scale-[.75] md:scale-100'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9M12 4.5C17 4.5 21.27 7.61 23 12C21.27 16.39 17 19.5 12 19.5C7 19.5 2.73 16.39 1 12C2.73 7.61 7 4.5 12 4.5ZM3.18 12C3.98825 13.6503 5.24331 15.0407 6.80248 16.0133C8.36165 16.9858 10.1624 17.5013 12 17.5013C13.8376 17.5013 15.6383 16.9858 17.1975 16.0133C18.7567 15.0407 20.0117 13.6503 20.82 12C20.0117 10.3497 18.7567 8.95925 17.1975 7.98675C15.6383 7.01424 13.8376 6.49868 12 6.49868C10.1624 6.49868 8.36165 7.01424 6.80248 7.98675C5.24331 8.95925 3.98825 10.3497 3.18 12V12Z'
      fill='rgb(130 170 255)'
    />
  </svg>
)
