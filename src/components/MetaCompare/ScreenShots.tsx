import ImageCycler from '../Projects/ImageCycler'

function ScreenShots() {
  const images = [
    {
      src: 'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1671760363/portfolio/s5exwprounpv2krrkt2u.png',
      alt: 'dashboard',
    },
    {
      src: 'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1671760363/portfolio/c6xvznuuxhrfzyzfboui.png',
      alt: 'tag table',
    },
    {
      src: 'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1671760364/portfolio/ksxkcmljtctpqturoxfo.png',
      alt: 'social appearance',
    },
    {
      src: 'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1671760363/portfolio/eawdjdvjn29xcstp4ozi.png',
      alt: 'social share links',
    },
  ]

  return (
    <div>
      <ImageCycler images={images} className='rounded-lg' />
    </div>
  )
}

export default ScreenShots
