function About({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className='font-inter text-type text-xs md:text-sm lg:text-base leading-6 md:leading-7 lg:leading-8 space-y-2 '>
      {paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </div>
  )
}

export default About
