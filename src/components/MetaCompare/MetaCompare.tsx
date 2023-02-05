import { useRef, useEffect, useMemo } from 'preact/hooks'
import useProjectTabs from '../hooks/useProjectTabs'
import ProjectLinks from '../Projects/ProjectLinks'
import { gsap } from '../../utils/gsap'
import Tabs from '../Projects/Tabs'
import {
  Cheerio,
  Jotai,
  React,
  Tailwind,
  Typescript,
} from '../Projects/TechCards'
import Features from '../Projects/Features'
import About from '../Projects/About'

function MetaCompare() {
  const { tab, setTab } = useProjectTabs()
  const cardsRef = useRef<HTMLDivElement>(null)

  const features = useMemo(
    () => [
      "Infers a page's target and semantic keywords",
      'Scrape and persist website data',
      'Keyword highlighting and usage statistics',
      'Heading, Img, Meta, and Anchor tag tables',
      'Search bar with autocomplete, autosuggest, and multiple filters',
      'Print and CSV download for tables',
      'Improvement suggestion and issue detection for site content',
      'Social sharing preview for scraped pages',
      'Slideshow of relevant page images',
      'Dark mode',
    ],
    []
  )

  const about = useMemo(
    () => [
      'Before getting into web development I was a SEO. I always felt there was a need for an affordable SEO tool that could help make optimizing a site easier for anyone.',
      "I created Meta Compare with this goal in mind. Rather than predicting search volume or keyword competition, this app focuses on the web page's content.",
      "After a web page is scraped, it's content is loaded into a user friendly interface and broken down into related tabs. (Headings, Imgs, Meta, etc)",
      'The app provides content improvements, and points out any harmful practices that are negatively affecting your sites SEO.',
      "Is designed this app to make SEO work easier and more enjoyable. It is the SEO tool I wish I'd had while working in the industry.",
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
    <div class='pt-60'>
      <div className='pb-6 md:pb-16'>
        <h2 className='font-redhat text-4xl md:text-5xl text-title text-center pb-2'>
          Meta Compare
        </h2>
        <Tabs tab={tab} setTab={setTab} />
      </div>
      <div className='mx-auto w-fit mb-4 lg:translate-x-[-178px]'>
        <ProjectLinks />
      </div>

      <div class='flex flex-col lg:flex-row lg:space-x-4 w-fit mx-auto'>
        <div
          ref={cardsRef}
          className='hidden lg:flex items-end flex-col space-y-2'
        >
          <React />
          <Typescript />
          <Jotai />
          <Tailwind />
          <Cheerio />
        </div>
        <div class='min-h-[285px] lg:w-[697px] md:h-[400px] px-6 md:px-0 md:w-[496.5px] mx-4 lg:mx-0'>
          {tab == 'screenshots' && (
            <video controls>
              <source
                src='https://res.cloudinary.com/dpnkrz8c8/video/upload/v1672546687/portfolio/b5h5xpxap3hfnn3gewqw.webm'
                type='video/webm'
              />
            </video>
          )}
          {tab == 'features' && <Features features={features} />}
          {tab == 'about' && <About paragraphs={about} />}
        </div>
        <div className='flex flex-wrap space-x-2 mt-4 justify-center lg:hidden max-w-[496.5px] mx-4 md:mx-0'>
          <React />
          <Typescript />
          <Jotai />
          <Tailwind />
          <Cheerio />
        </div>
      </div>
    </div>
  )
}

export default MetaCompare
