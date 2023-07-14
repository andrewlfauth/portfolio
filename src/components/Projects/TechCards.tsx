export const Firebase = () => (
  <TechCard
    src="https://res.cloudinary.com/dpnkrz8c8/image/upload/v1689316238/portfolio/auycdy92g06spaju4dnr.png"
    label="Firebase"
    imgClass="max-w-[20px] max-h-[20px] lg:max-w-[30px] lg:max-h-[30px] pl-2 scale-[0.9]"
    spanClass="ml-2"
  />
)

export const Stripe = () => (
  <TechCard
    src="https://res.cloudinary.com/dpnkrz8c8/image/upload/v1689316043/portfolio/bzlsjucqaewl5ceo4pf9.png"
    label=""
    imgClass="w-11 lg:w-16"
  />
)

export const Openai = () => (
  <TechCard
    src="https://res.cloudinary.com/dpnkrz8c8/image/upload/v1689316159/portfolio/umps9js5484fxytyjxxd.png"
    label="Open AI"
    spanClass="ml-2"
    imgClass="max-w-[23px] max-h-[23px] lg:max-w-[30px] lg:max-h-[30px] pl-2"
  />
)

export const MongoDB = () => (
  <TechCard
    src="https://res.cloudinary.com/dpnkrz8c8/image/upload/v1670966073/portfolio/okorpzisegwjdssvevbn.svg"
    label="MongoDB"
    imgClass="max-w-[20px] max-h-[20px] lg:max-w-[30px] lg:max-h-[30px] pl-1"
  />
)

export const Remix = () => (
  <TechCard
    src="https://res.cloudinary.com/dpnkrz8c8/image/upload/v1670977455/portfolio/adm7c7k0eixqnfqhzmd6.png"
    label="Remix"
    spanClass="ml-1"
    imgClass="max-w-[23px] max-h-[23px] lg:max-w-[30px] lg:max-h-[30px] pl-1"
  />
)

export const Tailwind = () => (
  <TechCard
    src="https://res.cloudinary.com/dpnkrz8c8/image/upload/v1670966110/portfolio/fg7degx0x3uvt5j3hm6s.svg"
    label="Tailwind"
    spanClass="ml-3"
    imgClass="max-w-[20px] max-h-[20px] lg:max-w-[30px] lg:max-h-[30px] ml-2"
  />
)

export const React = () => (
  <TechCard
    src="https://res.cloudinary.com/dpnkrz8c8/image/upload/v1670966034/portfolio/jbuisrchxi4soxwzoy2p.svg"
    label="React"
    spanClass="ml-2"
    imgClass="max-w-[20px] max-h-[20px] lg:max-w-[30px] lg:max-h-[30px] scale-[.8] ml-1"
  />
)

export const Cloudinary = () => (
  <TechCard
    src="https://res.cloudinary.com/dpnkrz8c8/image/upload/v1670978004/portfolio/ty6piuualvnl9zmiroba.png"
    label="Cloudinary"
    spanClass="ml-3"
    imgClass="max-w-[20px] max-h-[20px] lg:max-w-[30px] lg:max-h-[30px] scale-[.8] ml-1"
  />
)

export const Cheerio = () => <TechCard label="Cheerio" spanClass="ml-3" />

export const Jotai = () => (
  <TechCard
    src="https://res.cloudinary.com/dpnkrz8c8/image/upload/v1671771262/portfolio/mtxf74hant87wk57equu.png"
    label="Jotai"
    spanClass="ml-2"
    imgClass="max-w-[20px] max-h-[20px] lg:max-w-[30px] lg:max-h-[30px] ml-2 scale-[.9]"
  />
)

export const Typescript = () => (
  <TechCard
    src="https://res.cloudinary.com/dpnkrz8c8/image/upload/v1671771784/portfolio/d82zf4sffvgltwatui71.png"
    label="Typescript"
    spanClass="ml-3"
    imgClass="max-w-[20px] max-h-[20px] lg:max-w-[30px] lg:max-h-[30px] ml-2 scale-[.9]"
  />
)

export const Vue = () => (
  <TechCard
    src="https://res.cloudinary.com/dpnkrz8c8/image/upload/v1675202706/portfolio/pmynrrlczsf7pd8cqczi.svg"
    label="Vue"
    spanClass="ml-2"
    imgClass="max-w-[20px] max-h-[20px] lg:max-w-[30px] lg:max-h-[30px] ml-2"
  />
)

export const Gsap = () => (
  <TechCard
    src="https://res.cloudinary.com/dpnkrz8c8/image/upload/v1675203178/portfolio/mutyxzcvfecfcxyrbuwk.png"
    label="Gsap"
    spanClass="ml-2"
    imgClass="max-w-[20px] max-h-[20px] lg:max-w-[30px] lg:max-h-[30px] ml-2"
  />
)

export const Pinia = () => (
  <TechCard
    src="https://res.cloudinary.com/dpnkrz8c8/image/upload/v1675203394/portfolio/vi1cvkovzvxcaeeexv3k.png"
    label="Pinia"
    spanClass="ml-2"
    imgClass="max-w-[20px] max-h-[20px] lg:max-w-[30px] lg:max-h-[30px] ml-2 scale-[1.8]"
  />
)

interface Props {
  src?: string
  label: string
  imgClass?: string
  spanClass?: string
}

const TechCard = ({ src, label, imgClass, spanClass }: Props) => (
  <div
    class={`${
      label ? 'pr-4' : 'px-1'
    } rounded-lg border-2 border-primary flex items-center justify-between py-1 md:py-2 w-fit mb-2 lg:mb-0`}
    target="_blank"
    rel="noreferrer"
  >
    {src && <img src={src} alt="" className={`${imgClass}`} />}
    <span
      className={`${spanClass} text-xs md:text-sm lg:text-lg font-semibold tracking-tight text-primary font-inter text-type`}
    >
      {label}
    </span>
  </div>
)
