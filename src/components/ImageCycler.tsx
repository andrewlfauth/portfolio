import { useEffect, useState, useRef, useCallback } from 'preact/hooks'

function ImageCycler({
  images,
  className,
}: {
  images: { src: string; alt: string }[]
  className: string
}) {
  const [imgIdx, setImgIdx] = useState(0)
  const imgRef = useRef<HTMLImageElement>(null)
  let intervalRef = useRef<any>(null)

  useEffect(() => {
    intervalRef.current = setInterval(
      () =>
        imgIdx == images.length - 1 ? setImgIdx(0) : setImgIdx(imgIdx + 1),
      5000
    )
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [imgIdx])

  return (
    <>
      <img
        ref={imgRef}
        className={className}
        src={images[imgIdx].src}
        alt={images[imgIdx].src}
      />
    </>
  )
}

export default ImageCycler
