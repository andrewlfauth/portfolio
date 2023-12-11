interface Props {
  href: string
  text: string
  isActive: boolean
}

function NavLink({ href, text, isActive }: Props) {
  return (
    <li
      className={`after:bg-mat-red catppuccin:after:bg-cat-blue nightowl:after:bg-nightowl-orange after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full hover:after:scale-x-100 after:duration-200 after:origin-bottom-left relative duration-200 ${
        isActive ? 'after:scale-x-100 text-white' : 'after:scale-x-0 text-type'
      }`}
    >
      <a href={href}>{text}</a>
    </li>
  )
}

export default NavLink
