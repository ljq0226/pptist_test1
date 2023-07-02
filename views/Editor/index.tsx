import React from 'react'
import EditorHeader from './EditorHeader'
import Thumbnials from './Thumbnails'
import Canvas from './Canvas'
import Toolbar from './Toolbar'

function Editor() {
  return (
    <div className='h-full'>

      <EditorHeader />
      <div className="flex w-full h-full">
        <Thumbnials />

        <Canvas />

        <Toolbar />

      </div>

    </div>
  )
}

export default Editor
