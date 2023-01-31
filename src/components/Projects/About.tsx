function About({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className='font-inter text-type text-sm md:text-lg leading-6 space-y-2 '>
      {paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </div>
  )
}

export default About
