import ImageCycler from '../Projects/ImageCycler'

function ScreenShots() {
  let mobile = [
    {
      src: 'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1670971602/portfolio/e2t34y1bk9lhefemyigv.png',
      alt: 'screen time mobile landing page',
    },
    {
      src: 'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1670972803/portfolio/afl1hxzecijukveubxvx.png',
      alt: 'screen time mobile login page',
    },
    {
      src: 'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1670972803/portfolio/qis87bjiefjqpuirggub.png',
      alt: 'screen time mobile favorites page',
    },
  ]

  let tablet = [
    {
      src: 'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1670976018/portfolio/zfxfjehx46tysvid8cwc.png',
      alt: 'screen time dashboard',
    },
  ]

  return (
    <div className='flex lg:space-x-4'>
      <ImageCycler
        images={mobile}
        className='h-[400px] rounded-lg w-[185px] hidden lg:block'
      />
      <ImageCycler
        images={tablet}
        className='md:h-[400px] md:w-auto rounded-lg mx-auto md:mx-0'
      />
    </div>
  )
}

export default ScreenShots
