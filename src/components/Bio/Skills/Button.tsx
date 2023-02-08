import { useState, useEffect } from "preact/hooks"

function Button({
  showMore,
  handleClick,
  variant,
}: {
  showMore: boolean
  handleClick: () => void
  variant?: string
}) {
  const [buttonMessage, setButtonMessage] = useState("Show more")

  useEffect(() => {
    let id: any
    if (showMore) id = setTimeout(() => setButtonMessage("Show less"), 150)
    else id = setTimeout(() => setButtonMessage("Show more"), 150)
    return () => clearTimeout(id)
  }, [showMore])

  return (
    <button
      onClick={handleClick}
      className={`${
        variant == "sm" ? "md:hidden" : "hidden md:block"
      } border-2 border-primary rounded-md text-base py-2 mt-6 w-32`}
    >
      {buttonMessage}
    </button>
  )
}

export default Button
