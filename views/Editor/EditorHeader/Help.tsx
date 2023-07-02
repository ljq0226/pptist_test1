'use client'
import React from 'react'
import {
  Command,
  FileQuestion,
  HelpCircle,
  Lightbulb,
} from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

function Help() {
  return (
    <>
      <DropdownMenu >
        <DropdownMenuTrigger asChild >
          <div className='flex items-center p-2 rounded cursor-pointer hover:bg-gray-300'>
            <HelpCircle size={16} />
            <span>演示</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 cursor-pointer">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Lightbulb className="w-4 h-4 mr-2" />
              <span>意见反馈</span>
              <DropdownMenuShortcut></DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FileQuestion className="w-4 h-4 mr-2" />
              <span>常见问题</span>
              <DropdownMenuShortcut></DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Command className="w-4 h-4 mr-2" />
              <span>快捷键</span>
              <DropdownMenuShortcut></DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default Help
