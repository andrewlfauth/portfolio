interface Props {
  tab: string
  setTab: any
}

function Tabs({ tab, setTab }: Props) {
  return (
    <div class='mx-auto w-fit md:text-lg font-redhat flex space-x-4'>
      <span
        onClick={() => setTab('screenshots')}
        className={`${
          tab === 'screenshots'
            ? 'text-mat-red catppuccin:text-cat-green nightowl:text-nightowl-orange'
            : 'text-gray-300 catppuccin:text-cat-overlay nightowl:text-nightowl-text'
        } cursor-pointer`}
      >
        Screenshots
      </span>
      <span
        onClick={() => setTab('features')}
        className={`${
          tab === 'features'
            ? 'text-mat-red catppuccin:text-cat-green nightowl:text-nightowl-orange'
            : 'text-gray-300 catppuccin:text-cat-overlay nightowl:text-nightowl-text'
        } cursor-pointer`}
      >
        Features
      </span>
      <span
        onClick={() => setTab('about')}
        className={`${
          tab === 'about'
            ? 'text-mat-red catppuccin:text-cat-green nightowl:text-nightowl-orange'
            : 'text-gray-300 catppuccin:text-cat-overlay nightowl:text-nightowl-text'
        } cursor-pointer`}
      >
        About
      </span>
    </div>
  )
}

export default Tabs
