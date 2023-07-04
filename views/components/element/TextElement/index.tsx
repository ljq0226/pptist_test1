import { useState } from 'react'
import ProsemirrorEditor from '../ProsemirrorEditor'
import ElementOutline from '../ElementOutline'
import useShadowStyle from '../hooks/useElementShadow'
import type { ContextmenuItem } from '@/components/Contextmenu/types'
import { cn } from '@/lib/utils'

// Add Tailwind CSS styles to your React project
import type { PPTTextElement } from '@/types/slides'

interface Props {
  elementInfo: PPTTextElement
  selectElement: (e: MouseEvent | TouchEvent, element: PPTTextElement, canMove?: boolean) => void
  contextmenus?: () => ContextmenuItem[] | null
}
function EditableElementText({ elementInfo, selectElement, contextmenus }: Props) {
  const [shadow] = useState(elementInfo.shadow)
  const { shadowStyle } = useShadowStyle(shadow)
  return (
    <div
      className={cn('editable-element-text', elementInfo.lock && 'lock')}
      style={{
        top: `${elementInfo.top}px`,
        left: `${elementInfo.left}px`,
        width: `${elementInfo.width}px`,
        height: `${elementInfo.height}px`,
      }}
    >
      <div
        className="rotate-wrapper"
        style={{ transform: `rotate(${elementInfo.rotate}deg)` }}
      >
        <div
          className="element-content"
          ref="elementRef"
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
          <ElementOutline
            width={elementInfo.width}
            height={elementInfo.height}
            outline={elementInfo.outline}
          />
          <ProsemirrorEditor
            elementId={elementInfo.id}
            defaultColor={elementInfo.defaultColor}
            defaultFontName={elementInfo.defaultFontName}
            editable={!elementInfo.lock}
            value={elementInfo.content}
            // style={{
            //   '--textIndent': `${elementInfo.textIndent || 0}px`,
            //   '--paragraphSpace': `${elementInfo.paragraphSpace === undefined ? 5 : elementInfo.paragraphSpace}px`,
            // }}
          />

          {/* 当字号过大且行高较小时，会出现文字高度溢出的情况，导致拖拽区域无法被选中，因此添加了以下节点避免该情况 */}
          <div className="drag-handler top"></div>
          <div className="drag-handler bottom"></div>
        </div>
      </div >
    </div >
  )
}

export default EditableElementText
