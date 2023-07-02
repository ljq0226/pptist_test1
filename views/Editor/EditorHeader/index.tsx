import React from 'react'
import File from './File'
import Edit from './Edit'
import Help from './Help'
import Presentation from './Play'

function EditorHeader() {
  return (
    <div className="flex px-4">

      <div className='flex py-2'>
        <File />
        <Edit />
        <Presentation />
        <Help />
      </div>
      <div className="flex-1"></div>
      <div className="flex">
        1
      </div>
    </div>

  )
}

export default EditorHeader
