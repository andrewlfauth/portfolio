import clsx from 'clsx'

interface Props {
  href: string
  text: string
  handleClick?: () => void
  section: string
  activeSection: string
}

function NavLink({ href, text, handleClick, section, activeSection }: Props) {
  const activeClass = clsx(
    'after:scale-x-100 text-mat-red catppuccin:text-cat-blue nightowl:text-nightowl-orange'
  )

  return (
    <li
      onClick={handleClick && handleClick}
      className={`hover:text-mat-red hover:catppuccin:text-cat-blue hover:nightowl:text-nightowl-orange after:bg-mat-red catppuccin:after:bg-cat-blue nightowl:after:bg-nightowl-orange after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 hover:after:scale-x-100 after:duration-200 after:origin-bottom-left relative duration-200 ${
        activeSection == section ? activeClass : 'text-type '
      }`}
    >
      <a href={href}>{text}</a>
    </li>
  )
}

export default NavLink
