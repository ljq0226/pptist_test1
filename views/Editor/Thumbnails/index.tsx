import { ChevronDown, Plus } from 'lucide-react'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

function Thumbnials() {
  return (
    <div className='w-[250px]  flex flex-col'>
      <div className="flex">
        <div className="flex-1 border cursor-pointer flex-center">
          <Plus size={16} />
          <p>添加幻灯片</p>
        </div>
        <div className='w-[30px] flex-center p-2 border'>
          <DropdownMenu>
            <DropdownMenuTrigger className='w-full h-full'>
              <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

      </div>

      {/* PPT缩略图 */}
      <div className='overflow-y-scroll'>

      </div>

    </div>
  )
}

export default Thumbnials
