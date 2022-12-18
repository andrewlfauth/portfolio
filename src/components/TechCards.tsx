export const MongoDB = () => (
  <TechCard
    src='https://res.cloudinary.com/dpnkrz8c8/image/upload/v1670966073/portfolio/okorpzisegwjdssvevbn.svg'
    label='MongoDB'
  />
)

export const Remix = () => (
  <TechCard
    src='https://res.cloudinary.com/dpnkrz8c8/image/upload/v1670977455/portfolio/adm7c7k0eixqnfqhzmd6.png'
    label='Remix'
    spanClass='ml-1'
    imgClass='pl-1'
  />
)

export const Tailwind = () => (
  <TechCard
    src='https://res.cloudinary.com/dpnkrz8c8/image/upload/v1670966110/portfolio/fg7degx0x3uvt5j3hm6s.svg'
    label='Tailwindcss'
    spanClass='ml-3'
    imgClass='ml-2'
  />
)

export const React = () => (
  <TechCard
    src='https://res.cloudinary.com/dpnkrz8c8/image/upload/v1670966034/portfolio/jbuisrchxi4soxwzoy2p.svg'
    label='React'
    spanClass='ml-3'
    imgClass='scale-[.8] ml-1'
  />
)

export const Cloudinary = () => (
  <TechCard
    src='https://res.cloudinary.com/dpnkrz8c8/image/upload/v1670978004/portfolio/ty6piuualvnl9zmiroba.png'
    label='Cloudinary'
    spanClass='ml-3'
    imgClass='scale-[.8] ml-1'
  />
)

interface Props {
  src: string
  label: string
  imgClass?: string
  spanClass?: string
}

const TechCard = ({ src, label, imgClass, spanClass }: Props) => (
  <div
    class='rounded-lg border-2 border-gray-800 flex items-center justify-between py-1 md:py-2 pr-4 w-fit mb-2 lg:mb-0'
    target='_blank'
    rel='noreferrer'
  >
    <img
      src={src}
      alt=''
      className={`${imgClass} max-w-[20px] max-h-[20px] lg:max-w-[30px] lg:max-h-[30px]`}
    />
    <span
      className={`${spanClass} text-xs md:text-sm lg:text-lg font-semibold tracking-tight text-neutral-400 font-inter`}
    >
      {label}
    </span>
  </div>
)
