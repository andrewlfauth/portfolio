import { useRef, useEffect, useMemo } from "preact/hooks"
import useProjectTabs from "../hooks/useProjectTabs"
import ProjectLinks from "../Projects/ProjectLinks"
import { gsap } from "../../utils/gsap"
import Tabs from "../Projects/Tabs"
import {
  Cheerio,
  Jotai,
  React,
  Tailwind,
  Typescript,
} from "../Projects/TechCards"
import Features from "../Projects/Features"
import About from "../Projects/About"
import ImageCycler from "../Projects/ImageCycler"

function MetaCompare() {
  const { tab, setTab } = useProjectTabs()
  const cardsRef = useRef<HTMLDivElement>(null)

  const features = useMemo(
    () => [
      "Infers a page's target and semantic keywords",
      "Scrape and persist website data",
      "Keyword highlighting and usage statistics",
      "Heading, Img, Meta, and Anchor tag tables",
      "Search bar with autocomplete, autosuggest, and multiple filters",
      "Print and CSV download for tables",
      "Improvement suggestion and issue detection for site content",
      "Social sharing preview for scraped pages",
      "Slideshow of relevant page images",
      "Dark mode",
    ],
    []
  )

  const about = useMemo(
    () => [
      "Before getting into web development I was a SEO. I always felt there was a need for an affordable SEO tool that could help make optimizing a site easier for anyone.",
      "I created Meta Compare with this goal in mind. Rather than predicting search volume or keyword competition, this app focuses on the web page's content.",
      "After a web page is scraped, it's content is loaded into a user friendly interface and broken down into related tabs. (Headings, Imgs, Meta, etc)",
      "The app provides content improvements, and points out any harmful practices that are negatively affecting your sites SEO.",
      "Is designed this app to make SEO work easier and more enjoyable. It is the SEO tool I wish I'd had while working in the industry.",
    ],
    []
  )

  const images = useMemo(
    () => [
      {
        src: "https://res.cloudinary.com/dpnkrz8c8/image/upload/v1676853771/portfolio/mc-projects.png",
        alt: "Meta Compare app dashboard",
        id: 0,
      },
      {
        src: "https://res.cloudinary.com/dpnkrz8c8/image/upload/v1676853985/portfolio/mc-searchbar.png",
        alt: "Meta Compare app table with search",
        id: 1,
      },
      {
        src: "https://res.cloudinary.com/dpnkrz8c8/image/upload/v1676854204/portfolio/mc-highlighting.png",
        alt: "Meta Compare app keyword highlighting",
        id: 2,
      },
      {
        src: "https://res.cloudinary.com/dpnkrz8c8/image/upload/v1676854333/portfolio/mc-social.png",
        alt: "Meta Compare app social appearances",
        id: 3,
      },
      {
        src: "https://res.cloudinary.com/dpnkrz8c8/image/upload/v1676854432/portfolio/mc-issues.png",
        alt: "Meta Compare app social appearances",
        id: 4,
      },
    ],
    []
  )

  useEffect(() => {
    gsap.from(cardsRef.current!.children, {
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 80%",
      },
      stagger: 0.1,
      x: -150,
      opacity: 0,
      delay: 0.3,
      ease: "power1.out",
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
      <div className='mx-auto w-fit mb-4 mt lg:translate-x-[-178px]'>
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
        <div class='lg:w-[697px] px-6 md:px-0 md:w-[496.5px] mx-4 lg:mx-0'>
          {tab == "screenshots" && (
            <ImageCycler
              images={images}
              interval={6000}
              className='rounded-md'
            />
          )}
          {tab == "features" && <Features features={features} />}
          {tab == "about" && <About paragraphs={about} />}
        </div>
        <div className='flex flex-wrap space-x-2 mt-8 justify-center lg:hidden max-w-[496.5px] mx-auto px-4 md:px-0 md:mx-0 md:mt-14'>
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
