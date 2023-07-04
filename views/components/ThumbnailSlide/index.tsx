import type { FC } from 'react'
import React from 'react'

import ThumbnailElement from './ThumbnailElement'
import type { Slide } from '@/types/slides'
import { VIEWPORT_SIZE } from '@/configs/canvas'
import useSlideBackgroundStyle from '@/hooks/useSlideBackgroundStyle'

interface Props {
  slide: Slide
  size: number
  visible?: boolean
}

const ThumbnailSlide: FC<Props> = ({ slide, size, visible = true }) => {
  const viewportRatio = 0.5625

  const background = slide.background
  const { backgroundStyle } = useSlideBackgroundStyle(background)

  const scale = size / VIEWPORT_SIZE
  console.log('Scale', scale)
  return (
    <div className="relative thumbnail-slide" style={{ width: `${size}px`, height: `${size * viewportRatio}px` }}>
      {visible
        ? (
          <div
            className={`absolute scale-[${scale}] w-[${VIEWPORT_SIZE}px] h-[${VIEWPORT_SIZE * viewportRatio}px]`}
          >
            <div className="background" style={backgroundStyle()} ></div>
            {slide.elements.map((element, index) => (
              <ThumbnailElement key={element.id} elementInfo={element} elementIndex={index + 1} />
            ))}
          </div>)

        : (
          <div className="placeholder">加载中 ...</div>)
      }
    </div>
  )
}

export default ThumbnailSlide
