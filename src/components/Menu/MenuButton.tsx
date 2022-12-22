import { clsx } from 'clsx'

function MenuButton({
  text,
  className,
  onClick,
  type = 'button',
}: {
  text: string
  className?: string
  onClick?: any
  type?: string
}) {
  const _ = clsx(
    'mt-10 mt-36 md:mt-20 lg:mt-10 self-end duration-200 hover:ring-2 nightowl:hover:ring catppuccin:hover:ring ring-mat-red catppuccin:ring-cat-bg nightowl:ring-nightowl-bg ring-offset-4 ring-offset-neutral-900 catppuccin:ring-offset-cat-border nightowl:ring-offset-nightowl-border'
  )

  return (
    <button
      type={type}
      onClick={onClick ? onClick : ''}
      className={`${className} w-[156px] h-[52px] font-semibold rounded-lg border-2 border-mat-red catppuccin:border-cat-bg nightowl:border-nightowl-bg bg-mat-red catppuccin:bg-cat-bg nightowl:bg-nightowl-bg text-2xl font-redhat flex items-center justify-center select-none text-neutral-900 catppuccin:text-cat-pink nightowl:text-nightowl-orange`}
    >
      {text}
    </button>
  )
}

export default MenuButton
