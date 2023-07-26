export const Firebase = () => (
  <TechCard
    src="https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,q_auto/v1690359445/portfolio/auycdy92g06spaju4dnr_abn5cj.png"
    label="Firebase"
    imgClass="max-w-[20px] max-h-[20px] lg:max-w-[30px] lg:max-h-[30px] pl-2 scale-[0.9]"
    spanClass="ml-2"
  />
)

export const Stripe = () => (
  <TechCard
    src="https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,q_auto/v1690360093/portfolio/bzlsjucqaewl5ceo4pf9_g3ru1v.png"
    label=""
    imgClass="w-11 lg:w-16"
  />
)

export const Openai = () => (
  <TechCard
    src="https://res.cloudinary.com/recovery-ocean/image/upload/v1690361984/portfolio/umps9js5484fxytyjxxd_t2jwtz.png"
    label="Open AI"
    spanClass="ml-2"
    imgClass="max-w-[23px] max-h-[23px] lg:max-w-[30px] lg:max-h-[30px] pl-2"
  />
)

export const MongoDB = () => (
  <TechCard
    src="https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,q_auto/v1690361168/portfolio/okorpzisegwjdssvevbn_h0tea1.svg"
    label="MongoDB"
    imgClass="max-w-[20px] max-h-[20px] lg:max-w-[30px] lg:max-h-[30px] pl-1"
  />
)

export const Remix = () => (
  <TechCard
    src="https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,q_auto/v1690362519/portfolio/adm7c7k0eixqnfqhzmd6_iobxv3.png"
    label="Remix"
    spanClass="ml-1"
    imgClass="max-w-[23px] max-h-[23px] lg:max-w-[30px] lg:max-h-[30px] pl-1"
  />
)

export const Tailwind = () => (
  <TechCard
    src="https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,q_auto/v1690360357/portfolio/fg7degx0x3uvt5j3hm6s_qne9tn.svg"
    label="Tailwind"
    spanClass="ml-3"
    imgClass="max-w-[20px] max-h-[20px] lg:max-w-[30px] lg:max-h-[30px] ml-2"
  />
)

export const React = () => (
  <TechCard
    src="https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,q_auto/v1690360627/portfolio/jbuisrchxi4soxwzoy2p_qmmu56.svg"
    label="React"
    spanClass="ml-2"
    imgClass="max-w-[20px] max-h-[20px] lg:max-w-[30px] lg:max-h-[30px] scale-[.8] ml-1"
  />
)

export const Cloudinary = () => (
  <TechCard
    src="https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,q_auto/v1690361954/portfolio/ty6piuualvnl9zmiroba_qj2nn1.png"
    label="Cloudinary"
    spanClass="ml-3"
    imgClass="max-w-[20px] max-h-[20px] lg:max-w-[30px] lg:max-h-[30px] scale-[.8] ml-1"
  />
)

export const Cheerio = () => <TechCard label="Cheerio" spanClass="ml-3" />

export const Jotai = () => (
  <TechCard
    src="https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,q_auto/v1690360965/portfolio/mtxf74hant87wk57equu_szwgqj.png"
    label="Jotai"
    spanClass="ml-2"
    imgClass="max-w-[20px] max-h-[20px] lg:max-w-[30px] lg:max-h-[30px] ml-2 scale-[.9]"
  />
)

export const Typescript = () => (
  <TechCard
    src="https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,q_auto/v1690360213/portfolio/d82zf4sffvgltwatui71_oujbvl.png"
    label="Typescript"
    spanClass="ml-3"
    imgClass="max-w-[20px] max-h-[20px] lg:max-w-[30px] lg:max-h-[30px] ml-2 scale-[.9]"
  />
)

export const Vue = () => (
  <TechCard
    src="https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,q_auto/v1690361235/portfolio/pmynrrlczsf7pd8cqczi_ocowtj.svg"
    label="Vue"
    spanClass="ml-2"
    imgClass="max-w-[20px] max-h-[20px] lg:max-w-[30px] lg:max-h-[30px] ml-2"
  />
)

export const Gsap = () => (
  <TechCard
    src="https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,q_auto/v1690361085/portfolio/mutyxzcvfecfcxyrbuwk_xqakzf.png"
    label="Gsap"
    spanClass="ml-2"
    imgClass="max-w-[20px] max-h-[20px] lg:max-w-[30px] lg:max-h-[30px] ml-2"
  />
)

export const Pinia = () => (
  <TechCard
    src="https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,q_auto/v1690362010/portfolio/vi1cvkovzvxcaeeexv3k_hmtimk.png"
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
    {src && <img src={src} alt={label} className={`${imgClass}`} />}
    <span
      className={`${spanClass} text-xs md:text-sm lg:text-lg font-semibold tracking-tight text-primary font-inter text-type`}
    >
      {label}
    </span>
  </div>
)
