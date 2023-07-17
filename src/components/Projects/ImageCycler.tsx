import { useEffect, useState, useRef } from 'preact/hooks'

function ImageCycler({
  images,
  className,
  interval = 5000,
}: {
  images: { src: string; alt: string; id: number }[]
  className?: string
  interval?: number
}) {
  const [imgIdx, setImgIdx] = useState(0)
  const [touchStart, setTouchStart] = useState<number>(0)
  const [touchEnd, setTouchEnd] = useState<number>(0)

  const imgRef = useRef<HTMLImageElement>(null)
  let intervalRef = useRef<any>(null)
  const minSwipeDistance = 50

  useEffect(() => {
    intervalRef.current = setInterval(
      () =>
        imgIdx == images.length - 1 ? setImgIdx(0) : setImgIdx(imgIdx + 1),
      interval
    )
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [imgIdx])

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(0)
    setTouchStart(e.targetTouches[0].clientX)
  }
  const onTouchMove = (e: TouchEvent) => setTouchEnd(e.targetTouches[0].clientX)
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isRightSwipe) {
      imgIdx == 0 ? setImgIdx(images.length - 1) : setImgIdx(imgIdx - 1)
    }
    if (isLeftSwipe) {
      imgIdx == images.length - 1 ? setImgIdx(0) : setImgIdx(imgIdx + 1)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <img
        ref={imgRef}
        className={className}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
        src={images[imgIdx].src}
        alt={images[imgIdx].src}
      />
      <div className="flex space-x-2 mt-4">
        {images.map((img, i) => (
          <span
            onClick={() => setImgIdx(i)}
            className={`${
              img.id === imgIdx
                ? 'bg-mat-red catppuccin:bg-cat-green nightowl:bg-nightowl-orange'
                : 'bg-gray-400'
            } w-2 h-2 rounded-full cursor-pointer`}
          ></span>
        ))}
      </div>
    </div>
  )
}

export default ImageCycler
