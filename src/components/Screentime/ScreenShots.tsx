import ImageCycler from '../Projects/ImageCycler'
import { useMemo } from 'preact/hooks'

function ScreenShots() {
  let mobile = useMemo(
    () => [
      {
        id: 0,
        src: 'https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,g_auto/v1690327214/portfolio/st-mb_oz8sql.png',
        alt: 'screen time mobile landing page',
      },
      {
        id: 1,
        src: 'https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,g_auto/v1690326666/portfolio/st-mb-dasboard_gmjn6j.png',
        alt: 'screen time mobile dashboard page',
      },
      {
        id: 2,
        src: 'https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,g_auto/v1690326250/portfolio/st-mb-plans_iw0bck.png',
        alt: 'screen time mobile plans page',
      },
      {
        id: 3,
        src: 'https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,g_auto/v1690326561/portfolio/st-mb-shows_bunzll.png',
        alt: 'screen time mobile shows page',
      },
      {
        id: 4,
        src: 'https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,g_auto/v1690326616/portfolio/st-mb-favorites_sluy4y.png',
        alt: 'screen time mobile favorites page',
      },
    ],
    []
  )

  let desktop = useMemo(
    () => [
      {
        id: 0,
        src: 'https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,g_auto/v1690317368/portfolio/st-dt-dashboard_afl8vo.png',
        alt: 'screen time dashboard page',
      },
      {
        id: 1,
        src: 'https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,g_auto/v1690326356/portfolio/st-dt-plans_rgl3dl.png',
        alt: 'screen time plans page',
      },
      {
        id: 2,
        src: 'https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,g_auto/v1690317303/portfolio/st-dt-shows_rp6mbs.png',
        alt: 'screen time shows page',
      },
      {
        id: 3,
        src: 'https://res.cloudinary.com/recovery-ocean/image/upload/f_auto,g_auto/v1690317049/portfolio/st-dt-favorites_kpyo5h.png',
        alt: 'screen time favorites page',
      },
    ],
    []
  )

  return (
    <div className="flex lg:space-x-4 mb-6 lg:mb-0">
      <div className="hidden lg:block">
        <ImageCycler
          images={mobile}
          className="h-[400px] rounded-lg w-[185px]"
        />
      </div>
      <ImageCycler
        images={desktop}
        className="md:h-[400px] md:w-auto rounded-lg mx-auto md:mx-0"
      />
    </div>
  )
}

export default ScreenShots
