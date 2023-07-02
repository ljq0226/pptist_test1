'use client'
import React from 'react'
import {
  CreditCard,
  FolderClosed,
  Settings, User,
} from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

function File() {
  return (
    <>
      <DropdownMenu >
        <DropdownMenuTrigger asChild >
          <div className='flex items-center p-2 rounded cursor-pointer hover:bg-gray-300'>
            <FolderClosed size={16} />
            <span>文件</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 cursor-pointer">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="w-4 h-4 mr-2" />
              <span>导入 pptist 文件</span>
              <DropdownMenuShortcut></DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard className="w-4 h-4 mr-2" />
              <span>导入 pptx 文件</span>
              <DropdownMenuShortcut></DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="w-4 h-4 mr-2" />
              <span>导出文件</span>
              <DropdownMenuShortcut></DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default File
