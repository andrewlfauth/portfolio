import { useRef, useEffect, useMemo } from 'preact/hooks'
import useProjectTabs from '../hooks/useProjectTabs'
import ProjectLinks from '../Projects/ProjectLinks'
import { gsap } from '../../utils/gsap'
import Tabs from '../Projects/Tabs'
import {
  Firebase,
  Openai,
  React,
  Remix,
  Stripe,
  Tailwind,
} from '../Projects/TechCards'
import Features from '../Projects/Features'
import About from '../Projects/About'
import ImageCycler from '../Projects/ImageCycler'

function MetaCompare() {
  const { tab, setTab } = useProjectTabs()
  const cardsRef = useRef<HTMLDivElement>(null)

  const features = [
    'Advanced issue detection',
    'AI content fixes',
    'Relevant keyword generation',
    'Track and manage key SEO elements',
    'Instant webpage audits',
    'Keyword highlighting and usage statistics',
    'User auth with Firebase admin',
    'Payment processing with Stripe',
    'and more...',
  ]

  const about = [
    "Site Scout is a web app that empowers website owners to effortlessly improve their site's on-page SEO without having to spend thousands hiring a professional.",
    'Anybody can easily track and manage key SEO elements on their webpages while being alerted to performance impacting issues and receiving actionable fixes.',
    'The app uses AI to deeply analyze each webpage and write content, suggest fixes, generate relevant keywords, and more to make boosting SEO a breeze.',
    'This app uses a freemium pricing model with a premium plan at $10 a month. The premium plan unlocks the AI features, however free accounts can still access several awesome tools while getting 25 free trial AI executions.',
  ]

  const images = useMemo(
    () => [
      {
        src: 'https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,g_auto/v1690319667/portfolio/sitescout-hero_fz5juj.png',
        alt: 'Site Scout landing page hero',
        id: 0,
      },
      {
        src: 'https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,g_auto/v1690327071/portfolio/site-scout-dashboard_djqaus.png',
        alt: 'Site Scout app dashboard',
        id: 1,
      },
      {
        src: 'https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,g_auto/v1690327371/portfolio/site-scout-keywords_rquno0.png',
        alt: 'Site Scout keyword generation',
        id: 2,
      },
      {
        src: 'https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,g_auto/v1690326779/portfolio/image_71_nj5coh.png',
        alt: 'Site Scout AI features',
        id: 3,
      },
      {
        src: 'https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,g_auto/v1690326998/portfolio/site-scout-meta-data_d72vq1.png',
        alt: 'Site Scout meta tags manager',
        id: 4,
      },
      {
        src: 'https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,g_auto/v1690319550/portfolio/image_65_quf9r5.png',
        alt: 'Site Scout social previewer',
        id: 5,
      },
      {
        src: 'https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,g_auto/v1690327426/portfolio/site-scout-pricing_pmojzm.png',
        alt: 'Site Scout pricing page',
        id: 6,
      },
      {
        src: 'https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,g_auto/v1690326929/portfolio/site-scout-images_lhumwe.png',
        alt: 'Site Scout image previewer',
        id: 7,
      },
    ],
    []
  )

  useEffect(() => {
    gsap.from(cardsRef.current!.children, {
      scrollTrigger: {
        trigger: cardsRef.current,
        start: 'top 80%',
      },
      stagger: 0.1,
      x: -150,
      opacity: 0,
      delay: 0.3,
      ease: 'power1.out',
    })
  }, [])

  return (
    <div id="projects-start" class="pt-60">
      <div className="pb-6 md:pb-8 lg:pb-16">
        <h2 className="font-redhat text-4xl md:text-5xl text-title text-center pb-2">
          sitescout.pro
        </h2>
        <Tabs tab={tab} setTab={setTab} />
      </div>
      <div className="mx-auto w-fit mb-4 lg:translate-x-[-185px]">
        <ProjectLinks site="https://sitescout.pro" />
      </div>

      <div class="flex flex-col lg:flex-row lg:space-x-4 w-fit mx-auto">
        <div
          ref={cardsRef}
          className="hidden lg:flex items-end flex-col space-y-2"
        >
          <Firebase />
          <Remix />
          <React />
          <Openai />
          <Tailwind />
          <Stripe />
        </div>
        <div class="lg:w-[697px] px-6 md:px-0 md:w-[496.5px] mx-4 lg:mx-0">
          {tab == 'screenshots' && (
            <ImageCycler
              images={images}
              interval={6000}
              className="rounded-md"
            />
          )}
          {tab == 'features' && <Features features={features} />}
          {tab == 'about' && <About paragraphs={about} />}
        </div>
        <div className="flex flex-wrap space-x-2 mt-8 justify-center lg:hidden max-w-[496.5px] mx-auto px-4 md:px-0 md:mx-0 md:mt-14">
          <Firebase />
          <Remix />
          <React />
          <Openai />
          <Tailwind />
          <Stripe />
        </div>
      </div>
    </div>
  )
}

export default MetaCompare
