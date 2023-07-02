'use client'
import React from 'react'
import {
  MonitorPlay,
  PlayCircle,
  Presentation,
} from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

function Play() {
  return (
    <>
      <DropdownMenu >
        <DropdownMenuTrigger asChild >
          <div className='flex items-center p-2 rounded cursor-pointer hover:bg-gray-300'>
            <Presentation size={16} />
            <span>演示</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 cursor-pointer">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <MonitorPlay className="w-4 h-4 mr-2" />
              <span>从头开始</span>
              <DropdownMenuShortcut></DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <PlayCircle className="w-4 h-4 mr-2" />
              <span>从当前页开始</span>
              <DropdownMenuShortcut></DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default Play
