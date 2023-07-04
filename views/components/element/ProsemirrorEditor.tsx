import React, { useRef } from 'react'

interface Props {
  elementId: string
  defaultColor: string
  defaultFontName: string
  value: string
  editable: boolean
  autoFocus?: boolean
}

function ProsemirrorEditor({ elementId }: Props) {
  const editorViewRef = useRef(null)

  return (
    <div
      className="prosemirror-editor"
      ref={editorViewRef}
    ></div >
  )
}

export default ProsemirrorEditor
