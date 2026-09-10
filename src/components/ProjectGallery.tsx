import { useCallback, useEffect, useRef, useState } from 'react'
import type { ProjectImage } from '../data/projects'
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from './icons'

export function ProjectGallery({ images, projectName }: { images: ProjectImage[]; projectName: string }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([])
  const closeRef = useRef<HTMLButtonElement>(null)

  const open = lightboxIndex !== null

  const close = useCallback(() => {
    const returnTo = triggerRefs.current[lightboxIndex ?? 0]
    setLightboxIndex(null)
    returnTo?.focus()
  }, [lightboxIndex])

  const step = useCallback(
    (delta: number) => {
      setLightboxIndex((i) => (i === null ? i : (i + delta + images.length) % images.length))
    },
    [images.length],
  )

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }

    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open, close, step])

  if (images.length === 0) return null

  const active = lightboxIndex === null ? null : images[lightboxIndex]

  return (
    <>
      <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((image, i) => (
          <button
            key={image.src}
            ref={(el) => {
              triggerRefs.current[i] = el
            }}
            type="button"
            onClick={() => setLightboxIndex(i)}
            className="shot-thumb"
            aria-label={`View larger: ${image.alt}`}
          >
            <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
          </button>
        ))}
      </div>

      {active && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${projectName} screenshots`}
          onClick={close}
        >
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.alt} />
            {active.caption && <p className="lightbox-caption">{active.caption}</p>}
          </div>

          <button ref={closeRef} type="button" className="lightbox-btn lightbox-close" onClick={close} aria-label="Close">
            <CloseIcon className="h-5 w-5" />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                className="lightbox-btn lightbox-prev"
                onClick={(e) => {
                  e.stopPropagation()
                  step(-1)
                }}
                aria-label="Previous image"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="lightbox-btn lightbox-next"
                onClick={(e) => {
                  e.stopPropagation()
                  step(1)
                }}
                aria-label="Next image"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </>
          )}
        </div>
      )}
    </>
  )
}
