import React from 'react'
import type { PPTTextElement } from '@/types/slides'
import ElementOutline from '@/views/components/element/ElementOutline'

import useElementShadow from '@/views/components/element/hooks/useElementShadow'

interface Props {
  elementInfo: PPTTextElement
}

const BaseElementText: React.FC<Props> = ({ elementInfo }) => {
  const { shadowStyle } = useElementShadow(elementInfo.shadow)

  // const cssVar: CSSProperties = {
  //   '--textIndent': `${elementInfo.textIndent || 0}px`,
  //   '--paragraphSpace': `${elementInfo.paragraphSpace === undefined ? 5 : elementInfo.paragraphSpace}px`,
  // }

  return (
    <div
      className=" base-element-text"
      style={{
        top: `${elementInfo.top}px`,
        left: `${elementInfo.left}px`,
        width: `${elementInfo.width}px`,
        height: `${elementInfo.height}px`,
      }}
    >
      <div className="rotate-wrapper" style={{ transform: `rotate(${elementInfo.rotate}deg)` }}>
        <div
          className="relative element-content p-[10px] leading-3 break-words"
          style={{
            width: elementInfo.vertical ? 'auto' : `${elementInfo.width}px`,
            height: elementInfo.vertical ? `${elementInfo.height}px` : 'auto',
            backgroundColor: elementInfo.fill,
            opacity: elementInfo.opacity,
            textShadow: shadowStyle,
            lineHeight: elementInfo.lineHeight,
            letterSpacing: `${elementInfo.wordSpace || 0}px`,
            color: elementInfo.defaultColor,
            fontFamily: elementInfo.defaultFontName,
            writingMode: elementInfo.vertical ? 'vertical-rl' : 'horizontal-tb',
          }}
        >
          <ElementOutline width={elementInfo.width} height={elementInfo.height} outline={elementInfo.outline} />
          <div className="text ProseMirror-static" dangerouslySetInnerHTML={{ __html: elementInfo.content }}></div>
        </div>
      </div>
    </div>
  )
}

export default BaseElementText
