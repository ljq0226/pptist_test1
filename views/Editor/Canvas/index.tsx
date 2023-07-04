import React from 'react'
import { slides } from '@/mocks/slides'
import { ElementTypes } from '@/types/slides'
import BaseTextElement from '@/views/components/element/TextElement/BaseTextElement'

function Canvas() {
  const mockdata = slides[0]
  const scale = 100
  const elementTypeMap: Record<string, any> = {
    [ElementTypes.TEXT]: BaseTextElement,
  }
  const CurrentElementComponent = elementTypeMap.text || null
  return (
    <div className={`flex-1 w-[${scale * 5}px] left-0 bg-red-200 scale-${scale}`}
      style={{ height: `${scale * 5}px` }}>Canvas
      <svg
        overflow="visible"
        width="546"
        height="462.5"
      >
        <g
        >
          <path
            className="shape-path"
            vector-effect="non-scaling-stroke"
            stroke-linecap="butt"
            stroke-miterlimit="8"
            d="M 0 0 L 0 200 L 200 200 Z"
            stroke=""
            stroke-width=""
            stroke-dasharray='0 0'
          ></path >
        </g >
      </svg >
      {mockdata.elements.map((item, index) => {
        if (item.type === 'text') {
          return (
            <div>
              <CurrentElementComponent elementInfo={item} />
            </div>
          )
        }
        return <>
        </>
      })}

    </div >
  )
}

export default Canvas
