import React from 'react'

import BaseTextElement from '../element/TextElement/BaseTextElement'
import { ElementTypes, type PPTElement } from '@/types/slides'

interface Props {
  elementInfo: PPTElement
  elementIndex: number
}
function ThumbnailElement({ elementInfo, elementIndex }: Props) {
  const elementTypeMap: Record<string, any> = {
    [ElementTypes.TEXT]: BaseTextElement,
  }
  const CurrentElementComponent = elementTypeMap[elementInfo.type] || null

  return (
    <div
      className={`base-element base-element-${elementInfo.id}`}
      style={{ zIndex: elementIndex }}
    >
      {CurrentElementComponent && (
        <CurrentElementComponent elementInfo={elementInfo} target="thumbnail" />
      )}
    </div>
  )
}

export default ThumbnailElement
