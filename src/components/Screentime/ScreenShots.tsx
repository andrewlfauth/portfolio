import ImageCycler from '../Projects/ImageCycler'

function ScreenShots() {
  let mobile = [
    {
      id: 0,
      src: 'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1670971602/portfolio/e2t34y1bk9lhefemyigv.png',
      alt: 'screen time mobile landing page',
    },
    {
      id: 1,
      src: 'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1672434800/portfolio/je6ut8lesoiklzwkecdn.png',
      alt: 'screen time mobile dashboard page',
    },
    {
      id: 2,
      src: 'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1672432118/portfolio/jd83ur326hdhqkmfqvxy.png',
      alt: 'screen time mobile plans page',
    },
    {
      id: 3,
      src: 'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1672432267/portfolio/vttmta3aq7hpoevgmces.png',
      alt: 'screen time mobile shows page',
    },
    {
      id: 4,
      src: 'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1672432343/portfolio/h0oza8t8bp2gkfszl7xb.png',
      alt: 'screen time mobile favorites page',
    },
  ]

  let desktop = [
    {
      id: 0,
      src: 'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1672431363/portfolio/yqjfkpfsmbptpht11ekm.png',
      alt: 'screen time dashboard page',
    },
    {
      id: 1,
      src: 'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1672431443/portfolio/bj02t91tyok7usi5cqso.png',
      alt: 'screen time plans page',
    },
    {
      id: 2,
      src: 'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1672431607/portfolio/dc2oyl1rf2zgytlb03u5.png',
      alt: 'screen time shows page',
    },
    {
      id: 3,
      src: 'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1672431682/portfolio/tqryfa5iyi77csznmemd.png',
      alt: 'screen time favorites page',
    },
  ]

  /* 
    Landing - mobile
    Dashboard - tab
    Plans - tab
    Shows
    Favorites - mobile
  */

  return (
    <div className='flex lg:space-x-4 mb-6 lg:mb-0'>
      <div className='hidden lg:block'>
        <ImageCycler
          images={mobile}
          className='h-[400px] rounded-lg w-[185px]'
        />
      </div>
      <ImageCycler
        interval={5500}
        images={desktop}
        className='md:h-[400px] md:w-auto rounded-lg mx-auto md:mx-0'
      />
    </div>
  )
}

export default ScreenShots
