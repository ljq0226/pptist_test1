import React from 'react'
import { useElementOutline } from './hooks/useElementOutline'
import type { PPTElementOutline } from '@/types/slides'

interface Props {
  width: number
  height: number
  outline: PPTElementOutline | undefined
}
function ElementOutline({ width, height, outline }: Props) {
  const {
    outlineWidth,
    outlineStyle,
    outlineColor,
  } = useElementOutline(outline)

  return (
    <>
      {
        outline
        && <svg
          className="absolute top-0 left-0 overflow-visible element-outline"
          width={width}
          height={height}
        >
          <path
            vector-effect="non-scaling-stroke"
            stroke-linecap="butt"
            stroke-miterlimit="8"
            fill="transparent"
            d={`M0,0 L${width},0 L${width},${height} L0,${height} Z`}
            stroke={outlineColor}
            strokeWidth={outlineWidth}
            strokeDasharray={outlineStyle === 'dashed' ? '10 6' : '0 0'}
          ></path>
        </svg>
      }

    </>
  )
}

export default ElementOutline
