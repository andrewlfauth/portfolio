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
  const imgRef = useRef<HTMLImageElement>(null)
  let intervalRef = useRef<any>(null)

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

  return (
    <div className='flex flex-col items-center'>
      <img
        ref={imgRef}
        className={className}
        src={images[imgIdx].src}
        alt={images[imgIdx].src}
      />
      <div className='flex space-x-2 mt-4'>
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
