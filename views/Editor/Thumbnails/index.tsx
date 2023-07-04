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

import { slides } from '@/mocks/slides'
import ThumbnailSlide from '@/views/components/ThumbnailSlide'

function Thumbnials() {
  const mockData = slides
  return (
    <div className='w-[250px] flex flex-col'>
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
      <div className='h-full overflow-y-scroll'>
        {
          mockData.map((element, index) => {
            return (
              <>
                {/* <ThumbnailSlide key={element.id} slide={element} size={120} /> */}
              </>

            )
          })
        }

      </div>

    </div>
  )
}

export default Thumbnials
