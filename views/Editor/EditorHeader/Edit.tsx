'use client'
import React from 'react'
import {
  Edit3,
  Grid,
  MenuSquareIcon,
  PlusCircle,
  Redo2,
  RotateCcw,
  Ruler, Undo2,
  XCircle,
} from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

function Edit() {
  return (
    <>
      <DropdownMenu >
        <DropdownMenuTrigger asChild >
        <div className='flex items-center p-2 rounded cursor-pointer hover:bg-gray-300'>
            <Edit3 size={16}/>
            <span>编辑</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 cursor-pointer">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Undo2 className="w-4 h-4 mr-2" />
              <span>撤销</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Redo2 className="w-4 h-4 mr-2" />
              <span>重做</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <PlusCircle className="w-4 h-4 mr-2" />
              <span>添加页面</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <XCircle className="w-4 h-4 mr-2" />
              <span>删除页面</span>
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Grid className="w-4 h-4 mr-2" />
              <span>打开网格线</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Ruler className="w-4 h-4 mr-2" />
              <span>打开标尺</span>
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <RotateCcw className="w-4 h-4 mr-2" />
            <span>重置幻灯片</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <MenuSquareIcon className="w-4 h-4 mr-2" />
            <span>打开选择面板</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default Edit
